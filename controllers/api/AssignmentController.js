const Assignment = require("../../models/Assignment");
const Slot = require("../../models/Slot");
const User = require("../../models/User");

module.exports.index = async (req, res, next) => {
  await Assignment.find({})
    .populate("slotId")
    .then((assignment) => {
      console.log(assignment);
      res.json(assignment);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};

module.exports.add = async (req, res, next) => {
  const assignment = new Assignment(req.body);
  await Assignment.create(assignment)
    .then((data) => {
      res.json("Đã thêm thành công");
      console.log(data);
    })
    .catch((next) => {
      res.status(500).json("Internal Server Error");
      console.log(next);
    });
  await Slot.findByIdAndUpdate(assignment.slotId, {
    $push: { assignmentId: assignment._id },
  })
    .then((data) => res.json("Đã cập nhật thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.update = (req, res, next) => {
  const assignment = new Assignment(req.body);
  Assignment.updateOne({ _id: assignment._id }, assignment)
    .then((data) => res.json("Đã cập nhật thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  Assignment.delete({ _id: req.params.id })
    .then((data) => res.json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.findById = async (req, res, next) => {
  await Assignment.findById(req.params.id)
    .populate("slotId")
    .then((assignment) => {
      console.log(assignment);
      res.json(assignment);
    })
    .catch((next) => res.status(500).json("Internal Server Error"));
};
