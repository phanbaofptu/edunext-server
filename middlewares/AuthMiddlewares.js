const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "edunext secret key", async (err, decodedToken) => {
      if (err) {
        return res.status(403).json("Phiên đăng nhập đã hết hạn");
      } else {
        const user = await User.findById(decodedToken.data?._id);

        if (user) {
          req.user = user;
          next();
        } else {
          return res.status(403).json("Phiên đăng nhập đã hết hạn");
        }
      }
    });
  } else {
    return res.status(403).json("Phiên đăng nhập đã hết hạn");
  }
};

module.exports.checkAuth = (req, res, next) => {
  this.checkUser(req, res, () => {
    if (req.user) {
      next();
    } else {
      return res
        .status(403)
        .json("Bạn phải đăng nhập để sử dụng chức năng này");
    }
  });
};

module.exports.checkTeacher = (req, res, next) => {
  this.checkUser(req, res, () => {
    if (req.user.role == "teacher") {
      next();
    } else {
      return res.status(403).json("Bạn không được cấp quyền truy cập");
    }
  });
};

module.exports.checkStudent = (req, res, next) => {
  this.checkUser(req, res, () => {
    if (req.user.role == "student") {
      next();
    } else {
      return res.status(403).json("Bạn không được cấp quyền truy cập");
    }
  });
};

module.exports.checkAdmin = (req, res, next) => {
  this.checkUser(req, res, () => {
    if (req.user.role == "admin") {
      next();
    } else {
      return res.status(403).json("Bạn không được cấp quyền truy cập");
    }
  });
};
