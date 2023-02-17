const express = require('express');
const RootRouter = express.Router();
const userRouter = require('./Router/userRouter');

RootRouter.use('/', userRouter);

module.exports = RootRouter;