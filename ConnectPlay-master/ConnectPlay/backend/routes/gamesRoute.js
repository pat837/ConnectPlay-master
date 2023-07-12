const express = require("express");
const router = express.Router();
const Game = require("../models/gameModel");

router.get("/getallgames", async (req, res) => {
  try {
    const games = await Game.find();
    res.send(games);
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/addgame", async (req, res) => {
  try {
    const newgame = new Game(req.body);
    await newgame.save();
    res.send("Game added successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/editgame", async (req, res) => {
  try {
    const game = await Game.findOne({ _id: req.body._id });
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

router.post("/deletegame", async (req, res) => {
  try {
    await Game.findOneAndDelete({ _id: req.body.gameid });

    res.send("Game deleted successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;