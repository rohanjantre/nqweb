import React, { useState } from "react";
import { submitContactForm } from "../api";
import "./Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatus({
        type: "error",
        text: "Please fill in your name, email, and message.",
      });

      return;
    }

    setLoading(true);

    try {
      const res = await submitContactForm(form);

      const { success, duplicate, message } = res.data;

      if (success && duplicate) {
        setStatus({
          type: "info",
          text: message,
        });
      } else if (success) {
        setStatus({
          type: "success",
          text: message,
        });

        setForm(initialForm);
      } else {
        setStatus({
          type: "error",
          text:
            message ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      const serverMessage =
        err?.response?.data?.message;

      setStatus({
        type: "error",
        text:
          serverMessage ||
          "We couldn't send your message. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-grid-bg"></div>

        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>

        <div className="contact-hero-inner">

          <div className="contact-hero-copy">

            <div className="contact-eyebrow">
              <span className="contact-eyebrow-dot"></span>
              <p>Let's work together</p>
            </div>

            <h1>
              Let's talk about
              <span> your website.</span>
            </h1>

            <p className="contact-hero-sub">
              Tell us what you're building, where you're stuck,
              or what you want to improve. We'll get back to you
              shortly.
            </p>

            <div className="contact-direct">

              <span className="contact-direct-label">
                Prefer email?
              </span>

              <a href="mailto:rohanjantre123@gmail.com">
                rohanjantre123@gmail.com
                <span>↗</span>
              </a>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div
            className="contact-hero-visual"
            aria-hidden="true"
          >

            <div className="contact-orbit contact-orbit-one"></div>

            <div className="contact-orbit contact-orbit-two"></div>

            <div className="contact-orbit contact-orbit-three"></div>

            <div className="contact-core">

              <div className="contact-core-ring">

                <div className="contact-core-symbol">
                  N
                </div>

                <div className="contact-core-label">
                  NOVIQWEB
                </div>

              </div>

            </div>

            <div className="contact-floating-card contact-floating-one">

              <span className="contact-floating-icon">
                ✉
              </span>

              <div>
                <strong>Let's connect</strong>
                <small>Start a conversation</small>
              </div>

            </div>

            <div className="contact-floating-card contact-floating-two">

              <span className="contact-floating-icon">
                ✓
              </span>

              <div>
                <strong>Quick response</strong>
                <small>Usually within 1 day</small>
              </div>

            </div>

          </div>

        </div>

        <div className="contact-scroll">
          <span></span>
          <p>Scroll to contact</p>
        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-section-heading">

            <span>
              01 — GET IN TOUCH
            </span>

            <h2>
              Have an idea?
              <br />
              <strong>Let's make it real.</strong>
            </h2>

          </div>


          <div className="contact-grid-main">

            {/* ================= INFO ================= */}

            <div className="contact-info">

              <div className="contact-info-intro">

                <span className="contact-number">
                  01
                </span>

                <h3>
                  Tell us a little
                  about your project.
                </h3>

                <p>
                  Whether you need a brand-new website,
                  an existing site improved, or a custom
                  web application, we'd love to hear about it.
                </p>

              </div>


              <div className="contact-info-items">

                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    @
                  </div>

                  <div>
                    <span>
                      EMAIL
                    </span>

                    <a href="mailto:rohanjantre123@gmail.com">
                      rohanjantre123@gmail.com
                    </a>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    ◷
                  </div>

                  <div>
                    <span>
                      WORKING HOURS
                    </span>

                    <p>
                      Mon – Sat
                      <br />
                      10am – 7pm IST
                    </p>
                  </div>

                </div>


                <div className="contact-info-item">

                  <div className="contact-info-icon">
                    ↗
                  </div>

                  <div>
                    <span>
                      RESPONSE TIME
                    </span>

                    <p>
                      Usually within
                      <br />
                      one business day
                    </p>
                  </div>

                </div>

              </div>


              <div className="contact-info-bottom">

                <div className="contact-line"></div>

                <p>
                  No complicated sales process.
                  Just a straightforward conversation
                  about what you need.
                </p>

              </div>

            </div>


            {/* ================= FORM ================= */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >

              <div className="contact-form-header">

                <span>
                  02 — PROJECT DETAILS
                </span>

                <h3>
                  Send us a message
                </h3>

                <p>
                  Fill in the details below and
                  we'll take it from there.
                </p>

              </div>


              <div className="contact-form-row">

                <div className="contact-form-field">

                  <label htmlFor="name">
                    Full name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="contact-form-field">

                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="contact-form-row">

                <div className="contact-form-field">

                  <label htmlFor="phone">
                    Phone number
                    <span>Optional</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 90000 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />

                </div>


                <div className="contact-form-field">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="New website for my business"
                    value={form.subject}
                    onChange={handleChange}
                  />

                </div>

              </div>


              <div className="contact-form-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {status && (

                <div
                  className={`contact-status contact-status-${status.type}`}
                  role="alert"
                >
                  <span>
                    {status.type === "success"
                      ? "✓"
                      : status.type === "info"
                        ? "i"
                        : "!"}
                  </span>

                  <p>
                    {status.text}
                  </p>

                </div>

              )}


              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >

                <span>
                  {loading
                    ? "Sending..."
                    : "Send message"}
                </span>

                <span className="contact-submit-arrow">
                  {loading ? "..." : "↗"}
                </span>

              </button>


              <p className="contact-form-note">
                By submitting this form, you agree
                to be contacted regarding your enquiry.
              </p>

            </form>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM CTA ================= */}

      <section className="contact-bottom">

        <div className="contact-bottom-grid"></div>

        <div className="contact-bottom-inner">

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <strong> worth talking about.</strong>
          </h2>

          <a
            href="mailto:rohanjantre123@gmail.com"
            className="contact-email-button"
          >
            <span>Email us directly</span>
            <span>↗</span>
          </a>

        </div>

        <div className="contact-bottom-circle"></div>

      </section>

    </main>
  );
};

export default Contact;