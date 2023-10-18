const Semester = require('../../models/Semester');

module.exports.index = (req, res, next) => {
  Semester.find({})
    .then((semesters) => {
      res.json(semesters);
    })
    .catch(next);
};

module.exports.add = (req, res, next) => {
  const semester = new Semester(req.body);
  Semester.create(semester)
    .then((data) => res.json('Đã thêm thành công'))
    .catch(next);
};

module.exports.update = (req, res, next) => {
  const semester = new Semester(req.body);
  Semester.updateOne({ _id: semester._id }, semester)
    .then((data) => res.json('Đã thay đổi thành công'))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Semester.delete({ _id: req.params.id })
    .then((data) => res.json('Đã xoá thành công'))
    .catch(next);
};
