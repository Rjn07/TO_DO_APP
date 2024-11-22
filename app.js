
require('dotenv').config(); // used for load ennviroment variable
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');

const app = express();


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Database Connection

const uri = process.env.MONGO_URI
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Routes
app.use('/tasks', taskRoutes);

// Start Server

app.listen(process.env.PORT, () => console.log(`Server running on http://localhost:${process.env.PORT}`));
