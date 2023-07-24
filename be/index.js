const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const UserModel = require('./models/UserSchema');
const cors = require('cors');
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
const connectMongoose = process.env.dbmongoose
const salt = bcrypt.genSaltSync(10);
const port = 8080;
mongoose.connect(connectMongoose)


app.post('/signup', async (req,res)=> {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.create({email,password:bcrypt.hashSync(password,salt)})
  res.json(user)
})

app.post('/login', (req,res) => {
  res.json('login')
})

app.listen(port, ()=>{
  console.log(`start ${port}`)
})