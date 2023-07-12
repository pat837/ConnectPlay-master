const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Game = require("../models/gameModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.BACK_END_STRIPE_KEY);
router.post("/bookgame", async (req, res) => {
  const { token } = req.body;
  try {
    // const customer = await stripe.customers.create({
    //   email: token.email,
    //   source: token.id,
    // });

    // const payment = await stripe.charges.create(
    //   {
    //     amount: req.body.totalAmount * 100,
    //     currency: "inr",
    //     customer: customer.id,
    //     receipt_email: token.email
    //   },
    //   {
    //     idempotencyKey: uuidv4(),
        
    //   }
    // );
    const payment=true;
    function tokengen() {
      return Math.random().toString(36).substr(2); // remove `0.`
  };
    if (payment) {
      req.body.transactionId = tokengen();
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const game = await Game.findOne({ _id: req.body.game });
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


router.get("/getallbookings", async(req, res) => {

    try {

        const bookings = await Booking.find().populate('game')
        res.send(bookings)
        
    } catch (error) {
        return res.status(400).json(error);
    }
  
});


module.exports = router;