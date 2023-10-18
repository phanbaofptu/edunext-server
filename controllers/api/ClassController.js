const Classes = require('../../models/Class');
const Semester = require('../../models/Semester');

module.exports.index = (req, res, next) => {
  Classes.find()
    .populate('semesterId')
    .then((classes) => {
      res.json(classes);
    })
    .catch((next) => res.status(500).json('Internal Server Error'));
};

module.exports.add = async (req, res, next) => {
  const semester = await Semester.findOne({ id: req.body.semesterId });
  const classEdu = new Classes({ name: req.body.name, semesterId: semester });
  if (!semester) {
    return res.status(404).json('Không tìm thấy học kỳ');
  }
  await Classes.create(classEdu)
    .then((data) => res.json('Đã thêm thành công'))
    .catch((next) => {
      res.status(500).json('Internal Server Error');
      console.log(next);
    });
};

module.exports.update = (req, res, next) => {
  const clasEdu = new Classes(req.body);
  Classes.updateOne({ _id: clasEdu._id }, clasEdu)
    .then((data) => res.json('Đã thay đổi thành công'))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Classes.delete({ _id: req.params.id })
    .then((data) => res.json('Đã xoá thành công'))
    .catch(next);
};
