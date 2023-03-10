const express = require("express");
const RootRouter = express.Router();
const userRouter = require("./Router/userRouter");
const projectRouter = require("./Router/projectRouter");
const stackRouter = require("./Router/stackRouter");
const taskRouter = require("./Router/taskRouter");
const timesheetRouter = require("./Router/timesheetRouter");

RootRouter.use("/", userRouter);
RootRouter.use("/", projectRouter);
RootRouter.use("/", stackRouter);
RootRouter.use("/", taskRouter);
RootRouter.use("/", timesheetRouter);

module.exports = RootRouter;
