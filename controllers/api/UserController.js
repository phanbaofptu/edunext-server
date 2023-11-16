const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports.index = (req, res, next) => {
  User.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((next) => res.status(500).json(next));
};

module.exports.add = (req, res, next) => {
  const data = new User(req.body);
  User.create(data)
    .then((data) => res.status(200).json("Đã thêm thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.update = (req, res, next) => {
  const data = new User(req.body);
  User.updateOne({ _id: data._id }, data)
    .then((data) => res.status(200).json("Đã thay đổi thành công"))
    .catch((next) => res.status(500).json(next));
};

module.exports.delete = (req, res, next) => {
  User.delete({ _id: req.params.id })
    .then((data) => res.status(200).json("Đã xoá thành công"))
    .catch((next) => res.status(500).json(next));
};

const maxAge = 60 * 60;
const createToken = (data) => {
  return jwt.sign({ data }, "edunext_secret_key", { expiresIn: maxAge });
};
module.exports.login = (req, res, next) => {
  User.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((data) => {
      const token = createToken({
        _id: data._id,
        username: data.username,
        email: data.email,
        name: data.name,
        role: data.role,
      });
      res.cookie("jwt", token, {
        httpOnly: false,
        maxAge: 2 * 60 * 60 * 1000,
      });
      res.status(200).json(token);
    })
    .catch((next) => res.status(500).json(next));
};

module.exports.logout = (req, res, next) => {
  res.cookie("jwt", "Invalid Authorization", { httpOnly: false, maxAge: 0 });
};

module.exports.auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "Invalid Authorization" });
  }

  try {
    const userId = jwt.decode(authorization);

    const user = await User.findById(userId.data._id);

    if (!userId) {
      return res.status(401).json({ message: "Invalid token" });
    }

    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
