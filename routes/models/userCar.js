const mongoose = require('mongoose');   

const UserCarSchema = mongoose.Schema({
    carName:{
        type:'string',
    },
    model:{
        type:'string'
    },
    img:{
        type:'string'
    }
});


module.exports =mongoose.model('carModel',UserCarSchema);
