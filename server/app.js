require("dotenv").config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const sgMail = require('@sendgrid/mail');
const app = express();
const PORT = process.env.PORT || 8000;
const k = process.env.API_SENDGRID || "";
sgMail.setApiKey(k);
const bodyparser = require('body-parser');

// app.use(cors({ origin: process.env.ALLOWED_ORIGIN }));
app.use(express.json({ limit: '10kb'}));
app.use('/sendmail', rateLimit({ windowMs: 15 * 60 * 1000, max: 5}));

const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5173";
console.log("CORS allowed origin:", allowedOrigin);
app.use(cors({ origin: allowedOrigin }));
// ---- SAFETY FIX: put this here, above the route ----
const clean = (s = "") => String(s).replace(/[\r\n]+/g, " ").trim();
const JOB_TYPES = ["Full-time", "Contract", "Freelance", "Support & Maintenance"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  app.post('/sendmail', async (req,res) => {
    console.log("POST /sendmail hit", req.body);
      const {name: n, email: e, jobtypes: j, message: m, website} = req.body;
      if (website) return res.json({ success: "Your E-mail has been sent" });
      const name = clean(n).slice(0,100);
      const email = clean(e).slice(0,200);
      const jobtypes = clean(j);
      const message = String(m || "").trim().slice(0, 3000);
      
      if (!name) return res.status(400).json({ error: "Please add your name" });
      if (!EMAIL_RE.test(email)) return res.status(400).json({ error: "Please add a valid email" });
      if (!JOB_TYPES.includes(jobtypes)) return res.status(400).json({ error: "Invalid engagement type" });
      if (!message) return res.status(400).json({ error: "Please add your message" });

      try {
        const response = await sgMail.send({
          to: "vamansapsd@gmail.com",
          from: "tamaranavamankumar@gmail.com",
          replyTo: email,
          subject: `Portfolio enquiry: ${jobtypes} - ${name}`,
          html:`
          <h5>Details Information</h5>
          <ul>
          <li><p>Name: ${esc(name)}</p></li>
          <li><p>E-mail: ${esc(email)}</p></li>
          <li><p>Engagement Type: ${esc(jobtypes)}</p></li>
          <li><p>Messages: ${esc(message)}</p></li>
          </ul>`,
        });
        console.log("SendGrid status:", response.statusCode); // expect 202
    res.json({ success: "Your E-mail has been sent" });
  } catch (err) {
    console.error("Send failed:", err.response?.body ? JSON.stringify(err.response.body) : err);
    res.status(500).json({ error: "Email could not be sent. Please try again." });
  }
    });
    console.log("SendGrid key loaded:", k ? `${k.slice(0, 6)}... (length ${k.length})` : "MISSING");
      
app.listen(PORT,(req, res) => {
    console.log("Server got connected");
});