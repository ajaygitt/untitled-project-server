let mongoose = require("mongoose");
const { Schema } = mongoose;

const jobSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    jobDescription: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    noOfOpenings: {
      type: String,
      trim: true,
      required: true,
    },
    url: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: Number,
      default: 1, //1- active oppurtunity, 2- deactivated, 3-deleted, 0- deleted
    },
  },
  { timestamps: true }
);

// export default mongoose.model('User', userSchema);
module.exports = User = mongoose.model("jobOpening", jobSchema);
