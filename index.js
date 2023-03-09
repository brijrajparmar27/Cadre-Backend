require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const RootRouter = require("./Router");
// const user = require('./Model/userModel')

app.use(express.json());
app.use(cors());
// const multer = require('multer');
// const path = require('path');
app.use("/public", express.static("public"));

app.use(RootRouter);


// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'images/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage
// });

// app.post('/upload', upload.single('image'), (req, res) => {
//   const product = new user({
//     img: req.file.path
//   });
//   product.save((err, result) => {
//     if (err) {
//       console.log(err);
//       res.status(500).json({ error: err });
//     } else {
//       res.status(200).json({ message: 'Product created successfully' });
//     }
//   });
// });


mongoose.connect(process.env.MONGO).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Your server is running on ${process.env.PORT}`);
  });
});
