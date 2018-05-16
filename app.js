var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var config = require('./config/database');

var userCar = require('./routes/userCar');
var path=require('path');

mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to database '+config.database);
});

//onError
mongoose.connection.on('error',()=>{
    console.log('Database error '+err);
});

var app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.use('/cars',userCar);

app.get('/',function(req,res){
    res.send('Hello');
});
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'));
})

const port = process.env.PORT || 7000;

app.listen(port,()=>{
    console.log('Server started on port '+port);
});