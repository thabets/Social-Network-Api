const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    trim: true,
    required: "Must be between 1 and 280 characters",
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }, // what is a getter method
  username: {
    type: String,
    required: true,
  },

  reactionSchema: [],
});
