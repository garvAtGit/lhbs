// utils/emailSender.js
import nodemailer from 'nodemailer';

export async function sendOrderEmail(order) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your Website" <${process.env.MAIL_USER}>`,
    to: `${order.email}, ${process.env.MAIL_USER}`,
    subject: `Order Confirmation - ${order.course}`,
    html: `
      <h2>Thank you for your purchase!</h2>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Phone:</strong> ${order.phone}</p>
      <p><strong>Course:</strong> ${order.course}</p>
      <p><strong>Amount:</strong> ₹${order.amount}</p>
      <p><strong>Status:</strong> ${order.status}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
