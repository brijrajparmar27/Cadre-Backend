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
    )
      .then((data) => {
        res.json(data).status(200);
      })
      .catch((error) => {
        res.json({ message: error.message });
      });
  } else {
    res.status(401).send({
      message: "Something went wrong",
    });
  }
};
const updateTask = async (req, res) => {
  // const {  } = req.params;
  const { _id, project, title, lead, assigned, status } = req.body
   await task
    .findByIdAndUpdate(_id, { project, title, lead, assigned, status }, { new: true })
    .then((val) => {
      res.json(val).status(200);
    })
    .catch((err) => {
      res.json({ message: err.message }).status(500);
    });
};

module.exports = { addTask, updateTask };
