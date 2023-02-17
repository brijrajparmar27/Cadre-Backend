const express = require('express');
const userRouter = express.Router();

const { signUp, signIn, getUserById, getAllUser } = require('../Controller/userController')






userRouter.get('/', async (req, res) => {
    res.send('Hello World');
});

userRouter.post('/user-register', signUp);
userRouter.post('/user-login', signIn);
userRouter.get('/get-userbyid/:id', getUserById);
userRouter.get('/get-alluser', getAllUser);

module.exports = userRouter





