require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const RootRouter = require("./Router");
app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

app.use(RootRouter);

mongoose.connect(process.env.MONGO).then(() => {
  console.log("connect successfully");
});
const server = app.listen(process.env.PORT, () => {
  console.log(`Your server is running on ${process.env.PORT}`);
});
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("connect socket.io");
  socket.on("setup", (userdata) => {
    socket.join(userdata._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("user join room :" + room);
  });
  socket.on("typing", (room) => {
    console.log(room);
    socket.in(room).emit("typing");
  });
  socket.on("stope typing", (room) => socket.in(room).emit("stope typing"));
  socket.on("new message", (newMessageRecive) => {
    var chat = newMessageRecive.chat;
    if (!chat.users) {
      console.log("chat user not define");
    }
    console.log(chat.users);
    console.log(newMessageRecive);
    chat.users.forEach((element) => {
      console.log(element)
      if (element._id == newMessageRecive.sender._id) return;
      socket.in(element._id).emit("message", newMessageRecive);
    });
  });
});
