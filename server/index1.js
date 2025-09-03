/*
step1: mkdir server
step2: cd server
step3: npm i express
step4: npm init -y
step5: "dev": "node index.js" in package.json
step6: create index.js
step7: set up a basic express server
step8: define a simple route

*/




const express = require('express');
const app = express();
require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

app.use(express.json()); // for parsing application json -->json parser,,,,,middleware

const logger = (req, res, next) => {
  console.log(req.originalUrl);
  console.log(req.body.role);
  console.log(req.message);
  req.token = "secret_token_value";
  next();
}

app.post('/login',logger, (req, res) => {
  console.log(req.body);

  res.send({message:'Login successful',
    token:req.token
  });
  
});



app.get('/', (req, res) => {
  //res.status(404);
  //res.status(200);
  //res.status(202);
  //res.status(500);
  res.status(201);
  res.send('<h1>Hello from Express Server!!!</h1>');
});

app.post('/user', (req, res) => {    
    const data = req.body;
  if(data.name == "raju" && data.password == "123"){
      res.send('Login successful');
  }else{
      res.send('Login failed...!!!!');
  }
});

app.post('/search/:tag/:type',(req,res)=>{
  //res.status(202).send('Search API called');
  console.log(req.originalUrl);
  console.log(req.params.tag);
  console.log(req.params.type);
  console.log(req.query.name);
  
  
  //response objects
  const {email,password} = req.body;
  let message = email=== "raju" && password === "123" ? "Valid" : "Invalid";

  //response in json
  res.json({status:200,message:message});
  res.end();
})



//only once       
app.listen(8060, () => {
  console.log('App is running on http://localhost:8060/');
});


