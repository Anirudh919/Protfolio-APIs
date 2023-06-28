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
    to: "gautamyadav1992002@gmail.com",
    subject: "PortFolio Message",
    text: `testing api`,
    // text: ` from ${req.body.senderEmail} , name : ${req.body.name} and the message is ${req.body.message}`,
    // html: `<h3>from</h3> :  <h3> ${req.body.senderEmail}</h3>  <p>name :  ${req.body.name} and the message is ${req.body.message}</p>`,
  });
  // let info2 = await transporter.sendMail({
  //   from: "gautamyadav1992002@gmail.com",
  //   to: req.body.senderEmail,
  //   subject: "feed-back message",
  //   text: `Your Message has been successfully send to Gautam Yadav ,
  //   ${req.body.message}`,
  // });
  res.json(info);
};

module.exports = sendMail;
