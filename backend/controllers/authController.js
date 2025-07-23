//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : authController.js
/*  Goal           : Manage user registration, login, password hashing, and JWT token generation
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────/*/

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

// JWT token oluşturma fonksiyonu
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc    Yeni kullanıcı kaydı
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    // Aynı email ile kayıtlı kullanıcı var mı?
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("E-posta adresi zaten kayıtlı");
    }

    // Şifreyi hashle
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Yeni kullanıcı oluştur
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(400);
      throw new Error("Geçersiz kullanıcı verisi");
    }
  } catch (error) {
    next(error);
  }
};