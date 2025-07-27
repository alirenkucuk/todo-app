//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : todoRoutes.js
/*  Goal           : Endpoints for managing to-do items
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Tüm görevler: listeleme ve yeni görev ekleme
router
  .route("/")
  .get(protect, getTodos)
  .post(protect, createTodo);

// Tekil görev: güncelleme ve silme
router
  .route("/:id")
  .put(protect, updateTodo)
  .delete(protect, deleteTodo);

export default router;
