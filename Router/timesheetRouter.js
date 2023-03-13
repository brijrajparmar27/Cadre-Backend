const express = require('express');
const timesheetRouter = express.Router();

const { addTimeSheet, getTimeSheetById, getAllTimeSheet } = require('../Controller/timesheetController');

timesheetRouter.post('/add-timesheet', addTimeSheet);
timesheetRouter.get('/get-timesheet/:id', getTimeSheetById);
timesheetRouter.get('/get-all-timesheet', getAllTimeSheet);

module.exports = timesheetRouter