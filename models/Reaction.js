const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: [{ type: Schema.Types.ObjectID }],

  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
