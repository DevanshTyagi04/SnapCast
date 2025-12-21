# 🎥 SnapCast

SnapCast is a modern, full-stack media streaming platform that allows users to **record their screen, upload videos instantly, and share them securely**. It is built with scalability, security, and real-world DevOps practices in mind, combining modern frontend development with containerization, CI/CD, and Kubernetes deployment.

---

## 🚀 Technologies Used

### Frontend
- Next.js (App Router)
- React.js
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend & Database
- Drizzle ORM
- Xata (PostgreSQL-compatible database)
- Server Actions & API Route Handlers

### DevOps & Deployment
- Docker
- Kubernetes (Minikube)
- GitHub Actions (CI/CD)
- Vercel (Production Hosting)

### Security
- Arcjet (Rate Limiting, Bot Protection, Request Shielding)

---

## ✨ Features

- Real-time **Screen Recording**
- Instant video uploads with **custom thumbnails**
- **Public / Private** video visibility controls
- **Sharable video links**
- **Public video library**
- **Personal user profiles**
- Secure backend with **rate limiting & bot protection**
- Fully containerized and CI/CD-enabled architecture

---

## 👤 What Users Can Do

- Record their screen and upload videos on the go
- Manage uploaded videos from their personal profile
- Set videos as public or private
- Share videos using generated links
- Browse publicly available videos in the public library
- Stream uploaded videos seamlessly across devices

---

## 🔄 The Process

1. Designed the application architecture using Next.js App Router
2. Built reusable UI components and responsive layouts
3. Implemented screen recording and video upload workflows
4. Integrated database operations using Drizzle ORM and Xata
5. Added security layers using Arcjet
6. Dockerized the application for consistent environments
7. Deployed the app on Kubernetes (Minikube)
8. Automated testing and deployments using GitHub Actions
9. Deployed the production build to Vercel

---

## 🛠️ How I Built It

SnapCast was built following **production-grade best practices**:

- Used **TypeScript across the stack** for reliability
- Implemented **server components and server actions** for optimized data fetching
- Designed a modular project structure (`app/`, `components/`, `lib/`, `drizzle/`)
- Created CI/CD pipelines to automate builds and deployments
- Containerized the app using Docker and deployed with Kubernetes
- Secured APIs using Arcjet’s rate limiting and bot protection

---

## 📚 What I Learned

- Building scalable full-stack applications using Next.js App Router
- Managing databases using schema-safe ORMs (Drizzle)
- Containerizing applications with Docker
- Deploying and managing workloads in Kubernetes
- Implementing CI/CD pipelines with GitHub Actions
- Applying security best practices like rate limiting and bot detection
- Debugging and optimizing production-grade systems

---

## 🔮 How It Could Be Improved

- Add video analytics (views, watch time)
- Implement comments, likes, and user interactions
- Introduce playlists and content folders
- Support external cloud storage providers
- Add end-to-end tests using Playwright
- Deploy to managed Kubernetes platforms (EKS / GKE)

---

## ▶️ How to Run the Project Locally

### 1. Clone the Repository

git clone https://github.com/DevanshTyagi04/SnapCast.git
cd SnapCast

### 2. Install Dependencies

npm install

### 3. Setup Environment Variables

Create a .env file in the root directory:

DATABASE_URL=your_database_url
ARCJET_KEY=your_arcjet_key

### 4. Run the Development Server
npm run dev

🎬 Demo

🔗 Live App: https://snap-cast-alpha.vercel.app/

🎥 Demo Video: 

📎 Links

GitHub Repository: https://github.com/DevanshTyagi04/SnapCast

Live Deployment: https://snap-cast-alpha.vercel.app/
