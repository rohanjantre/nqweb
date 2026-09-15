import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const stats = [
  {
    value: "60+",
    label: "Websites shipped",
  },
  {
    value: "4 wks",
    label: "Average delivery",
  },
  {
    value: "98%",
    label: "Clients who return",
  },
];

const highlights = [
  {
    number: "01",
    title: "Built for speed",
    text: "Every site is optimized from day one so pages load fast and rank well.",
  },
  {
    number: "02",
    title: "Designed to convert",
    text: "Layouts and copy are structured around one goal: turning visitors into enquiries.",
  },
  {
    number: "03",
    title: "You're never left guessing",
    text: "Weekly check-ins and a clear timeline, from kickoff to launch.",
  },
];

const Home = () => {
  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero">
        {/* Background elements */}
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-inner">

          {/* LEFT CONTENT */}
          <div className="hero-copy">

            <div className="eyebrow-wrapper">
              <span className="eyebrow-dot"></span>

              <p className="eyebrow-plain">
                Web design & development studio
              </p>
            </div>

            <h1 className="hero-title">
              Websites that
              <span className="gradient-text"> work as hard </span>
              as you do.
            </h1>

            <p className="hero-sub">
              NoviqWeb designs, builds, and maintains websites for businesses
              that want to look sharp online and generate real enquiries —
              not just traffic.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Start your project</span>
                <span className="btn-arrow">↗</span>
              </Link>

              <Link to="/services" className="btn btn-ghost">
                <span>See what we do</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>R</span>
                <span>A</span>
                <span>M</span>
                <span>+</span>
              </div>

              <div className="trust-text">
                <div className="stars">★★★★★</div>
                <p>Trusted by growing businesses</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="hero-visual" aria-hidden="true">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="hero-shape hero-shape-dark">
              <div className="shape-content">
                <div className="shape-top">
                  <span className="shape-dot"></span>
                  <span className="shape-dot"></span>
                  <span className="shape-dot"></span>
                </div>

                <div className="shape-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="shape-circle">
                  <div className="circle-inner"></div>
                </div>
              </div>
            </div>

            <div className="hero-shape hero-shape-blue">
              <div className="blue-inner"></div>
            </div>

            <div className="floating-card floating-card-one">
              <span className="floating-icon">⚡</span>
              <div>
                <strong>Fast</strong>
                <small>Performance</small>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span className="floating-icon">↗</span>
              <div>
                <strong>+42%</strong>
                <small>Conversions</small>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
          <p>Scroll to explore</p>
        </div>

        <div className="hero-divider"></div>
      </section>


      {/* ================= STATS ================= */}
      <section className="section stats-section">

        <div className="section-container">

          <div className="stats-grid">

            {stats.map((s, index) => (
              <div
                className="stat"
                key={s.label}
                style={{
                  "--delay": `${index * 0.15}s`,
                }}
              >
                <span className="stat-value">
                  {s.value}
                </span>

                <span className="stat-label">
                  {s.label}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= HIGHLIGHTS ================= */}
      <section className="section highlights-section">

        <div className="section-container">

          <div className="section-head">

            <div>
              <span className="section-eyebrow">
                WHY NOVIQWEB
              </span>

              <h2>
                Digital experiences
                <span> built with purpose.</span>
              </h2>
            </div>

            <p>
              A small studio, a direct line to the people building your site.
              No unnecessary layers. No complicated process.
            </p>

          </div>


          <div className="highlight-grid">

            {highlights.map((h, index) => (

              <div
                className="highlight-card"
                key={h.title}
                style={{
                  "--delay": `${index * 0.12}s`,
                }}
              >

                <div className="card-number">
                  {h.number}
                </div>

                <div className="card-icon">
                  {index === 0 && "⚡"}
                  {index === 1 && "✦"}
                  {index === 2 && "↗"}
                </div>

                <h3>
                  {h.title}
                </h3>

                <p>
                  {h.text}
                </p>

                <div className="card-line"></div>

                <span className="card-arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="section cta-section">

        <div className="cta-background">
          <div className="cta-glow"></div>
          <div className="cta-grid"></div>
        </div>

        <div className="cta-band">

          <div className="cta-content">

            <span className="section-eyebrow">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's build something
              <span> worth visiting.</span>
            </h2>

            <p>
              Tell us about your project and we'll come back to you with
              practical next steps.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary btn-large"
            >
              <span>Start a conversation</span>
              <span className="btn-arrow">↗</span>
            </Link>

          </div>

          <div className="cta-decoration">

            <div className="cta-ring ring-one"></div>
            <div className="cta-ring ring-two"></div>
            <div className="cta-ring ring-three"></div>

            <div className="cta-orb"></div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;