To‑Do App

A basic To‑Do web application built with Node.js, Express, MongoDB, and React.

Features

User registration and login (protected with JWT)

Create, edit, complete, and delete tasks

Real-time task list display

Responsive design

Technologies

Back-end: Node.js, Express, Mongoose, bcryptjs, jsonwebtoken

Database: MongoDB

Front-end: React, Axios, Tailwind CSS

Other: dotenv, cors

Installation

Clone the repository:

git clone https://github.com/your-username/todo-app.git
cd todo-app

Install back-end dependencies:

cd backend
npm install

Install front-end dependencies:

cd ../frontend
npm install

Set up environment variables (create a .env file in the backend folder):

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Start the application:

Back-end:

cd backend
npm run dev

Front-end:

cd frontend
npm start

Usage

Open your browser and go to http://localhost:3000.

Register a new account or log in.

Use the form to add new tasks.

Edit, complete, or delete tasks directly from the list.

File Structure

├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   └── todoController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   ├── userModel.js
│   │   └── todoModel.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── utils
│   │   └── errorHandler.js
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── contexts
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
└── README.md

Contributing

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

License
