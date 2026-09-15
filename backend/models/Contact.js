const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
      default: "",
    },
    subject: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "General Inquiry",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: 3000,
    },
    status: {
      type: String,
      enum: ["pending", "reviewed"],
      default: "pending",
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Speeds up the "is this person already in review" lookup
contactSchema.index({ email: 1, createdAt: -1 });

module.exports = mongoose.model("Contact", contactSchema);
