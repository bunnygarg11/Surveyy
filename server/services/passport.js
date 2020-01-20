const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID:"622589427817-8idgba1ks9pv3p8o54a3ug1hmp8mb613.apps.googleusercontent.com",
      clientSecret: "AO0DSafmlmLeQpG7ZIBhYebk",
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
