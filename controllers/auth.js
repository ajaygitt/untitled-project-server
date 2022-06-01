import user from "../models/user";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const register = async (req, res) => {
  try {
    console.log(req.body);

    let emailExist = await user.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).json({ message: "Email already exists" });
    }
    let empIdExist = await user.findOne({ empId: req.body.id });
    if (empIdExist) {
      return res
        .status(400)
        .json({ error: true, message: "ID entered is already exists" });
    }

    let encPwd = await bcrypt.hash(req.body.password, 10);

    let reg = new user({
      name: req.body.name,
      dob: req.body.dob,
      dateOfJoining: req.body.dateOfJoining,
      email: req.body.email,
      designation: req.body.designation,
      section: req.body.section,
      metaData: {},
      empId: req.body.id,
      password: encPwd,
    });
    reg.save();
    return res.status(200).json({
      message:
        "successfully registered!, You can login once the account is approved",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ error: true, message: "can't register. try again later" });
  }
};

export const login = async (req, res) => {
  try {
    console.log(req.body);
    let emailExists = await user.findOne({ email: req.body.email });

    if (emailExists) {
      let passwordMatch = await bcrypt.compare(req.body.password, emailExists.password);
      console.log("match",passwordMatch)
      if (passwordMatch) {
        // login successfull

        const token = await jwt.sign(
          { _id: user._id },
          process.env.JWT_SECRET,
          {
            expiresIn: "30d",
          }
        );

        let responseData = {
          _id: emailExists._id,
          name: emailExists.name,
          email: emailExists.email,
          id: emailExists.empId,
          jwtToken: token,
          role: emailExists.role,
        };

        res.json({
          error: false,
          data: responseData,
          message: "Login Successfully",
        });
      } else {
        return res
          .status(400)
          .json({ message: "Password entered is incorrect" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "email address provided does'nt match" });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ error: true, message: "something went wrong" });
  }
};
