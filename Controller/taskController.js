const task = require('../Model/taskModel');

const addTask = async (req, res) => {
    const { title, lead, assigned, status } = req.body;

    await task.create({title, lead, assigned, status}).then(data => {
        res.json(data).status(200);
    }).catch(error => {
        res.json({message: error.message}).status(500);
    })
}


module.exports = { addTask }