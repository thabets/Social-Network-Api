const { Schema, model } = require("mongoose");
const friendSchema = require("./Friend");
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: "Username is Required",
    },
    email: {
      type: String,
      unique: true,
      required: "Email is Required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],

    friend: [friendSchema],
  },
  {
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);
module.exports = User;
