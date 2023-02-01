import mongoose from "mongoose";
mongoose.connect("mongodb+srv://Rylldanex:Danexoer_pxd123@cluster0.vuzhi.mongodb.net/?retryWrites=true&w=majority", () => {
  console.log("Connected To Databse");
});
const reportSchema = new mongoose.Schema({
  name: String,
  email: String,
  hours: Number,
  placements: Number,
  returnVisits: Number,
  bibleStudies: Number,
  videos: Number,
  submitted: Boolean,
  admin: Boolean
});
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true
  },
  lastLogin: {
    type: Date,
    default: () => Date.now()
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  submitted: Boolean
});
const Report = mongoose.model("reportModel", reportSchema);
const User = mongoose.model("userModel", userSchema);
export {
  Report,
  User
};
