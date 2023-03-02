const task = require('../Model/taskModel');
const Project = require('../Model/projectModel')

const addTask = async (req, res) => {
    const { project, title, lead, assigned, status } = req.body;
    const tasks = await task.create({ project, title, lead, assigned, status});
    if (tasks) {
        await Project.findByIdAndUpdate(project, {"task":tasks}, {new: true}).then(data => {
            res.json(data).status(200)
        }).catch(error => {
            res.json({message: error.message});
        });
    } else {    
        res.status(401).send({
            message: 'Something went wrong'
        });
    };
};

module.exports = { addTask }