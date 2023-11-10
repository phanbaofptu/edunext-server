const Classes = require("../../models/Class");
const Course = require("../../models/Course");
const User = require("../../models/User");

module.exports.index = async (req, res, next) => {
  await Course.find({})
    .populate("classId")
    .populate("mentorId")
    .populate("studentId")
    .then((course) => {
      console.log(course);
      res.json(course);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};

module.exports.add = async (req, res, next) => {
  const course = new Course(req.body);
  await Course.create(course)
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
  const course = new Course(req.body);
  Course.updateOne({ _id: course._id }, course)
    .then((data) => res.json("Đã cập nhật thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  Course.delete({ _id: req.params.id })
    .then((data) => res.json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.findById = async (req, res, next) => {
  await Course.findById(req.params.id)
    .populate("classId")
    .populate("mentorId")
    .populate("studentId")
    .then((course) => {
      console.log(course);
      res.json(course);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};
