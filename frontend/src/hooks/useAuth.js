/───────────────────────────────────────────────────────────────────/
/*  Project        : To-Do App
/*  FileName       : useAuth.js
/*  Goal           : Provide a custom hook for accessing authentication context (user, login, register, logout)
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan 
/*  Date           : 22.07.2025
/*  V              : 0.0.1
/───────────────────────────────────────────────────────────────────/*/

// Re-export the useAuth hook from AuthContext.jsx to avoid redundancy
export { useAuth as default } from "../contexts/AuthContext";