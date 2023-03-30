const express = require('express');
const chatRouter = express.Router();

const { accessChat, fetchChat } = require('../Controller/chatController');
const authenticateJWT = require('../Middleware/userAuth');

chatRouter.post('/chat',authenticateJWT,accessChat);
chatRouter.get('/chat',authenticateJWT,fetchChat);


module.exports = chatRouter;