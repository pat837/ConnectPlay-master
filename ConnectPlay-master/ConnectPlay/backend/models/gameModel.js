const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    capacity : {type : Number , required : true},
    fuelType : {type : String , required : true} , 
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerHour : {type : Number , required : true}


}, {timestamps : true}

)
const gameModel = mongoose.model('games' , gameSchema)
module.exports = gameModel