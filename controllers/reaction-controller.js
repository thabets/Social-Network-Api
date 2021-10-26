const { Reaction, Thought } = require("../models");

const reactionController = {
  addReactionToThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No users found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  deleteReaction({ params }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No users found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};
module.exports = reactionController;
