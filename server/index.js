const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path'); 
const db =require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors());

//Connection with DB
db.once('open', () => {
 console.log('Database connection is open.');
 });
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public'))); 
 
// Catch-all route for handling  404 errors 
app.use('/',(req, res) => { 
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html')); 
}); 




app.listen(3500, ()=>{console.log("KLU Server is Launch...")});