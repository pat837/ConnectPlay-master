const express = require("express");
const router1 = express.Router();
const Booking1 = require("../models/bookingModel1");
const Game1 = require("../models/gameModel1");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.BACK_END_STRIPE_KEY);

router1.post("/bookgame1", async (req, res) => {
  const { token } = req.body;
  try {

    function tokengen() {
      return Math.random().toString(36).substr(2); // remove `0.`
  };
    if (true) {
      req.body.transactionId = tokengen();
      const newbooking = new Booking1(req.body);
      await newbooking.save();
      const game = await Game1.findOne({ _id: req.body.game });
      console.log(req.body.game);
      game.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await game.save();
      res.send("Your booking is successfull");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});


router1.get("/getallbookings1", async(req, res) => {

    try {

        const bookings = await Booking1.find().populate('game')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }   
  
});


module.exports = router1;