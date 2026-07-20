require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.SERVER_PORT || 4000;
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const recipient = process.env.RECIPIENT_EMAIL || user;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user, pass },
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    await transporter.sendMail({
      from: `"${name}" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2 style="color:#1e293b;">New message from your portfolio</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;color:#475569;">Name:</td><td style="padding:8px;color:#1e293b;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#475569;">Email:</td><td style="padding:8px;"><a href="mailto:${email}" style="color:#3b82f6;">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#475569;">Subject:</td><td style="padding:8px;color:#1e293b;">${subject}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <p style="color:#334155;">${message.replace(/\n/g, '<br/>')}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />
        <p style="color:#94a3b8;font-size:12px;">Sent via your portfolio website.</p>
      `,
    });
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Dev email server running on http://localhost:${PORT}`);
  if (!user || !pass) {
    console.warn('WARNING: EMAIL_USER and EMAIL_PASS must be set in .env');
  }
});
