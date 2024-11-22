// routes/taskRoutes.js
const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// View all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', { tasks });
});

// Add a new task
router.get('/add', (req, res) => {
    res.render('add-task');
});

router.post('/add', async (req, res) => {
    const { title, description, dueDate, category } = req.body;

    if (!title) {
        return res.status(400).send('Title cannot be empty.');
    }

    await Task.create({ title, description, dueDate, category });
    res.redirect('/tasks');
});

// Mark task as completed
router.post('/complete/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (task.completed) {
        return res.status(400).send('Task is already completed.');
    }

    task.completed = true;
    await task.save();
    res.redirect('/tasks');
});

// Edit a task
router.get('/edit/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('edit-task', { task });
});

router.post('/edit/:id', async (req, res) => {
    const { title, description, dueDate, category } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate, category });
    res.redirect('/tasks');
});

// Delete a task
router.post('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
});

module.exports = router;
