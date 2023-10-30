import express from "express";
import { env } from "./config/index.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// ROUTES
import playerRoutes from "./routes/player.router.js";
import authRoutes from "./routes/auth.router.js";
import articleRoutes from "./routes/article.router.js";

const app = express();

const PORT = process.env.PORT || 8080;

// DATABASE
mongoose
  .connect(env.mongoURL)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(error));

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ROUTER
app.use("/api/player", playerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/product", articleRoutes);

// SERVER
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
