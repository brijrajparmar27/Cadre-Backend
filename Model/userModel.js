const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roll_name: {
    type: String,
    required: true,
  },
},{collection:"Users"});

userSchema.statics.signup = async function (name, email, password, roll_name) {
  const user = await this.findOne({ email: email });
  if (user) {
    throw Error("Email already exits!!");
  }
  const salt = await bcrypt.genSalt(10);
  const hashpassword = await bcrypt.hash(password, salt);

  let newUser = { name: name, email: email, password: hashpassword, roll_name: roll_name };
  const create_user = await this.create(newUser);
  return create_user;
};

userSchema.statics.login = async function ( email, password ) {

    const user = await this.findOne({ email: email });
    if (!user) {
      throw Error('Email is not correct! try with another email');
    }

    const isMatched = await bcrypt.compare( password, user.password );

    if (!isMatched) {
        throw Error('Password is incorrect!');
        
    }
    return user;
}
module.exports = mongoose.model("Users",userSchema);
