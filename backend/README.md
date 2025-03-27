# Backend Implementation - Hackathon Project

## 📌 Project Overview
This backend is built to support a **Cloud-based PPT Access Control System**, allowing **admins** to create trainers, **trainers** to manage batches, and **students** to securely access assigned PPTs.

## 🔧 Tech Stack
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **Prisma** - ORM for database management
- **JWT (jsonwebtoken)** - Authentication
- **Swagger** - API documentation
- **dotenv** - Environment variable management

## 📂 Folder Structure
```
backend/
├── config/                # Database configuration
│   ├── db.js             # Prisma database connection
├── controllers/           # Logic for each feature
│   ├── auth.controllers.js
│   ├── batch.controllers.js
│   ├── user.controllers.js
│   ├── submission.controllers.js
├── middleware/            # Middleware functions
│   ├── auth.middleware.js # Authentication middleware
│   ├── role.middleware.js # Role-based access control
├── prisma/                # Prisma ORM setup
│   ├── schema.prisma      # Database schema definition
├── routes/                # API routes
│   ├── auth.routes.js     # Authentication routes
│   ├── batch.routes.js    # Batch-related routes
│   ├── user.routes.js     # User management routes
│   ├── submission.routes.js # Assignment submission routes
├── utils/                 # Utility functions
│   ├── generateToken.js   # JWT token generation
├── .env                   # Environment variables
├── app.js                 # Main Express app
├── server.js              # Server entry point
├── swagger.js             # Swagger API documentation setup
```

## 🚀 Installation & Setup
1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-repo.git
   cd backend
   ```
2. **Install dependencies**  
   ```bash
   npm install
   ```
3. **Set up environment variables**  
   Create a `.env` file and add:
   ```plaintext
   DATABASE_URL=<your_database_url>
   JWT_SECRET=<your_secret_key>
   ```
4. **Run the development server**  
   ```bash
   npm start
   ```

## 📡 API Endpoints
### 🔑 Authentication
- `POST /api/auth/register-admin` - Register a new admin
- `POST /api/auth/login` - Login as Admin/Trainer/Student
- `POST /api/users/create-trainer` - Create a new trainer

### 📂 Batches & Users - will be implemented later
- `POST /api/batch/create` - Create a new batch
- `GET /api/batch/:id/students` - Get students of a batch

## 🛠 Middleware & Utilities
- **Auth Middleware** - Protects routes & verifies JWT
- **Role Middleware** - Ensures correct access levels
- **Token Utility** - Generates JWT for authentication

## 🏗 Database (Prisma Setup)
- `schema.prisma` defines models for **Users, Batches, and Assignments**.
- `migrations/` stores database migrations.

## 📖 API Documentation
Swagger UI is set up at:  
📌 **`http://localhost:5000/api-docs`**

---
This `README.md` is for developers working on the backend. 🚀
