import express from "express";
import { createAssignment, getAssignments } from "../controllers/assignment.controllers.js";

const router = express.Router();

router.get("/", getAssignments);
router.post("/", createAssignment);

export default router;
