const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');


//JSON WEB TOKEN STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'ABCDEFGHIJK'
}, async (payload, done) => {
    console.log(payload);
    try {
        console.log(payload)
        //Find the user specified in token
        const user = await User.findById(payload.sub);

        //If user doesn't exist handle it 
        if (!user) {
            return done(null, false);
        }
        done(null, user);
        //otherwise , return the user

    } catch (error) {
        done(error, false);

    }
}));

//LOCAL STRATEGY
passport.use(new LocalStrategy({ usernameField: 'userName', passReqToCallback: true }, async (req, userName, password, done) => {
    try {
console.log(req.body);

        //Find the user given the  mobileNumber
        const user = await User.findOne({ userName });
console.log(user);
        //If not ,handle It
        if (!user) {
            return done(null, false);
        }
        
            //IF exist  check the password
            const ismatch = await user.isValidPassword(password);
            //If wrong , handle It
            if (!ismatch) {
                return done(null, false);
            }
            //otherwise return the user
            console.log(user);
            done(null, user);
        
    }
    catch (error) {
   
        done(error, false);
    }
}

));