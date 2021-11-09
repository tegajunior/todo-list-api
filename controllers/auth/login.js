const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");
const { compare } = bcryptjs;
const jwt = require("jsonwebtoken");

const loginUser = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });

    let findUser = await User.findOne({
      // $or: [{ username: email }, { email: email }],
      email
    });

    if (!findUser)
      return res
        .status(400)
        .json({ success: false, msg: "User does not exist please sign up." });

    let passwordMatch = await compare(password, findUser.password);

    if (!passwordMatch)
      return res
        .status(403)
        .json({ success: false, msg: "Invalid login credential" });

    let token = jwt.sign({ findUser }, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    res.status(200).json({
      success: true,
      msg: "Login successful",
      data: {
        token,
        user: {
          ...findUser._doc,
          password: "",
        },
      },
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = loginUser;
