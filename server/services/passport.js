const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('../config/keys');
const mongoose = require("mongoose")
const User = mongoose.model("users")

passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>{
    done(null,user)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: "622589427817-8idgba1ks9pv3p8o54a3ug1hmp8mb613.apps.googleusercontent.com",
      clientSecret: "AO0DSafmlmLeQpG7ZIBhYebk",
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          done(null, existingUser)
        }
        else {
          new User({ googleId: profile.id }).save().then(user => done(null, user))
        }

      })
    }
  )
);
