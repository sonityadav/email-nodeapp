// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 587,
  secure: false, // use SSL
  auth: {
    user: '7895f362ba8773',
    pass: 'b6400e3d95ac20',
  }
});

// Configure the mailoptions object
const mailOptions = {
  from: 'from@email.com',
  to: 'to@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});