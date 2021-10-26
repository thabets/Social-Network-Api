const { User } = require("../models");

const friendController = {
  addFriendToUser({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { friend: body } },
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

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friend: { friendId: params.friendId } } }
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
module.exports = friendController;
