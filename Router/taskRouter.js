const express = require('express');
const taskRouter = express.Router();


const { addTask,updateTask } = require('../Controller/taskController');





taskRouter.post('/add-task', addTask);
taskRouter.patch('/update-task',updateTask);


module.exports = taskRouter;