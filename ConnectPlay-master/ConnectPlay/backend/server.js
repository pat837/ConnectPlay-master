const express = require("express");
const app = express();
const Game = require('./models/gameModel');
const Game1 = require('./models/gameModel1');
const port = process.env.PORT || 5000;
const dbConnection = require ('./db');

app.use(express.json());
const path = require("path");

const usersRoute = require('./routes/usersRoute')
const gamesRoute = require('./routes/gamesRoute')
const bookingsRoute = require('./routes/bookingsRoute')

const gamesRoute1 = require('./routes/gamesRoute1')
const bookingsRoute1 = require('./routes/bookingsRoute1')



app.use("/api/games/", require("./routes/gamesRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

app.use("/api/games1/", require("./routes/gamesRoute1"));
app.use("/api/bookings1/", require("./routes/bookingsRoute1"));


//----------deployment-----------------

__dirname = path.resolve();

if(process.env.NODE_ENV==="production") {
 app.use(express.static(path.join(__dirname,"/frontend/build")));

 app.get('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
 });
}else{
	app.get("/", (req, res)=>{
      res.send("API is running..");
	});
}


//----------deployment-----------



app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
