const express = require("express");
const router1 = express.Router();
const Game1 = require("../models/gameModel1");

router1.get("/getallgames1", async (req, res) => {
  try {
    const games = await Game1.find();
    res.send(games);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router1.post("/addgame1", async (req, res) => {
  try {
    const newgame = new Game1(req.body);
    await newgame.save();
    res.send("Game added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router1.post("/editgame1", async (req, res) => {
  try {
    const game = await Game1.findOne({ _id: req.body._id });
    game.name = req.body.name;
    game.image = req.body.image;
    game.fuelType = req.body.fuelType;
    game.rentPerHour = req.body.rentPerHour;
    game.capacity = req.body.capacity;

    await game.save();

    res.send("Game details updated successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router1.post("/deletegame1", async (req, res) => {
  try {
    await Game1.findOneAndDelete({ _id: req.body.gameid });

    res.send("Game deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router1;