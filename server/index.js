const express = require('express');

const mongoose = require('mongoose');
const morgan=require('morgan');
const path = require('path');
const bodyParser= require('body-parser');


var cors = require('cors')
const PORT = process.env.PORT | 4000;
const HOST = "localhost";
const app = express();


//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, 'public')));

const uri = "mongodb://localhost:27017/test";



mongoose.connect(uri,{ useNewUrlParser: true },(err,Database) => {
  
	console.log('connected to database');
  });
 
  //Routes
  app.use('/users',require('./routers/users'));

 app.get('/',(req,res)=>{
   
   res.send('Welcome to  Api server');
})


//Start the Server
app.listen(PORT, ()=>{
	console.log(`Server is running on http://${HOST}:${PORT}`);
})