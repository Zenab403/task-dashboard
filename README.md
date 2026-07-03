# Task Dashboard Backend

This is the Node.js + Express backend for the MERN Task Dashboard project.  
It provides REST APIs for managing tasks and connects to MongoDB Atlas.

## Features
- Express server with task routes
- MongoDB Atlas connection
- Environment variables managed via `.env`
- Secure deployment on Render

## Project Structure
task-dashboard-backend/
│── server.js        # Entry point
│── package.json     # Dependencies and scripts
│── routes/          # Task routes
│── models/          # Mongoose models
│── config/          # Database connection
│── .env             # Environment variables (local only)


## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Zenab403/task-dsahboard.git
   cd task-dashboard

2. Install Dependencies
   npm install

3. Create a .env file:
   MONGO_URI=your-mongodb-uri
   PORT=5000

4. Start the server:
   npm start

API Endpoints
- GET /api/tasks → Fetch all tasks

- POST /api/tasks → Create a new task

- PUT /api/tasks/:id → Update a task

- DELETE /api/tasks/:id → Delete a task

## Deployment
- Backend deployed on Render

- Environment variables configured in Render dashboard


