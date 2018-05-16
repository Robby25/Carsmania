const express=require('express');
const router=express.Router();

const user = require('./models/user');
const userCar = require('./models/userCar');


router.get('/models',function(req,res){
    user.find(function(err,userCars){
        if(err){
         throw err;
        }
        res.json(userCars);
       // console.log(userCars);
    })
});


router.get('/carModels',function(req,res){
    
    userCar.find(function(err,userCarModels){
        if(err){
         throw err;
        }
        res.json(userCarModels);
       // console.log(userCarModels);
    })
});


module.exports = router;