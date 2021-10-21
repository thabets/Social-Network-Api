const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  email: {
    type: String,
    unique: true,
    required: "Email is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});
