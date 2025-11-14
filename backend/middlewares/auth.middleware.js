const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).send("No token, unauthorized.");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await userModel.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};
