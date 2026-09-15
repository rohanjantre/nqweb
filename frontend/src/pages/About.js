import React from "react";
import "./About.css";

const values = [
  {
    number: "01",
    icon: "✦",
    title: "Clarity over jargon",
    text: "We explain what we're building and why, in plain language, at every step.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Small team, direct access",
    text: "You talk to the people actually writing your code, not an account manager relaying messages.",
  },
  {
    number: "03",
    icon: "∞",
    title: "Built to last",
    text: "Clean, maintainable code so your site is easy to update long after launch.",
  },
];

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}
      <section className="about-hero">

        <div className="about-hero-grid"></div>

        <div className="about-glow about-glow-one"></div>
        <div className="about-glow about-glow-two"></div>

        <div className="about-hero-inner">

          <div className="about-hero-copy">

            <div className="about-eyebrow">
              <span className="about-eyebrow-dot"></span>

              <p>
                About NoviqWeb
              </p>
            </div>

            <h1>
              A studio built around one idea:
              <span> your website should earn its keep.</span>
            </h1>

            <p className="about-hero-sub">
              NoviqWeb started with a simple frustration — too many small
              business websites look nice but don't bring in a single enquiry.
              We build sites that are fast, clear, and designed to move a
              visitor toward getting in touch.
            </p>

            <div className="about-hero-meta">
              <div className="meta-line"></div>

              <p>
                Design <span>×</span> Development <span>×</span> Strategy
              </p>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div
            className="about-hero-visual"
            aria-hidden="true"
          >

            <div className="about-orbit about-orbit-one"></div>
            <div className="about-orbit about-orbit-two"></div>

            <div className="about-main-orb">

              <div className="orb-inner">

                <div className="orb-label">
                  NOVIQWEB
                </div>

                <div className="orb-center">
                  N
                </div>

                <div className="orb-bottom">
                  DIGITAL STUDIO
                </div>

              </div>

            </div>

            <div className="about-floating about-floating-one">
              <span>01</span>
              <p>Strategy first</p>
            </div>

            <div className="about-floating about-floating-two">
              <span>02</span>
              <p>Design with purpose</p>
            </div>

          </div>

        </div>

        <div className="about-scroll">
          <span></span>
          <p>Discover our approach</p>
        </div>

      </section>


      {/* =====================================================
          BELIEF SECTION
      ===================================================== */}
      <section className="section about-belief">

        <div className="about-container">

          <div className="belief-grid">

            {/* LEFT */}
            <div className="belief-heading">

              <span className="about-section-label">
                01 — OUR BELIEF
              </span>

              <h2>
                Your website is part of your
                <span> sales team.</span>
              </h2>

            </div>


            {/* RIGHT */}
            <div className="belief-copy">

              <p className="belief-large">
                A website isn't a brochure — it's the first conversation a
                client has with your business.
              </p>

              <p>
                We treat every page as part of that conversation: what a
                visitor needs to know, in what order, and what they should do
                next.
              </p>

              <p>
                That's why every project starts with your goals and your
                customers, not a template. Design and code decisions follow
                from there.
              </p>

              <div className="belief-signature">
                <div className="signature-line"></div>
                <span>Built with intention.</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="section principles-section">

        <div className="about-container">

          <div className="principles-head">

            <div>
              <span className="about-section-label">
                02 — HOW WE WORK
              </span>

              <h2>
                Simple principles.
                <span> Better work.</span>
              </h2>
            </div>

            <p>
              The principles behind every project we take on — from the first
              conversation to the final deployment.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (

              <article
                className="value-card"
                key={value.title}
                style={{
                  "--card-delay": `${index * 0.15}s`,
                }}
              >

                <div className="value-card-top">

                  <span className="value-number">
                    {value.number}
                  </span>

                  <span className="value-icon">
                    {value.icon}
                  </span>

                </div>

                <div className="value-card-content">

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.text}
                  </p>

                </div>

                <div className="value-card-bottom">

                  <span className="value-line"></span>

                  <span className="value-arrow">
                    ↗
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS STRIP
      ===================================================== */}
      <section className="about-process">

        <div className="about-container">

          <div className="process-inner">

            <div className="process-number">
              03
            </div>

            <div className="process-content">

              <span>
                THE NOVIQWEB APPROACH
              </span>

              <h2>
                Less noise.
                <br />
                More meaningful work.
              </h2>

            </div>

            <div className="process-description">

              <p>
                We keep our process intentionally small. Fewer meetings,
                clearer communication, and more time spent actually building
                something useful.
              </p>

              <div className="process-tags">
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
          FINAL CTA
      ===================================================== */}
      <section className="section about-final-cta">

        <div className="about-container">

          <div className="final-cta-box">

            <div className="final-cta-glow"></div>

            <div className="final-cta-content">

              <span className="about-section-label">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have a website
                <span> worth building?</span>
              </h2>

              <p>
                Tell us what you're working on. We'll help turn the idea into
                something clear, fast, and built to perform.
              </p>

              <a
                href="/contact"
                className="about-cta-button"
              >
                <span>Start your project</span>
                <span>↗</span>
              </a>

            </div>

            <div className="final-cta-decoration">

              <div className="final-ring final-ring-one"></div>
              <div className="final-ring final-ring-two"></div>

              <div className="final-dot"></div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;