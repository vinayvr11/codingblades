const express = require("express")
const nodemailer = require("nodemailer")
const router = express.Router()


router.post("/mail", (req, res, next) => {
    console.log("Mail response...", req.body.phone.length)
    let name = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    if (req.body.phone.length == '10') {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'vr54640@gmail.com',
          pass: 'imlyijihygtojklm'
        }
      });
      
      var mailOptions = {
        from: 'vr54640@gmail.com',
        to: 'vinayrana54640@gmail.com',
        subject: 'CodingBlades Lead',
        text: ' Name - ' + name + "\n Email - " + email + "\n Phone - " + phone
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            res.json({message: "Mail Sent"})
        //   console.log('Email sent: ' + info.response);
        }
      });
    } else {
      res.json({message: "Phone Not Valid"})
    }
})

module.exports = router