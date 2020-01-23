var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saoodheart@gmail.com",
    pass: "tnumdqnravpvrcfb"
  }
});

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: "saoodheart@gmail.com",
    to: "saood011@yahoo.com",
    subject: `WORLDCHAT password request---From:${subject} with email: ${email} `,
    text: `${text} - send password to : ${email}`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, info);
    }
  });
};
/* sendMail("saood011@yahoo.com", "hi", "hello", function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
}); */
module.exports = sendMail;
