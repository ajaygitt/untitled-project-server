let mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    contactNo: {
      type: String,
      trim: true,
      required: true,
    },
    resume: {
      type: String,
      trim: true,
      required: true,
    },
    jobId: {
      type: ObjectId,
      ref: "jobOpening",
    },
    comment: {
      type: String,
      trim: true,
    },
    status: {
      //0-applied, 1- selected, 2- rejected
      type: Number,
      default: 0,
    },
  },

  { timestamps: true }
);

// export default mongoose.model('User', userSchema);
module.exports = User = mongoose.model("applicant", applicantSchema);
