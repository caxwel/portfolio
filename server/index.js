const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname, "../react-ui/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../react-ui/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ixerfade@gmail.com",
    pass: "hilda420",
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
