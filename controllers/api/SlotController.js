const Slot = require("../../models/Slot");
const Course = require("../../models/Course");
const User = require("../../models/User");

module.exports.index = async (req, res, next) => {
  const slots = await Slot.find({}).populate("courseId");

  const populatedSlots = await Promise.all(
    slots.map(async (slot) => {
      if (slot.questionId) {
        slot = await slot.populate("questionId");
      }
      if (slot.assignmentId) {
        slot = await slot.populate("assignmentId");
      }
      return slot;
    })
  );
  console.log(populatedSlots);
  res.json(populatedSlots);
};

module.exports.add = async (req, res, next) => {
  const slot = new Slot(req.body);
  await Slot.create(slot)
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
  const slot = new Slot(req.body);
  Slot.updateOne({ _id: slot._id }, slot)
    .then((data) => res.json("Đã cập nhật thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  Slot.delete({ _id: req.params.id })
    .then((data) => res.json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.findById = async (req, res, next) => {
  await Slot.findById(req.params.id)
    .populate({
      path: "courseId",
      populate: [{ path: "studentId" }, { path: "mentorId" }],
    })
    .then((course) => {
      course.questionId && course.populate("questionId");
      return course;
    })
    .then((course) => {
      course.assignmentId && course.populate("assignmentId");
      res.status(200).json(course);
      console.log(course);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};
