const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const sendContactEmails = require("../utils/mailer");

const REVIEW_WINDOW_HOURS = Number(process.env.REVIEW_WINDOW_HOURS || 24);

// POST /api/contact  -> submit a new enquiry
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    // ---- Duplicate / already-in-review check ----
    // If this email already has a "pending" submission within the review
    // window, don't send another email or create a new record — just tell
    // the person their message is already being looked at.
    const windowStart = new Date(Date.now() - REVIEW_WINDOW_HOURS * 60 * 60 * 1000);

    const existingPending = await Contact.findOne({
      email: email.toLowerCase().trim(),
      status: "pending",
      createdAt: { $gte: windowStart },
    }).sort({ createdAt: -1 });

    if (existingPending) {
      return res.status(200).json({
        success: true,
        duplicate: true,
        message:
          "Your message is already in review. Our team is on it and will get back to you soon.",
      });
    }

    // ---- Create the new contact entry ----
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // ---- Send emails (to business + confirmation to client) ----
    try {
      await sendContactEmails({ name, email, phone, subject, message });
      contact.emailSent = true;
      await contact.save();
    } catch (mailErr) {
      // The enquiry is still saved even if email delivery fails,
      // so nothing is lost — just log it for follow-up.
      console.error("Email sending failed:", mailErr.message);
    }

    return res.status(201).json({
      success: true,
      duplicate: false,
      message: "Thank you! Your message has been sent. We'll get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact route error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong on our end. Please try again later.",
    });
  }
});

// GET /api/contact  -> list submissions (simple admin/debug use)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch contacts." });
  }
});

// PATCH /api/contact/:id/reviewed -> mark a submission as reviewed
router.patch("/:id/reviewed", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: "reviewed" },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found." });
    }
    res.status(200).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update contact." });
  }
});

module.exports = router;
