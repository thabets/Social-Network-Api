const { Thought, User } = require("../models");

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  createThought({ body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No User found with this id!" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.thoughtId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({
            message: "There are no thoughts found with this id!",
          });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },
  deleteThought({ params }, res) {
    Thought.findOneAndDelete({
      _id: params.thoughtId,
    })
      .then(({ username }) => {
        return User.findOneAndUpdate(
          {
            username: username,
          },

          {
            $pull: { thoughts: params.thoughtId },
          }
        );
      })

      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
};

module.exports = thoughtController;
