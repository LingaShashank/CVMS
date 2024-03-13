const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path'); 
const db =require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const sendMailUtil = require('./utils/sendMailUtil'); // Renamed import

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors());

// Connection with DB
db.once('open', () => {
 console.log('Database connection is open.');
 });

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.post('/api/sendMail', async (req,res) => {
  const { email, message, subject } = req.body;

  try {
      const sent_to = email;
      const sent_from = process.env.EMAIL_USER;
      const reply_to = email;
      const mailsubject = subject;
     
      const textMessage = message;
      await sendMailUtil(mailsubject, textMessage, sent_to, sent_from, reply_to); // Use sendMailUtil
      res.status(200).json({ success: true, message: "Email sent successfully" });
  }
  catch(err) {
      res.status(500).json(err.message);
  }
});

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3500, () => {
    console.log("KLU Server is Launch...");
});