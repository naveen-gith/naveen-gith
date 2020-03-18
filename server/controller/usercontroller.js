const User = require('../models/user');
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

      console.log('api called');
      console.log(req.body)
          const { userName, password,  } = req.body;
      
      
      try{
        const newUser = new User({ userName,  password})
        console.log(newUser);
        console.log('secod');
        var res= await newUser.save();
        console.log(res);
        const token = signToken(newUser);
        console.log(res);
        return res.status(200).json({ token: token });
      }catch(err){
console.log(err);
      }
      
         
          },
    
   
          
        

signIn: async (req, res, next) => {
    console.log(req.body);
    try {
      const founduser = await User.findByIdAndUpdate(req.user._id ).exec();

      const token = signToken(req.user);

      res.status(200).json({ token });
    } catch (error) {

    }

  }
};