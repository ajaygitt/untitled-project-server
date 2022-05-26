import jobOpening from "../models/jobOpening";

const user = require("../models/user");

var slugify = require("slugify");

export const getAllUsers = async () => {
  try {
    let users = await user.find();

    return res.json({ error: false, data: users });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};

export const activateUser = async () => {
  try {
    let update = await User.updateOne(
      { _id: req.body.id },
      {
        $set: {
          status: 1,
        },
      }
    );

    return res.json({ error: false });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};

export const deactivate = async () => {
  try {
    let update = await User.updateOne(
      { _id: req.body.id },
      {
        $set: {
          status: 1,
        },
      }
    );

    return res.json({ error: false });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};

export const createOpening = async () => {
  try {
    let makeUrl = await slugify(req.body.title);

    let job = new jobOpening({
      title: req.body.title,
      jobDescription: req.body.jobDescription,
      category: req.body.category,
      noOfOpenings: req.body.noOfOpenings,
      url: req.body.url,
    });

    await reg.save();

    return res.json({ error: false, message: "successfully created job" });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};
