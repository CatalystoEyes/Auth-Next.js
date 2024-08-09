# Auth Next.js

This is a fullstack Next.js application using Prisma with MongoDB for database management and Auth.js for authentication.

## Prerequisites

- Node.js (>= 14.x)
- Docker

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CatalystoEyes/Auth-Next.js.git
cd Auth-Next.js
```

### 2. Install dependencies
```npm i```

### 3. Run docker Image
```docker run -p 3000:3000 -e DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority" Auth-Next.js```
