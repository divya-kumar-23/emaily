const express=require('express');
const mongoose=require('mongoose');
const keys=require('./config/keys');
require('./models/User');
require('./services/passport');

const authRoutes=require('./routes/authRoutes');
mongoose.connect(keys.mongoURI);
const app=express();

authRoutes(app);

//Client ID	
// Client secret 
const PORT=process.env.PORT
app.listen(5000);           