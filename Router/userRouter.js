const express = require("express");
const userRouter = express.Router();
const userModel = require("../Model/userModel");

const {
  signUp,
  signIn,
  getUserById,
  getAllUser,
  updateUser,
  deleteUser,
  getUsersBySearch,
  getUserAndProjectBySearch,
} = require("../Controller/userController");
const { upload, handleMulterError } = require("../Multer/Multer");

userRouter.get("/", async (req, res) => {
  res.send("Hello World");
});
userRouter.post("/user-register", signUp);
userRouter.post("/user-login", signIn);
userRouter.get("/get-userbyid/:id", getUserById);
userRouter.get("/get-alluser", getAllUser);
userRouter.patch("/user-details-update/:id", updateUser);
userRouter.delete("/delete-user/:id", deleteUser);
userRouter.get("/get-users-by-search", getUsersBySearch);
userRouter.get("/get-user-and-project/:id", getUserAndProjectBySearch);

// Image upload route with error handling
userRouter.post("/update-user-dp", upload.single("Image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    // Update user profile with new image path - just store the filename
    const imagePath = req.file.filename;
    await userModel.findByIdAndUpdate(req.body.Id, { img: imagePath });

    res.status(200).json({
      message: "Profile image updated successfully",
      imagePath: `/public/dp/${imagePath}`,
    });
  } catch (error) {
    console.error("Error updating profile image:", error);
    res.status(500).json({ error: "Failed to update profile image" });
  }
});

module.exports = userRouter;
