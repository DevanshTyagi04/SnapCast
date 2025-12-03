"use client";

import FileInput from '@/components/FileInput'
import FormField from '@/components/FormField'
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from '@/constants';
import { getThumbnailUploadUrl, getVideoUploadUrl, saveVideoDetails } from '@/lib/actions/video';
import { useFileInput } from '@/lib/hooks/useFileInput';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

const uploadFileToBunny = (
  file: File,
  uploadUrl: string,
  accessKey: string
): Promise<void> =>
  fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
      AccessKey: accessKey,
    },
    body: file,
  }).then((response) => {
    if (!response.ok)
      throw new Error(`Upload failed with status ${response.status}`);
  });


const page = () => {

    const router = useRouter();

    const [formData,setFormData] = useState({
        title: '',
        description: '',
        visibility: 'public',
    });

    const video = useFileInput(MAX_VIDEO_SIZE);

    const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

    const[error,setError] = useState('');

    const [videoDuration, setVideoDuration] = useState<number | null>(null);

    useEffect(() => {
        if (video.duration !== null) {
        setVideoDuration(video.duration);
        }
    }, [video.duration]);

    const[isSubmitting,setIsSubmitting] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target;

        setFormData((prevState) => ({...prevState, [name]: value}))
    } 

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        try{
            if(!video.file || !thumbnail.file){
                setError('Please upload and video and thumbnail');
                return;
            }
            if(!formData.title || !formData.description){
                setError('Please fill in all the details');
                return;
            }
            // Upload the video to Bunny
             const {
                videoId,
                uploadUrl: videoUploadUrl,
                accessKey: videoAccessKey,
            } = await getVideoUploadUrl();

            if (!videoUploadUrl || !videoAccessKey) throw new Error("Failed to get video upload credentials");
            
            await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey);
            // Upload the thumbnail to DB
            const {
                uploadUrl: thumbnailUploadUrl,
                cdnUrl: thumbnailCdnUrl,
                accessKey: thumbnailAccessKey,
            } = await getThumbnailUploadUrl(videoId);

            if (!thumbnailUploadUrl || !thumbnailCdnUrl || !thumbnailAccessKey)
                throw new Error("Failed to get thumbnail upload credentials");

            await uploadFileToBunny(
                thumbnail.file,
                thumbnailUploadUrl,
                thumbnailAccessKey
            );
            await saveVideoDetails({
                videoId,
                thumbnailUrl: thumbnailCdnUrl,
                ...formData,
                duration: videoDuration,
            });
            // Attach Thumbnail
            // Create a new DB entry for the video details(urls,data)
            router.push(`/video/${videoId}`);
        } catch(error){
            console.log('Error submitting form:',error);
        }finally{
            setIsSubmitting(false);
        }
    }

    return (
        <div className='wrapper-md upload-page'>
            <h1>Upload a video</h1>
            {error && <div className='error-field'>{error}</div>}

            <form action="" className='rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5' onSubmit={handleSubmit}>
                <FormField 
                    id="title"
                    label="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter a clear and concise video title"
                />
                <FormField 
                    id="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    as='textarea'
                    placeholder="Describe what this video is about"
                />
                <FileInput
                    id="video"
                    label="Video"
                    accept="video/*"
                    file={video.file}
                    previewUrl={video.previewUrl}
                    inputRef={video.inputRef}
                    onChange={video.handleFileChange}
                    onReset={video.resetFile}
                    type="video"
                />

                <FileInput
                    id="thumbnail"
                    label="Thumbnail"
                    accept="image/*"
                    file={thumbnail.file}
                    previewUrl={thumbnail.previewUrl}
                    inputRef={thumbnail.inputRef}
                    onChange={thumbnail.handleFileChange}
                    onReset={thumbnail.resetFile}
                    type="image"
                />
                <FormField 
                    id="visibility"
                    label="Visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    as='select'
                    options={[
                        {value: 'public',label: 'Public'},
                        {value: 'private',label: 'Private'},
                    ]}
                />
                <button type='submit' disabled={isSubmitting} className='submit-button'>
                    {isSubmitting ? 'Uploading...' : 'Upload video'}
                </button>
            </form>
        </div>
    )
}

export default page
