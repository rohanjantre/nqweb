import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="premium-navbar">
      <div className="navbar-inner">

        {/* ================= LOGO ================= */}

        <NavLink
          to="/"
          className="premium-brand"
          onClick={() => setOpen(false)}
        >
          <span className="premium-brand-mark">
            <span>N</span>
          </span>

          <span className="premium-brand-name">
            Noviq
            <span>Web</span>
          </span>
        </NavLink>


        {/* ================= MOBILE BUTTON ================= */}

        <button
          className={`premium-nav-toggle ${open ? "is-open" : ""
            }`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() =>
            setOpen((prev) => !prev)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* ================= NAVIGATION ================= */}

        <nav
          className={`premium-nav-links ${open ? "is-open" : ""
            }`}
        >

          <div className="nav-menu">

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}

          </div>


          {/* ================= CTA ================= */}

          <NavLink
            to="/contact"
            className="premium-nav-cta"
            onClick={() => setOpen(false)}
          >
            <span>Start a project</span>

            <span className="premium-nav-arrow">
              ↗
            </span>
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;