const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'advekonspb.info@gmail.com',
      pass: 'hMJp4GHcL2XZL8j',
    }
  },
    {
        from: "Advekon info <advekonspb.info@gmail.com>",
    }
)

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    console.log(message);
    if (err) return console.error(err);
    console.log('info', info);
  })
}

module.exports = mailer;
