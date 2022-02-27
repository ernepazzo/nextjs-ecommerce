import valid from "../../../utils/valid";
import bcrypt from "bcrypt";
import User from "../../../models/User";

const { default: connectDB } = require("../../../utils/connectDB");

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ err: "This email is already exists." });

    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      cf_password,
    });

    console.log(newUser);
    await newUser.save();
    res.json({ msg: "Register Success!" });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
