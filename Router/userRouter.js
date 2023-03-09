const express = require('express');
const userRouter = express.Router();

const { signUp, signIn, getUserById, getAllUser, updateUser, deleteUser, getUsersBySearch, updateUserDp } = require('../Controller/userController')






userRouter.get('/', async (req, res) => {
    res.send('Hello World');
});

userRouter.post('/user-register', signUp);
userRouter.post('/user-login', signIn);
userRouter.get('/get-userbyid/:id', getUserById);
userRouter.get('/get-alluser', getAllUser);
userRouter.put('/user-details-update/:id', updateUser);
userRouter.delete('/delete-user/:id', deleteUser);
userRouter.get('/get-users-by-search', getUsersBySearch);
userRouter.get('/update-user-dp', updateUserDp);

module.exports = userRouter





