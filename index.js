const express=require('express');
const passport=require('passport');

const GoogleStrategy=require('passport-google-oath20').Strategy;
const keys=require('./config/keys.js')
const app=express();

passport.use(new GoogleStrategy({
    clientID:keys.googleClintID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'/auth/google/callback'
},(accessToken)=>{

})

);

//Client ID	
// Client secret 
const PORT=process.env.PORT
app.listen(5000);        