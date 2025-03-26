import express from "express";
import { getUsers, createUser } from "../controllers/user.controllers.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authenticateToken, getUsers); 
router.post("/", createUser);

export default router;
