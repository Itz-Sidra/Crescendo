import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/auth/register-admin:
 *   post:
 *     summary: Register a new admin
 *     description: Creates a new admin account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 example: "ADMIN"
 *     responses:
 *       201:
 *         description: Admin registered successfully
 *       400:
 *         description: Email already in use
 *       500:
 *         description: Server error
 */

 
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user (Admin/Trainer/Student)
 *     description: Authenticates a user and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */

router.post("/register-admin", (req, res, next) => {
    req.body.role = "ADMIN"; 
    registerUser(req, res, next);
  });
  
router.post("/login", loginUser);

export default router;
