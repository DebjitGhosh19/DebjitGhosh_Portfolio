import nodemailer from 'nodemailer';

export const sendEmail = (req, res) => {

 try {
      const {name, email, message} = req.body;

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: "ghoshdebjit.2002@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // Use the environment variable for the password
  },
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: email,
    to: 'ghoshdebjit.2002@gmail.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<h3>New message from ${name}</h3>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });

  console.log("Message sent:", info.messageId);
})();

res.status(200).json({
        status: 'success',
        message: 'Email sent successfully'
      });
 } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error'
    });
  }
};

