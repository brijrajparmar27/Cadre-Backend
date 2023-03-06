const express = require('express');
const taskRouter = express.Router();


const { addTask,updateTask } = require('../Controller/taskController');





taskRouter.post('/add-task', addTask);
taskRouter.put('/update-task/:id',updateTask);


module.exports = taskRouter;