//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : server.js
/*  Goal           : Main server file to set up Express, connect to MongoDB, and define middleware
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import { errorHandler } from "./utils/errorHandler.js";
import dotenv from "dotenv";



// Ortam değişkenlerini yükle
dotenv.config();

// MongoDB bağlantısını gerçekleştir
connectDB();

const app = express();

// Gelen JSON verisini parse et
app.use(express.json());
// CORS izinleri
app.use(cors());

// API rotaları
app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// Global error handler
app.use(errorHandler);

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server ${process.env.NODE_ENV || ""} modunda, port ${PORT} üzerinde çalışıyor`)
);
