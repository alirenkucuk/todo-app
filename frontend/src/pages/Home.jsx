//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : Home.jsx
/*  Goal           : Load and display tasks from the API, handle task creation, deletion, and completion
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 22.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  const { user, logout } = useAuth();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Tüm görevleri API'den çek
  const fetchTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  // Yeni görev ekleme sonrası listeyi güncelle
  const handleAdd = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // Görev güncelleme ve silme sonrası listeyi güncelle
  const handleUpdate = (updatedTodo) => {
    setTodos(todos.map(t => (t._id === updatedTodo._id ? updatedTodo : t)));
  };
  const handleDelete = (deletedId) => {
    setTodos(todos.filter(t => t._id !== deletedId));
  };

  if (loading) return <p className="text-center mt-8">Yükleniyor...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Hoşgeldin, {user ? user.name : ''}</h1>
        <button
          onClick={logout}
          className="py-1 px-3 bg-red-500 text-white rounded"
        >
          Çıkış Yap
        </button>
      </div>
      <TodoForm onAdd={handleAdd} />
      <TodoList
        todos={todos}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}
