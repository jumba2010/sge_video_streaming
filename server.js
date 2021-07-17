const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require('body-parser');
const Course=require('./model/course');
const Room=require('./model/room');
const path = require('path');
const axios = require('axios');
const moment = require('moment');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(
  bodyParser.json()
);
const course = require('./routes/course');
app.use('/api/course', course);

const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
app.set("view engine", "ejs");
const io = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/:course", (req, res) => {
  res.redirect(`${req.params.course}/${uuidv4()}`);
});

app.get("/:course/:room", async(req, res) => {
  
  let normalizedName=req.params.course.split(" ").join("").toLowerCase()
  const courses =await Course.find({active: true,normalizedName:normalizedName }).sort({creationDate:-1});
  if(courses.length!=0){
    const url=normalizedName+req.params.room;
    let embebedUrl=courses[0].urls;
    const rooms =await Room.find({active: true,url:url});
  
    const expritationTime=process.env.EXPIRATION_TIME;
    let time=moment().unix()+expritationTime;

    if(rooms.length===0){
      await axios.post('https://api.daily.co/v1/rooms', {
        "properties": {
             "enable_chat": true,
             "eject_after_elapsed": expritationTime,
             "exp": time
        },
      
   }, {
        headers: {
          'Authorization': `Bearer ${process.env.DAILY_CO_KEY}` 
        }
      }).then(async function(data){
        let r=new Room({name:data.data.name,url:url});
        r=await r.save()
        res.render("room", { roomId: data.data.name ,videoId:embebedUrl,subDomain:process.env.DAILY_CO_SUBDOMAIN});
    
      }).catch(error => {
        console.error(error)
      })
      }
      //Reuse the previous room
      else{
        res.render("room", { roomId: rooms[0].name ,videoId:embebedUrl,subDomain:process.env.DAILY_CO_SUBDOMAIN});

      }
  }});


 mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('Connected to Mongodb...'))
   .catch(err => console.error('Could not connect to Mongodb', err));

server.listen(process.env.PORT || 3030,()=>{
    console.log(`server running on port ${process.env.PORT || 3030}`);

});

