<div align="center">

# <img src="/client/public/logo.png" width="48" height="48" style="vertical-align: middle;"> Konvo

### *Where conversations come alive in real-time*

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Socket.io-4.8.1-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Live%20Demo-konvo--tme9.onrender.com-success?style=flat-square&logo=render" alt="Live Demo">
  <img src="https://img.shields.io/badge/Status-Deployed-brightgreen?style=flat-square" alt="Status">
</p>

---

**🚀 [Live Demo](https://konvo-tme9.onrender.com) | 📚 [Documentation](#-documentation) | 🐛 [Report Bug](https://github.com/Spidy394/Konvo/issues) | 💡 [Request Feature](https://github.com/Spidy394/Konvo/issues)**

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [⚡ Quick Start](#-quick-start)
- [🔧 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🚀 Deployment](#-deployment)
- [📖 API Documentation](#-api-documentation)
- [🎨 UI Components](#-ui-components)
- [🔒 Authentication](#-authentication)
- [📱 Responsive Design](#-responsive-design)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Authors](#-authors)

## ✨ Features

<details>
<summary>🔥 Core Features</summary>

- **💬 Real-time Messaging**: Instant message delivery with Socket.io
- **👥 User Authentication**: Secure JWT-based auth with bcrypt encryption
- **🖼️ Media Sharing**: Image and file uploads via Cloudinary integration
- **🌐 Online Status**: Real-time user presence indicators
- **📱 Responsive Design**: Mobile-first approach with TailwindCSS
- **🎨 Modern UI**: Beautiful interface with DaisyUI components
- **🌙 Theme Support**: Dark/Light theme switching
- **⚡ Fast Performance**: Optimized with Vite and modern React patterns

</details>

<details>
<summary>🚀 Advanced Features</summary>

- **📊 Real-time Analytics**: Live user activity tracking
- **👤 User Profiles**: Customizable user profiles with avatars
- **🔐 Secure Sessions**: HTTP-only cookies with CORS protection
- **📈 Scalable Architecture**: Microservice-ready design
- **🛡️ Data Validation**: Comprehensive input validation and sanitization
- **⚠️ Error Handling**: Graceful error handling with user-friendly messages
- **📱 PWA Ready**: Progressive Web App capabilities

</details>

## 🛠️ Tech Stack

### Frontend (Client)
```mermaid
graph LR
    A[React 19.1.0] --> B[Vite Build Tool]
    A --> C[TailwindCSS 4.1.8]
    C --> D[DaisyUI Components]
    A --> E[Socket.io Client]
    A --> F[Zustand State]
    A --> G[React Router DOM]
    A --> H[Axios HTTP]
    A --> I[React Hot Toast]
    A --> J[Lucide Icons]
```

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.0 | UI Framework |
| **Vite** | 6.3.5 | Build Tool & Dev Server |
| **TailwindCSS** | 4.1.8 | Utility-first CSS Framework |
| **DaisyUI** | 5.0.43 | Pre-built UI Components |
| **Socket.io Client** | 4.8.1 | Real-time Communication |
| **Zustand** | 5.0.5 | State Management |
| **React Router DOM** | 7.6.1 | Client-side Routing |
| **Axios** | 1.9.0 | HTTP Client |
| **React Hot Toast** | 2.5.2 | Notification System |
| **Lucide React** | 0.511.0 | Modern Icons |

### Backend (Server)
```mermaid
graph LR
    A[Node.js] --> B[Express 5.1.0]
    B --> C[MongoDB]
    C --> D[Mongoose ODM]
    B --> E[Socket.io Server]
    B --> F[JWT Auth]
    F --> G[bcryptjs]
    B --> H[Cloudinary]
    B --> I[CORS]
    B --> J[Cookie Parser]
```

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 20+ | Runtime Environment |
| **Express** | 5.1.0 | Web Framework |
| **MongoDB** | Latest | NoSQL Database |
| **Mongoose** | 8.15.1 | MongoDB ODM |
| **Socket.io** | 4.8.1 | WebSocket Server |
| **JWT** | 9.0.2 | Authentication Tokens |
| **bcryptjs** | 3.0.2 | Password Hashing |
| **Cloudinary** | 2.6.1 | Media Management |
| **CORS** | 2.8.5 | Cross-Origin Requests |
| **dotenv** | 16.5.0 | Environment Variables |

## 🏗️ Architecture

<details>
<summary>📊 System Architecture Diagram</summary>

```mermaid
graph TB
    subgraph "Client Side"
        A[React App] --> B[Zustand Store]
        A --> C[Socket.io Client]
        A --> D[Axios HTTP Client]
        B --> E[Auth Store]
        B --> F[Chat Store]
        B --> G[Theme Store]
    end
    
    subgraph "Server Side"
        H[Express Server] --> I[Socket.io Server]
        H --> J[Auth Routes]
        H --> K[Message Routes]
        H --> L[Auth Middleware]
        I --> M[Real-time Events]
    end
    
    subgraph "Database"
        N[MongoDB]
        O[User Collection]
        P[Message Collection]
        N --> O
        N --> P
    end
    
    subgraph "External Services"
        Q[Cloudinary]
        R[JWT Tokens]
    end
    
    C -.->|WebSocket| I
    D -->|HTTP/HTTPS| H
    H --> N
    H --> Q
    L --> R
    
    style A fill:#61DAFB
    style H fill:#339933
    style N fill:#47A248
    style Q fill:#3448C5
```

</details>

<details>
<summary>🗄️ Database Schema</summary>

```mermaid
erDiagram
    User {
        ObjectId _id
        String email
        String fullName
        String password
        String profilePic
        Date createdAt
        Date updatedAt
    }
    
    Message {
        ObjectId _id
        ObjectId senderId
        ObjectId receiverId
        String text
        String image
        Date createdAt
        Date updatedAt
    }
    
    User ||--}o Message : sends
    User ||--}o Message : receives
```

</details>

## ⚡ Quick Start

> **Prerequisites**: Node.js 20+, MongoDB, Git

```bash
# 🚀 Clone the repository
git clone https://github.com/Spidy394/Konvo.git
cd Konvo

# 📦 Install dependencies for both client and server
npm run build

# 🔧 Set up environment variables
cp server/.env.example server/.env
# Edit server/.env with your configuration

# 🏃‍♂️ Start development servers
npm run dev:server  # Backend on port 5001
npm run dev:client  # Frontend on port 5173
```

**🎉 Open [http://localhost:5173](http://localhost:5173) to view the app!**

## 🔧 Installation

<details>
<summary>📋 Detailed Setup Instructions</summary>

### 1. Clone Repository
```bash
git clone https://github.com/Spidy394/Konvo.git
cd Konvo
```

### 2. Install Dependencies

#### Root Level
```bash
npm install
```

#### Server Dependencies
```bash
cd server
npm install
```

#### Client Dependencies
```bash
cd client
npm install
```

### 3. Database Setup

#### Option A: MongoDB Atlas (Recommended)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Add to environment variables

#### Option B: Local MongoDB
```bash
# Install MongoDB locally
# Ubuntu/Debian
sudo apt-get install mongodb

# macOS
brew install mongodb-community

# Start MongoDB service
sudo systemctl start mongod  # Linux
brew services start mongodb-community  # macOS
```

</details>

## ⚙️ Configuration

<details>
<summary>🔐 Environment Variables</summary>

Create a `.env` file in the `server` directory:

```bash
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/konvo
# or for Atlas: mongodb+srv://username:password@cluster.mongodb.net/konvo

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# CORS Configuration
CLIENT_URL=http://localhost:5173
```

</details>

<details>
<summary>🎨 Client Configuration</summary>

The client uses Vite configuration in `client/vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  }
})
```

</details>

## 🚀 Deployment

<details>
<summary>☁️ Deploy to Render.com</summary>

### Automatic Deployment
1. Fork this repository
2. Connect your GitHub account to [Render](https://render.com)
3. Create a new Web Service
4. Connect your forked repository
5. Configure environment variables
6. Deploy!

</details>



## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

```
ISC License

Copyright (c) 2025 Shubhodeep Mondal

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
```

## 👥 Authors

<div align="center">

### 🧑‍💻 **Shubhodeep Mondal**
*Full-Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-Spidy394-181717?style=for-the-badge&logo=github)](https://github.com/Spidy394)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/shubhodeep-mondal)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail)](mailto:shubhodeepmondal394@gmail.com)

</div>

---

<div align="center">

### 🌟 **Show your support**

Give a ⭐️ if this project helped you!

[![Star History Chart](https://api.star-history.com/svg?repos=Spidy394/Konvo&type=Date)](https://star-history.com/#Spidy394/Konvo&Date)

---

**Built with ❤️ by [Shubhodeep Mondal](https://github.com/Spidy394)**

*Konvo - Where conversations come alive in real-time* 💬✨

</div>