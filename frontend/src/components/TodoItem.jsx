//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : TodoItem.jsx
/*  Goal           : Component for displaying and managing individual to-do items
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import React, { useState } from "react";
import api from "../services/api";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [loading, setLoading] = useState(false);

  const toggleComplete = async () => {
    setLoading(true);
    try {
      const res = await api.put(`/todos/${todo._id}`, {
        completed: !todo.completed,
      });
      onUpdate(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Görevi silmek istediğinize emin misiniz?")) return;
    setLoading(true);
    try {
      await api.delete(`/todos/${todo._id}`);
      onDelete(todo._id);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded shadow">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          disabled={loading}
          className="mr-3"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Sil
      </button>
    </div>
  );
}
 