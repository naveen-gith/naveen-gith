const User = require('../models/user');
const Doctors = require('../models/doctors');
const JWT = require('jsonwebtoken');
signToken = user => {
  return JWT.sign({
    iss: 'Dv',
    sub: user._id,
    iat: new Date().getTime(),//current Time
    exp: new Date().setDate(new Date().getDate() + 1)//current Time +1 dayahead
  }, 'ABCDEFGHIJK');
}
module.exports = {
  signUp: async (req, res, next) => {
    const { userName, password, } = req.body;
    try {
      const newUser = new User({ userName, password })
      var res = await newUser.save();
      const token = signToken(newUser);
      return res.status(200).json({ token: token });
    } catch (err) {
      console.log(err);
    }


  },





  signIn: async (req, res, next) => {
    console.log(req.body);
    try {
      const founduser = await User.findByIdAndUpdate(req.user._id).exec();

      const token = signToken(req.user);

      res.status(200).json({ token });
    } catch (error) {

    }

  },
  createDoctors: async (req, res, next) => {
    console.log(req.body);
    try {
      const founduser = await Doctors.insertMany(req.body.data).exec();
      res.status(200).json({ data: founduser });
    } catch (error) {
      res.status(400).json({ data: error });
    }

  },
  getDoctors: async (req, res, next) => {
    console.log(req.body);
    try {
      const founduser = await Doctors.find().exec();
      res.status(200).json({ data: founduser });
    } catch (error) {
      res.status(400).json({ data: error });
    }

  },


  updateDoctors: async (req, res, next) => {
    console.log(req.body);
    try {
      const founduser = await Doctors.findByIdAndUpdate(req.body).exec();
      res.status(200).json('updaed successfully');
    } catch (error) {
      res.status(400).json({ data: error });
    }

  },
};
