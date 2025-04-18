const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

module.exports = app;
