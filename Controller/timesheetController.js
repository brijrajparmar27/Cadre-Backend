const timesheet = require('../Model/timesheetModel');

const addTimeSheet = async (req, res) => {
    const { user, projectName, discription, status, date, hours } = req.body;
    await timesheet.create({ user, projectName, discription, status, date, hours}).then(data => {
        res.json(data).status(200)
    }).catch(error => {
        res.json({message: error.message}).status(500);
    });
};

const getTimeSheet = async (req, res) => {
    const { id } = req.params;
    await timesheet.find({user: id}).then(data => {
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

module.exports = { addTimeSheet, getTimeSheet, getAllTimeSheet }