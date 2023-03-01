const express = require('express');
const taskRouter = express.Router();


const { addTask } = require('../Controller/taskController');





taskRouter.post('/add-task', addTask);


module.exports = taskRouter;