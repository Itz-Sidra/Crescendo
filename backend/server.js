import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";

const app = express();
const db = new PrismaClient();

app.use(cors());
app.use(express.json());

// Set up storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Registration endpoint
app.post("/register", upload.fields([{ name: 'photo' }, { name: 'resume' }]), async (req, res) => {
  const { name, parentName, contactNumber, parentContactNumber } = req.body;
  const photo = req.files['photo'][0].path;
  const resume = req.files['resume'][0].path;

  try {
    const newStudent = await db.student.create({
      data: {
        name,
        parentName,
        photo,
        contactNumber,
        parentContactNumber,
        resume,
      },
    });

    // Create a JWT token
    const token = jwt.sign({ id: newStudent.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ newStudent, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
