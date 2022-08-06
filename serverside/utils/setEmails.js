// mail send
const nodemailer = require('nodemailer');

const sendMail =(options) => {
    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

//  mail send option 
const mailOptions = {
    from: options.from, 
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html
    }
    transport.sendMail(mailOptions)
}

module.exports = sendMail