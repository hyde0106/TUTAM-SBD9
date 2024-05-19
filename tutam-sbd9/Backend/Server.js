const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL database configuration
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'todolist',
  password: 'your_password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting tasks:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add a new task
app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  try {
    await pool.query('INSERT INTO tasks (title) VALUES ($1)', [title]);
    res.status(201).send('Task added successfully');
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Delete a task
app.delete('/api/tasks/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  try {
    await pool.query('DELETE FROM tasks WHERE task_id = $1', [taskId]);
    res.status(200).send('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
