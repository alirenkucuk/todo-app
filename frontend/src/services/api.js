//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : api.js
/*  Goal           : Axios instance for API requests
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

// İstek öncesi interceptor: Token varsa header’a ekle
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
