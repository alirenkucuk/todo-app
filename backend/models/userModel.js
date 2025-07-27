//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : userModel.js
/*  Goal           : User model for MongoDB with Mongoose
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lütfen isim girin"],
    },
    email: {
      type: String,
      required: [true, "Lütfen e-posta girin"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Lütfen şifre girin"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
