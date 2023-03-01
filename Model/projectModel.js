const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    project_name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
    assigned_date: {
      type: Date,
      required: true,
    },
    deadline: {
      type: Date,
    },
    completed: {
      type: Date,
    },
    is_completed: {
      type: Boolean,
    },
    lead: {
      type: Object,
      default: {},
    },
    member: {
      type: Array,
      default: [],
    },
    task: {
      type: Array,
      default: [],
    },
    stack: {
      type: Array,
      default: [],
    },
  },
  { collection: "Projects" }
);

module.exports = mongoose.model("Project", projectSchema);
