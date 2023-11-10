const Question = require("../../models/Question");
const Course = require("../../models/Course");
const User = require("../../models/User");

module.exports.index = async (req, res, next) => {
  await Question.find({})
    .populate("slotId")
    .then((question) => {
      console.log(question);
      res.json(question);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};

module.exports.add = async (req, res, next) => {
  const question = new Question(req.body);
  await Question.create(question)
    .then((data) => {
      res.json("Đã thêm thành công");
      console.log(data);
    })
    .catch((next) => {
      res.status(500).json("Internal Server Error");
      console.log(next);
    });
};

module.exports.update = (req, res, next) => {
  const question = new Question(req.body);
  Question.updateOne({ _id: question._id }, question)
    .then((data) => res.json("Đã cập nhật thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  Question.delete({ _id: req.params.id })
    .then((data) => res.json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.findById = async (req, res, next) => {
  await Question.findById(req.params.id)
    .populate("slotId")
    .then((course) => {
      console.log(course);
      res.json(course);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};
