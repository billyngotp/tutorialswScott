const passport = require("passport");
const passportJwt = require('passport-jwt');

const {Strategy, ExtractJwt} = passportJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: ' asfsegwherg',
    passReqToCallback: true,
};

const JwtStrategy = new Strategy( jwtOptions, async (response, payload, done) => {
    try{
        return done(null,true);
    } catch (err) {
        return done(err, false);
    }
})

passport.use(JwtStrategy);

module.exports = passport;