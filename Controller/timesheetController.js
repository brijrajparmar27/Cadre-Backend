const timesheet = require('../Model/timesheetModel');

const addTimeSheet = async (req, res) => {
    const { user , works, Date } = req.body;
    await timesheet.create({ user, works, Date }).then(data => {
        res.json(data).status(200)
    }).catch(error => {
        res.json({message: error.message}).status(500);
    });
};

const getTimeSheetByIdandDate = async (req, res) => {
    const { id } = req.params;
    const { date } = req.query
    const query = {
        user:id
    };
    if(date){
        query['Date'] = date;
    }
    await timesheet.find(query).then(data => {
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

module.exports = { addTimeSheet, getTimeSheetByIdandDate, getAllTimeSheet }