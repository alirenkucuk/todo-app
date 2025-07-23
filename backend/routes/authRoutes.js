//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : authRoutes.js
/*  Goal           : Define authentication endpoints for registration and login
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────/*/

import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Kayıt ve giriş rotaları
router.post("/register", register);
router.post("/login", login);

export default router;