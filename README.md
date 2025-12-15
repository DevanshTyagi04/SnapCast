🎥 SnapCast

SnapCast is a modern, full-stack media streaming platform that enables users to record their screen, upload videos instantly, and share them securely. It is designed with scalability, security, and real-world DevOps practices in mind, combining modern frontend technologies with containerization, CI/CD, and Kubernetes deployment.

🚀 Technologies Used
Frontend

Next.js (App Router)

React.js

TypeScript

Tailwind CSS

Shadcn UI

Backend & Database

Drizzle ORM

Xata (PostgreSQL-compatible database)

Server Actions & API Route Handlers

DevOps & Deployment

Docker

Kubernetes (Minikube)

GitHub Actions (CI/CD)

Vercel (Production Hosting)

Security

Arcjet (Rate Limiting, Bot Protection, Request Shielding)

✨ Features

Real-time Screen Recording

Instant video upload with custom thumbnails

Public / Private video visibility controls

Sharable video links

Public video library

Personal user profiles

Secure backend with rate limiting & bot protection

Fully containerized & CI/CD-enabled architecture

👤 What Users Can Do

Record their screen and upload videos on the go

Manage uploaded videos from their personal profile

Set videos as public or private

Share videos using generated links

Browse publicly available videos in the public library

Stream uploaded videos seamlessly from any device

🔄 The Process

Designed the application architecture using Next.js App Router

Built reusable UI components and responsive layouts

Implemented screen recording and video upload workflows

Integrated database operations using Drizzle ORM and Xata

Added security layers using Arcjet

Dockerized the application for consistent environments

Deployed the app on Kubernetes (Minikube)

Automated testing and deployments using GitHub Actions

Deployed production build to Vercel

🛠️ How I Built It

SnapCast was built following production-grade best practices:

Used TypeScript across the stack for reliability

Implemented server components and server actions for optimized data fetching

Designed a modular project structure (app/, components/, lib/, drizzle/)

Created a CI/CD pipeline to automate builds and deployments

Used Docker and Kubernetes to simulate real-world cloud deployments

Secured APIs and routes with Arcjet’s rate limiting and bot protection

📚 What I Learned

Designing scalable full-stack applications using Next.js App Router

Managing databases using schema-safe ORMs (Drizzle)

Containerizing applications with Docker

Deploying and managing workloads in Kubernetes

Building CI/CD pipelines with GitHub Actions

Implementing security mechanisms like rate limiting and bot detection

Debugging and optimizing production-grade systems

🔮 How It Could Be Improved

Add video analytics (views, watch time)

Implement user comments and likes

Introduce playlists and folders

Support cloud storage providers for media

Add E2E tests using Playwright

Deploy to managed Kubernetes (EKS/GKE)

▶️ How to Run the Project Locally
1. Clone the Repository
git clone https://github.com/DevanshTyagi04/SnapCast.git
cd SnapCast

2. Install Dependencies
npm install

3. Setup Environment Variables

Create a .env file and add required variables:

DATABASE_URL=your_database_url
ARCJET_KEY=your_arcjet_key

4. Run the Development Server
npm run dev


Visit: http://localhost:3000

🎬 Demo

🔗 Live App: https://snap-cast-alpha.vercel.app/

🎥 Demo Video:

📎 Links

GitHub Repo: https://github.com/DevanshTyagi04/SnapCast

Live Deployment: https://snap-cast-alpha.vercel.app/

⭐ If you like this project, consider giving it a star!
