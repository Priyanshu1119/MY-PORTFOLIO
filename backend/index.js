import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    console.log("Contact form request received:", req.body);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // your App Password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'New Contact Form Message',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Message sending failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
