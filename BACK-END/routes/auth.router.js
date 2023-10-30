import express from "express";
import { verifieToken } from "../middlewares/auth.js";

import { signup, sign } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/sign", sign);

export default router;
