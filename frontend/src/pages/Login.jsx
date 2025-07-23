/───────────────────────────────────────────────────────────────────/
/*  Project        : To-Do App
/*  FileName       : Login.jsx
/*  Goal           : Login form and authentication
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan 
/*  Date           : 22.07.2025
/*  V              : 0.0.1
/───────────────────────────────────────────────────────────────────/*/

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Giriş başarısız");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Giriş Yap</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1">Şifre</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-2xl shadow-md hover:shadow-lg transition bg-blue-500 text-white"
        >
          Giriş Yap
        </button>
      </form>
      <p className="mt-4 text-center">
        Hesabın yok mu?{' '}
        <Link to="/register" className="text-blue-500 hover:underline">
          Kayıt Ol
        </Link>
      </p>
    </div>
  );
}