let mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    phonenumber: {
      type: Number,
    },
    password: {
      type: String,
      min: 6,
      max: 64,
    },
    role: {
      type: Number,
      default: 1, //for normal user employee=1, HR=0, manager=2,ceo=3
    },
    status: {
      type: Number, //0 not approved, 1- active, 2-resigned, 3 -removed
      default: 0,
    },
    dob: {
      type: String,
    },
    dateOfJoining: {
      type: String,
    },
    designation: {
      type: String,
    },
    section: {
      //1- software,2-bpo,3- other
    },
    metaData: {},
    empId: {
      //0- software,1-bpo,2- other
    },
  },
  { timestamps: true }
);

// export default mongoose.model('User', userSchema);
module.exports = User = mongoose.model("user", userSchema);
