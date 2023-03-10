const express = require('express');
const timesheetRouter = express.Router();

const { addTimeSheet } = require('../Controller/timesheetController');

timesheetRouter.post('/add-timesheet', addTimeSheet)

module.exports = timesheetRouter