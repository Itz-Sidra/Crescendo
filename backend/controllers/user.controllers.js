import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true }, // Customize as needed
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Ensure role is one of the valid enums
    if (!["ADMIN", "TRAINER", "STUDENT"].includes(role)) {
      return res.status(400).json({ message: "Invalid role!" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, role },
    });

    res.status(201).json({ message: "User created successfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

export const createTrainer = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new trainer
    const newTrainer = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "TRAINER",
      },
    });

    res.status(201).json({
      message: "Trainer created successfully",
      trainer: {
        id: newTrainer.id,
        name: newTrainer.name,
        email: newTrainer.email,
        role: newTrainer.role,
      },
    });
  } catch (error) {
    if (error.code === "P2002") {
      // Handle Prisma unique constraint error
      return res.status(400).json({ message: "Email is already in use!" });
    }
    res.status(500).json({ message: "Error creating trainer", error: error.message });
  }
};