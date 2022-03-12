import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};
const User = model("User", userSchema);
export default User;
