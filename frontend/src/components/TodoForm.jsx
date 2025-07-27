//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : TodoForm.jsx
/*  Goal           : Component for adding and editing to-do items
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import React, { useState } from "react";
import api from "../services/api";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      const res = await api.post("/todos", { text });
      onAdd(res.data);
      setText("");
    } catch (err) {
      setError(err.response?.data?.message || "Görev eklenemedi");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setError("");
        }}
        placeholder="Yeni görev ekle..."
        className="flex-grow p-2 border rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
      >
        Ekle
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
