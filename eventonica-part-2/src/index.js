const express= require('express');
//I think this imports everything from models 
const models = require('./models');

const event= new models.Eventonica();
const app= express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port= process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
  });

app.get('/', (req, res)=>{
    res.send('Hello World!')

})
//thinking of all possible routes 


//all users route 
app.route('/users').get((req, res)=>{
  res.status(200).send(models.alex);
})

//all events route 

//users/:id   ---> one user

//users/:events ----> one user 
