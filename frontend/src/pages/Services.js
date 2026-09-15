import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "✦",
    title: "Website Design",
    text: "Custom layouts designed around your brand and your customers, not a generic template.",
    points: ["UI/UX design", "Brand-matched visuals", "Mobile-first layouts"],
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    text: "Fast, reliable websites built with modern tools like the MERN stack (MongoDB, Express, React, Node.js).",
    points: [
      "Custom frontend & backend",
      "Database-driven features",
      "API integrations",
    ],
  },
  {
    number: "03",
    icon: "◈",
    title: "E-Commerce",
    text: "Online stores that make it easy for customers to browse, buy, and come back.",
    points: [
      "Product catalogs",
      "Secure checkout",
      "Order & inventory tracking",
    ],
  },
  {
    number: "04",
    icon: "↗",
    title: "SEO & Performance",
    text: "Sites tuned to load quickly and rank well, so the traffic you earn actually finds you.",
    points: [
      "Page speed optimization",
      "On-page SEO",
      "Analytics setup",
    ],
  },
  {
    number: "05",
    icon: "∞",
    title: "Maintenance & Support",
    text: "Ongoing updates, monitoring, and fixes so your site keeps running smoothly after launch.",
    points: [
      "Security updates",
      "Content updates",
      "Uptime monitoring",
    ],
  },
  {
    number: "06",
    icon: "△",
    title: "Hosting & Deployment",
    text: "We handle setup and deployment so your site is fast, secure, and easy to manage.",
    points: [
      "Domain & hosting setup",
      "SSL & security",
      "CI/CD deployment",
    ],
  },
];

const Services = () => {
  return (
    <main className="services-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="services-hero">

        <div className="services-grid-bg"></div>

        <div className="services-glow services-glow-one"></div>
        <div className="services-glow services-glow-two"></div>

        <div className="services-hero-inner">

          <div className="services-hero-copy">

            <div className="services-eyebrow">
              <span className="services-eyebrow-dot"></span>

              <p>What we do</p>
            </div>

            <h1>
              Everything you need to
              <span> launch and grow online.</span>
            </h1>

            <p className="services-hero-sub">
              From first sketch to a live, working website — and the support
              to keep it running after that.
            </p>

            <div className="services-hero-actions">

              <Link
                to="/contact"
                className="services-btn services-btn-primary"
              >
                <span>Start your project</span>
                <span>↗</span>
              </Link>

              <a
                href="#services"
                className="services-btn services-btn-ghost"
              >
                Explore services
                <span>↓</span>
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div
            className="services-hero-visual"
            aria-hidden="true"
          >

            <div className="services-orbit services-orbit-one"></div>
            <div className="services-orbit services-orbit-two"></div>

            <div className="services-core">

              <div className="services-core-inner">

                <div className="core-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="core-symbol">
                  N
                </div>

                <div className="core-text">
                  DIGITAL
                  <br />
                  EXPERIENCE
                </div>

              </div>

            </div>


            <div className="service-floating-card service-floating-one">

              <span className="service-floating-icon">
                ⚡
              </span>

              <div>
                <strong>Fast</strong>
                <small>Performance</small>
              </div>

            </div>


            <div className="service-floating-card service-floating-two">

              <span className="service-floating-icon">
                ↗
              </span>

              <div>
                <strong>Built to grow</strong>
                <small>Scalable systems</small>
              </div>

            </div>

          </div>

        </div>

        <div className="services-scroll">
          <span></span>
          <p>Scroll to explore</p>
        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="services-list-section"
        id="services"
      >

        <div className="services-container">

          <div className="services-section-head">

            <div>

              <span className="services-section-label">
                01 — SERVICES
              </span>

              <h2>
                From idea to
                <span> online.</span>
              </h2>

            </div>

            <p>
              Everything your business needs to create a strong digital
              presence — designed, developed, and maintained under one roof.
            </p>

          </div>


          <div className="services-list-grid">

            {services.map((service, index) => (

              <article
                className="premium-service-card"
                key={service.title}
                style={{
                  "--service-delay": `${index * 0.1}s`,
                }}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    {service.icon}
                  </span>

                </div>


                <div className="service-card-body">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <ul>

                    {service.points.map((point) => (

                      <li key={point}>

                        <span className="point-check">
                          ✓
                        </span>

                        <span>
                          {point}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>


                <div className="service-card-footer">

                  <span className="service-footer-line"></span>

                  <span className="service-footer-arrow">
                    ↗
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="services-process">

        <div className="services-container">

          <div className="services-process-inner">

            <div className="process-label">
              02
            </div>

            <div className="process-title">

              <span>
                HOW IT COMES TOGETHER
              </span>

              <h2>
                One clear process.
                <br />
                No unnecessary complexity.
              </h2>

            </div>

            <div className="process-description">

              <p>
                We keep projects focused, transparent, and easy to understand.
                You always know what's happening and what's coming next.
              </p>

              <div className="process-steps">

                <span>Discover</span>
                <span>Design</span>
                <span>Build</span>
                <span>Launch</span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="services-cta-section">

        <div className="services-container">

          <div className="services-cta">

            <div className="services-cta-glow"></div>

            <div className="services-cta-content">

              <span className="services-section-label">
                NOT SURE WHAT YOU NEED?
              </span>

              <h2>
                Let's figure it
                <span> out together.</span>
              </h2>

              <p>
                Tell us about your business, your goals, and where you're
                stuck. We'll suggest the right fit without the sales pitch.
              </p>

              <Link
                to="/contact"
                className="services-cta-button"
              >
                <span>Talk to us</span>
                <span>↗</span>
              </Link>

            </div>


            <div className="services-cta-decoration">

              <div className="cta-circle cta-circle-one"></div>
              <div className="cta-circle cta-circle-two"></div>
              <div className="cta-circle cta-circle-three"></div>

              <div className="cta-center"></div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Services;