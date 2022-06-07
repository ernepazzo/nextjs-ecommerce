import bcrypt from "bcrypt";
import User from "../../../models/User";
import {
  createAccessToken,
  createRefreshToken,
} from "../../../utils/generateToken";

const { default: connectDB } = require("../../../utils/connectDB");

connectDB();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ err: "This user does not exists." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ err: "Incorrect password." });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    res.json({
      msg: "Register Success!",
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        rol: user.rol,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
