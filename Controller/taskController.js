const task = require("../Model/taskModel");
const Project = require("../Model/projectModel");

const addTask = async (req, res) => {
  const newtask = await task.create({ ...req.body.new, status: "pending" });
  let newTasksArr = [...req.body.prev, newtask];
  if (newtask) {
    await Project.findByIdAndUpdate(
      req.body.new.project,
      { task: newTasksArr },
      { new: true }
    );
    res.status(200).json(newtask);
  } else {
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { project, title, description, assigned, status } = req.body;
  task
    .findByIdAndUpdate(
      id,
      { project, title, description, assigned, status },
      { new: true }
    )
    .then((val) => {
      res.json(val).status(200);
    })
    .catch((err) => {
      res.json({ message: err.message }).status(500);
    });
};

module.exports = { addTask, updateTask };
