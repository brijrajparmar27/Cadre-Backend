const Project = require("../Model/projectModel");

const addProject = async (req, res) => {
  const { project_name, discription, assigned_date, deadline, completed, is_completed, lead, member, task, stack } = req.body;

  await Project.create({ project_name, discription, assigned_date, deadline, completed, is_completed, lead, member, task, stack
  }).then((data) => {
      res.json(data).status(200);
    })
    .catch((err) => {
      res.json({ message: err.message }).status(500);
    });
};

const getProjectById = async (req, res) => {

  const { id } = req.params;
  await Project.findById(id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((error) => {
      res.json({ message: error.message }).status(500);
    });
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { project_name, discription, assigned_date, deadline, completed, is_completed, member, task, stack} = req.body;

  await Project.findByIdAndUpdate(id, { project_name, discription, assigned_date, deadline, completed, 
    is_completed, member, task, stack },{ new: true }).then((data) => {
      res.json(data).status(200);
    })
    .catch((error) => {
      res.json({ message: error.message });
    });
};

const deleteProject = async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id)
    .then((data) => {
      res.json(data).status(200);
    })
    .catch((error) => {
      res.json({ message: error.message }).status(500);
    });
};

const getAllProject = async (req, res) => {
  const { column, order } = JSON.parse(req.query.sort);
  var sort = {};
  sort[`${column}`] = order
  await Project.find({}).collation({locale: "en"}).sort(sort).then((data) => {
      res.json(data).status(200);      
    }).catch((error) => {
      res.json({ message: error.message }).status(500);
    });
};

const getProjectByUserRole = async (req, res) => {
  const { id } = req.params;
  const { column, order } = JSON.parse(req.query.sort);
  var sort = {};
  sort[`${column}`] = order
  const usersProject = await Project.find({
    $or: [
      {
        "member._id": id,
      },
      {
        "lead._id": id,
      },
    ],
  }).collation({locale: "en"}).sort(sort);
  if (usersProject) {
    res.status(200).send({
      success: true,
      message: "Project get successfully",
      res: usersProject,
    });
  } else {
    res.status(402).send({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  addProject,
  getProjectById,
  updateProject,
  deleteProject,
  getAllProject,
  getProjectByUserRole,
};
