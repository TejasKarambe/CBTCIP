const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // Check this path
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

module.exports = app;
