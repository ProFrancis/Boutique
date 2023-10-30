import express from "express";
import { verifieToken } from "../middlewares/auth.js";

import {
  getArticle,
  postArticle,
  getArticleById,
  deleteArticle,
  putArticle,
} from "../controllers/article.controller.js";

const router = express.Router();

router.post("/post", postArticle);

router.get("/get", getArticle);

router.get("/get/:id", getArticleById);

router.delete("/delete/:id", deleteArticle);

router.put("/update/:id", putArticle);

export default router;
