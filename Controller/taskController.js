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

module.exports = { addTask };
