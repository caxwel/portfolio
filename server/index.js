const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, "../react-ui/build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "../react-ui/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => console.log("Server Running"));

const oauth2Client = new OAuth2(
  process.env.ID,
  process.env.SECRET,
  "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH,
});
const accessToken = oauth2Client.getAccessToken();

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.ID,
    clientSecret: process.env.SECRET,
    refreshToken: process.env.REFRESH,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "ixerfade@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "message sent" });
    }
  });
});
