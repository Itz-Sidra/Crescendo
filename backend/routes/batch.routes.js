import express from "express";
import { createBatch, getBatches } from "../controllers/batch.controllers.js";

const router = express.Router();

router.get("/", getBatches);
router.post("/", createBatch);

export default router;
