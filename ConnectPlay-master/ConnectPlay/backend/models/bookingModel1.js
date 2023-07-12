const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({


      game : {type : mongoose.Schema.Types.ObjectID , ref:'games1'},
      user : {type : mongoose.Schema.Types.ObjectID , ref:'users'},
      bookedTimeSlots : {
          from : {type : String} ,
          to : {type : String}
      } ,
      totalHours : {type : Number},
      totalAmount : {type : Number},
      transactionId : {type : String},
      driverRequired : {type : Boolean}


},
  {timestamps : true}
)

const bookingModel1 = mongoose.model('bookings1' , bookingSchema)

module.exports = bookingModel1