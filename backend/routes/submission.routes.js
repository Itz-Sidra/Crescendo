import express from "express";
import { submitAssignment, getSubmissions } from "../controllers/submission.controllers.js";

const router = express.Router();

router.get("/", getSubmissions);
router.post("/", submitAssignment);

export default router;
