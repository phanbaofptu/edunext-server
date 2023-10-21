const Classes = require("../../models/Class");
const Semester = require("../../models/Semester");

module.exports.index = async (req, res, next) => {
  // try {
  //   console.log("!!!!!");
  //   const response = await Classes.find({});
  //   console.log(response);
  // } catch (error) {
  //   console.log(error);
  // }
  await Classes.find({})
    .populate("semesterId")
    .then((classes) => {
      console.log(classes);
      res.json(classes);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};

module.exports.add = async (req, res, next) => {
  const semester = await Semester.findOne({ id: req.body.semesterId });
  const classEdu = new Classes({
    name: req.body.name,
    semesterId: req.body.semesterId,
  });
  if (!semester) {
    return res.status(404).json("Không tìm thấy học kỳ");
  }
  await Classes.create(classEdu)
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
  const clasEdu = new Classes(req.body);
  Classes.updateOne({ _id: clasEdu._id }, clasEdu)
    .then((data) => res.json("Đã thay đổi thành công"))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Classes.delete({ _id: req.params.id })
    .then((data) => res.json("Đã xoá thành công"))
    .catch(next);
};
