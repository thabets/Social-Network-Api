const { Schema, Types } = require("mongoose");

const friendSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectID,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: "Email is Required",
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = friendSchema;
