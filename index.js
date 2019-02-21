const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');

require('./models/User');
require('./services/passport');

const authRoutes=require('./routes/authRoutes');
mongoose.connect(keys.mongoURI);
const app=express();

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

//Client ID	
// Client secret 
const PORT=process.env.PORT
app.listen(5000);           