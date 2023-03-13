const timesheet = require('../Model/timesheetModel');

const addTimeSheet = async (req, res) => {
    const { user , works } = req.body;
    await timesheet.create({ user, works }).then(data => {
        res.json(data).status(200)
    }).catch(error => {
        res.json({message: error.message}).status(500);
    });
};

const getTimeSheetById = async (req, res) => {
    const { id } = req.params;
    await timesheet.find({ "user": id }).then(data => {
        res.json(data).status(200)
    }).catch(error => {
        res.json({message: error.message});
    });
};

const getAllTimeSheet = async (req, res) => {
    await timesheet.find().then(data => {
        res.json(data).status(200);
    }).catch(error => {
        res.json({ message: error.message})
    });
};

module.exports = { addTimeSheet, getTimeSheetById, getAllTimeSheet }