require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { ObjectId } = require('mongodb')
const PORT = process.env.PORT || 3000;
const herokuVar = process.env.HEROKU_NAME || "local Barry"
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const nodemailer = require('nodemailer')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

let someVar = "";

async function cxnDB(){

  try{
    client.connect; 
    const collection = client.db("QuebecDB").collection("QuebecCollection");
    const result = await collection.find().toArray();
      
    // console.log("cxnDB result: ", result);
    return result; 

  }
  catch(e){
      console.log(e)
  }
  finally{
    client.close; 
  }


}

app.get('/', async (req, res) => {

  let result = await cxnDB().catch(console.error); 

  // console.log("get/: ", result);

  res.render('index', {
    someVar : "hello from node, express, & EJS, nodemon here too!",
    herokuVar : process.env.HEROKU_NAME,  
    drinkData : result
  })
})

app.post('/addDrink', async (req, res) => {

  try {
    // console.log("req.body: ", req.body) 
    client.connect; 
    const collection = client.db("QuebecDB").collection("QuebecCollection");
    await collection.insertOne(req.body);
      
    res.redirect('/');
  }
  catch(e){
    console.log(error)
  }
  finally{
   // client.close()
  }

})


app.post('/updateDrink/:id', async (req, res) => {

  try {
    console.log("req.parms.id: ", req.params.id) 
    
    client.connect; 
    const collection = client.db("QuebecDB").collection("QuebecCollection");
    let result = await collection.findOneAndUpdate( 
      {"_id": ObjectId(req.params.id)}, { $set: {"size": "super rare" } }
    )
    .then(result => {
      console.log(result); 
      res.redirect('/');
    })
    .catch(error => console.error(error))
  }
  finally{
    //client.close()
  }

})

app.post('/deleteDrink/:id', async (req, res) => {

  try {
    console.log("req.parms.id: ", req.params.id) 
    
    client.connect; 
    const collection = client.db("QuebecDB").collection("QuebecCollection");
    let result = await collection.findOneAndDelete( 
      {
        "_id": ObjectId(req.params.id)
      }
    )
    .then(result => {
      console.log(result); 
      res.redirect('/');
    })
    .catch(error => console.error(error))
  }
  finally{
    //client.close()
  }

})

app.listen(PORT, () => {
  console.log(`Server is running & listening on port ${PORT}`);
});




app.post('/gmail', (req, res) => {

  console.log("here");
  console.log(req.body); 

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'laneslyf@gmail.com',
      pass: process.env.APP_PWD
    }
  });

  var mailOptions = {
    from: 'laneslyf@gmail.com',
    to: req.body.email,
    subject: 'Trowbridges Mobile Ordering Confirmation!',
    text: 'Hello, cool order' + req.body.name
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect('/');
})