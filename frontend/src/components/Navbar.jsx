//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : Navbar.jsx
/*  Goal           : Navigation bar component for the To-Do App
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          To‑Do App
        </Link>
        <div>
          {user ? (
            <>
              <span className="mr-4">Merhaba, {user.name}</span>
              <button
                onClick={handleLogout}
                className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Çıkış
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Giriş
              </Link>
              <Link
                to="/register"
                className="py-1 px-3 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Kayıt
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
