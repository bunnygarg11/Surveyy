const express = require('express');
const mongoose=require("mongoose")
require("./models/User")

require('./services/passport');
const app = express();

mongoose.connect("mongodb://localhost:27017/survey",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Mongodb connected")
}).catch((err)=>{
    console.log(err)
})

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
