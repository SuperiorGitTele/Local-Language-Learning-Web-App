import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { Type: String, required: true },
  email: { Type: String, required: true },
  password: { Type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
