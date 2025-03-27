import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"; // Import user routes
import authRoutes from "./routes/auth.routes.js"; // Import auth routes
import { swaggerUi, swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes); // Mount user routes
app.use("/api/auth", authRoutes); // Mount auth routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Backend is running! 🚀");
});

export default app;
