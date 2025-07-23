//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : authMiddleware.js
/*  Goal           : Protect routes by verifying JWT and attaching user to request
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────/*/

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Korunan rotalar için JWT doğrulama
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Token'ı al
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401);
    return next(new Error("Yetkisiz, token mevcut değil"));
  }

  try {
    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // İstek objesine kullanıcı bilgisi ekle (parolayı dahil etmeden)
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401);
    next(new Error("Yetkisiz, geçersiz token"));
  }
};