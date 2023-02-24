const express = require('express');
const RootRouter = express.Router();
const userRouter = require('./Router/userRouter');
const projectRouter = require('./Router/projectRouter');
const stackRouter = require('./Router/stackRouter');
RootRouter.use('/', userRouter);
RootRouter.use('/', projectRouter);
RootRouter.use('/',stackRouter)

module.exports = RootRouter;