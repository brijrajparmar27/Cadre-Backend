const express = require('express');
const RootRouter = express.Router();
const userRouter = require('./Router/userRouter');
const projectRouter = require('./Router/projectRouter');

RootRouter.use('/', userRouter);
RootRouter.use('/', projectRouter);

module.exports = RootRouter;