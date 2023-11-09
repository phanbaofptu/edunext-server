const Semester = require("../../models/Semester");

module.exports.index = (req, res, next) => {
  Semester.find({})
    .then((semesters) => {
      res.status(200).json(semesters);
    })
    .catch((next) => res.status(500).json(next));
};

module.exports.add = (req, res, next) => {
  const semester = new Semester(req.body);
  Semester.create(semester)
    .then((data) => res.status(200).json("Đã thêm thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.update = (req, res, next) => {
  const semester = new Semester(req.body);
  Semester.updateOne({ _id: semester._id }, semester)
    .then((data) => res.status(200).json("Đã thay đổi thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  Semester.delete({ _id: req.params.id })
    .then((data) => res.status(200).json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};
