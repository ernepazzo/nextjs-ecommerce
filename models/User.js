import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "/avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

// let Dataset = mongoose.models.user || mongoose.model("user", userSchema);

// export default Dataset;
export default mongoose.models.User || mongoose.model("User", userSchema);;
