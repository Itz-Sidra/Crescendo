Problem Statement 3# **Cloud-based PPT Access Control System**  

## 🚀 **Overview**  
This project is a **Cloud-based PPT Access Control System** that allows **admins to create trainers**, **trainers to manage student batches**, and **students to securely access PPTs**. The system ensures restricted access, **only allowing designated users to view materials**, while maintaining role-based authentication.

---

## 🛠️ **Tech Stack**  
- **Frontend:** React.js  
- **Backend:** Express.js   
- **Database:** PostgreSQL with Prisma ORM  
- **Authentication:** JWT-based authentication 
- **API Testing:** Swagger UI
- **Cloud Storage:** Google Cloud Platform  

---

## 📌 **Features**  
✔ **Admin can create trainers**  
✔ **Trainers can create student batches**  
✔ **Students can access PPTs based on their batch**  
✔ **Secure authentication using JWT**  
✔ **Role-based access control**  
✔ **Scalable and cloud-based solution**  

---

## ⚡ **API Endpoints (Swagger UI Preview)**  

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/auth/register-admin` | Register a new admin |
| **POST** | `/api/auth/login` | Login user (Admin/Trainer/Student) |
| **POST** | `/api/users/create-trainer` | Create a new trainer |

🔗 **API Documentation:** [Swagger UI](http://localhost:5000/api-docs)  

---

## 🔄 **Process Flow**  
1️⃣ **Admin registers and creates trainers**  
2️⃣ **Trainers create batches of students**  
3️⃣ **Students in a batch gain access to assigned PPTs**  
4️⃣ **Role-based authentication secures the platform**  

---

## ⚙ **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-repo-name.git
cd your-repo-name
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Setup Environment Variables**  
Create a `.env` file and configure it:  
```env
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_jwt_secret
```

### **4️⃣ Start the Server**  
```sh
npm run dev
```

### **5️⃣ Access API Documentation**  
Go to `http://localhost:5000/api-docs`

---

## 🛑 **Dependencies / Show Stoppers**  
- **Cloud Storage Issues** – If GCP storage fails, PPT access is disrupted  
- **Unauthorized Access** – Ensuring JWT-based authentication is robust  
- **Scalability** – Managing high user loads effectively  


---
