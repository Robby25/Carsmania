const mongoose = require('mongoose');   

const UserSchema = mongoose.Schema({
    carName:{
        type:'string',
    },
});


module.exports =mongoose.model('car',UserSchema);