const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "anirudhkashyap67@gmail.com",
      pass: "tficbfkfuokwgxsc",
    },
  });

  let info = await transporter.sendMail({
    from: req.body.sender,
    to: "anirudhkashyap67@gmail.com",
    subject: "PortFolio Message",
    // text: "tst",
    text: ` from ${req.body.senderEmail} , name : ${req.body.name} and the message is ${req.body.message}`,
    html: `<h3>from</h3> :  <h3> ${req.body.senderEmail}</h3>  <p>name :  ${req.body.name} and the message is ${req.body.message}</p>`,
  });
  let info2 = await transporter.sendMail({
    from: "anirudhkashyap67@gmail.com",
    to: req.body.senderEmail,
    subject: "feed-back message",
    text: "tst",
    text: `Your Message has been successfully send to Anirudh Kashyap ,
    ${req.body.message}`,
  });
  res.json([info, info2]);
};

module.exports = sendMail;
