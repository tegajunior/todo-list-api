const { User } = require("../../models/User");
const bcryptjs = require("bcryptjs");

const creatNewUser = async (req, res, next) => {
  try {
    let { email, fullname, password, } = req.body;
    if (!email || !fullname || !password)
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });

    let newFullname = fullname.toLowerCase();



    const user_email = await User.findOne({ email });
    if (user_email)
      return res
        .status(400)
        .json({ success: false, msg: "Email already exists" });

    let hashedPassword = bcryptjs.hashSync(password, 12);

    const newUser = new User({
      fullname: newFullname,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    if (!newUser) return res.status(500).json({ msg: "An error has occurred" });

    res.status(201).json({
      success: true,
      msg: "Account created successfully",
      user: newUser,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = creatNewUser;
