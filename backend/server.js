import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import prisma from "@prisma/client";

dotenv.config();
const app = express();
const { PrismaClient } = prisma;
const db = new PrismaClient();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
