const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('./DB/config');
const User = require('./DB/users');
app.use(express.json());
app.use(cors());





app.post('/register',async (req,resp)=>{
    const user = new User(req.body);
    let result =await user.save();
    result = result.toObject();
    delete result.password;
    
resp.send(result)
})





app.listen(8080);