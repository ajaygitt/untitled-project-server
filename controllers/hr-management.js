import applicant from "../models/applicant";
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

export const createOpening = async (req, res) => {
  try {
    console.log(req.body);
    let makeUrl = await slugify(req.body.title);
    console.log("makeUrl", makeUrl);
    let urlAlreadyExist = await jobOpening.findOne({
      title: req.body.title,
      status: 1,
    });
    if (urlAlreadyExist) {
      console.log("ues")
      return res.json({
        error: true,
        message: "Entered title already exists ! try with another title",
      });
    }
    else{
      console.log("OKu")
    }
    let job = new jobOpening({
      title: req.body.title,
      jobDescription: req.body.jobDescription,
      category: req.body.category,
      noOfOpenings: req.body.noOfOpening,
      url: makeUrl,
    });

    await job.save();

    return res.json({ error: false, message: "successfully created job" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};

export const getOpening = async (req, res) => {
  try {
    let data = await jobOpening.find().sort({createdAt:-1});

    return res.json({ error: false, data: data });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};

export const getJobInfo=async(req,res)=>{

  try{
    let data = await jobOpening.findOne({url:req.params.title});
console.log("-",data)
    return res.json({ error: false, data: data });
  }
  catch(err)
  {
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
}

export const applyForJob=async(req,res)=>{

  try{

    console.log("req.",req.body)
    console.log("req.",req.files)

    let jobDetails=await jobOpening.findOne({url:req.body.openingUrl})
  let applicantValues=req.body.otherDetails
    let applicant=new applicant({
      name:applicantValues.name,
      contactNo:applicantValues.contactNo,


    })
  }
  catch(err)
  {

  }
}