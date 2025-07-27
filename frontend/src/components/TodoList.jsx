//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : TodoList.jsx
/*  Goal           : Component to display and manage the list of to-do items
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onUpdate, onDelete }) {
  if (!todos.length) {
    return <p className="text-center text-gray-600">Hiç göreviniz yok.</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
