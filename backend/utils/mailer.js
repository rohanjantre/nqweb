const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends the contact-form submission to the business inbox
 * and a short confirmation back to the person who submitted it.
 */
const sendContactEmails = async ({ name, email, phone, subject, message }) => {
  const receiver = process.env.RECEIVER_EMAIL || "rohanjantre123@gmail.com";

  // 1. Notify the business
  await transporter.sendMail({
    from: `"NoviqWeb Website" <${process.env.EMAIL_USER}>`,
    to: receiver,
    replyTo: email,
    subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color:#1E5EFF;">New Enquiry from NoviqWeb Website</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; font-weight:bold; width:120px;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "-"}</td></tr>
          <tr><td style="padding:8px; font-weight:bold;">Subject</td><td style="padding:8px;">${subject || "General Inquiry"}</td></tr>
        </table>
        <p style="font-weight:bold; margin-top:16px;">Message:</p>
        <p style="white-space: pre-wrap; background:#F5F7FB; padding:12px; border-radius:6px;">${message}</p>
      </div>
    `,
  });

  // 2. Auto-confirmation to the client (optional but good UX; safe to remove)
  await transporter.sendMail({
    from: `"NoviqWeb" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We've received your message - NoviqWeb",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
        <h2 style="color:#1E5EFF;">Thanks for reaching out, ${name}!</h2>
        <p>We've received your message and our team will get back to you within 24 hours.</p>
        <p style="color:#555;">— The NoviqWeb Team</p>
      </div>
    `,
  });
};

module.exports = sendContactEmails;
