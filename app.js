const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sendGridTransporter = require('nodemailer-sendgrid-transport');

require("dotenv").config();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport(
    sendGridTransporter({
      auth: {
        api_key: process.env.API_SENDGRID,
      },
    })
  );

  app.post('/sendmail', (req,res) => {
      const {name, email, jobtypes, message} = req.body;

      if(!name){
        return res.status(400).json({error: "Please add your name"});
      }
      
      if(!email){
        return res.status(400).json({error: "Please add your email"});
      }
    
        
      if(!jobtypes){
        return res.status(400).json({error: "Please add jobtypes"});
      }
      if(!message){
        return res.status(400).json({error: "Please add your message"});
      }

      transporter.sendMail({
          to:"vamankumartamarana@gmail.com",
          from:"tamaranavamankumar@gmail.com",
          subject:"Job Offer",
          html: `
          <h5>Details Information:</h5>

          <ul>
          <li> <p>Name: ${name}</p> </li>
          <li> <p>E-mail: ${email}</p> </li>
          <li> <p>Job Types: ${jobtypes}</p> </li>
          <li> <p>Message: ${message}</p> </li>
          </ul>
          `,

      });

      res.json({ success: "Your E-mail has been sent"})
  })

app.listen(PORT,(req, res) => {
    console.log("Server got connected");
});