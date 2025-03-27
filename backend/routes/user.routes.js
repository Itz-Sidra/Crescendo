import express from "express";
import { getUsers, createUser, createTrainer } from "../controllers/user.controllers.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRole } from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * @swagger
 * /api/users/create-trainer:
 *   post:
 *     summary: Create a new trainer
 *     description: Only admins can create trainers.
 *     security:
 *       - BearerAuth: []
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
 *     responses:
 *       201:
 *         description: Trainer created successfully
 *       401:
 *         description: Unauthorized
 */

router.get("/", authenticateToken, authorizeRole(["ADMIN", "TRAINER"]), getUsers);
router.post("/", authenticateToken, authorizeRole(["ADMIN"]), createUser);
router.post("/create-trainer", authenticateToken, authorizeRole(["ADMIN"]), createTrainer); // ✅ Correct route

export default router;
