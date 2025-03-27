import express from "express";
import { getUsers, createUser, createTrainer } from "../controllers/user.controllers.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { authorizeRole } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", authenticateToken, authorizeRole(["ADMIN", "TRAINER"]), getUsers);
router.post("/", authenticateToken, authorizeRole(["ADMIN"]), createUser);
router.post("/create-trainer", authenticateToken, authorizeRole(["ADMIN"]), createTrainer); // ✅ Correct route

export default router;
