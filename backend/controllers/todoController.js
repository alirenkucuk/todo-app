//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : todoController.js
/*  Goal           : Handle creation, retrieval, update and deletion of todos
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import Todo from "../models/todoModel.js";

// @desc    Yeni bir todo oluştur
// @route   POST /api/todos
// @access  Private
export const createTodo = async (req, res, next) => {
  try {
    const { text } = req.body;

    const todo = await Todo.create({
      text,
      user: req.user._id,
    });

    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

// @desc    Kullanıcının tüm todolarını getir
// @route   GET /api/todos
// @access  Private
export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

// @desc    Bir todo’yu güncelle
// @route   PUT /api/todos/:id
// @access  Private
export const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404);
      throw new Error("Todo bulunamadı");
    }

    if (todo.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Yetkisiz işlem");
    }

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed ?? todo.completed;

    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

// @desc    Bir todo’yu sil
// @route   DELETE /api/todos/:id
// @access  Private
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404);
      throw new Error("Todo bulunamadı");
    }

    if (todo.user.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Yetkisiz işlem");
    }

    await todo.remove();
    res.json({ message: "Todo silindi" });
  } catch (error) {
    next(error);
  }
};
