import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./style/Navbar.css";

const WHATSAPP_NUMBER = "916388060502";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "How", to: "/#how" },
  { label: "Proof", to: "/#proof" },
  { label: "Contact", to: "/#contact" },
];

function cx(...v) {
  return v.filter(Boolean).join(" ");
}

export default function Navbar() {
  const reduce = useReducedMotion();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);

  // ✅ Smoothly change navbar background after scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsSolid(y > 30);

      // hide on scroll down, show on scroll up
      if (y > lastY.current && y > 130) setHidden(true);
      else setHidden(false);

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const active = useMemo(() => {
    // exact routes
    if (location.pathname === "/") return "Home";
    return "";
  }, [location.pathname]);

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello Affillion Network! I’d like to know more about your services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  const handleNavClick = (to) => {
    setOpen(false);

    // If anchor link on home
    if (to.startsWith("/#")) {
      const id = to.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        className={cx("nav", isSolid && "nav--solid", hidden && "nav--hidden")}
        initial={reduce ? false : { y: -40, opacity: 0 }}
        animate={reduce ? {} : { y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="nav__wrap">
          {/* Brand */}
          <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
            <span className="nav__dot" aria-hidden="true" />
            <span className="nav__brandText"> leksuss </span>
          </Link>

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Main navigation">
            {NAV.map((item) => {
              const isActive =
                item.label === active ||
                (item.to.startsWith("/#") && location.pathname === "/");

              const isAnchor = item.to.startsWith("/#");

              return (
                <Link
                  key={item.label}
                  to={isAnchor ? "/" : item.to}
                  className={cx("nav__link", isActive && "isActive")}
                  onClick={(e) => {
                    if (isAnchor) {
                      e.preventDefault();
                      handleNavClick(item.to);
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="nav__right">
            <button className="nav__cta desk" type="button" onClick={openWhatsApp}>
              WhatsApp
              <span className="nav__ctaArrow" aria-hidden="true">
                →
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className={cx("nav__burger", open && "isOpen")}
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* subtle gradient bottom line */}
        <div className="nav__line" aria-hidden="true" />
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        className={cx("navM", open && "navM--open")}
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(false)}
      >
        <motion.aside
          className="navM__panel"
          initial={false}
          animate={open ? { x: 0 } : { x: 420 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="navM__top">
            <div className="navM__title">Menu</div>
            <button className="navM__close" type="button" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>

          <div className="navM__links">
            {NAV.map((item) => {
              const isAnchor = item.to.startsWith("/#");
              return (
                <Link
                  key={item.label}
                  to={isAnchor ? "/" : item.to}
                  className="navM__link"
                  onClick={(e) => {
                    if (isAnchor) {
                      e.preventDefault();
                      handleNavClick(item.to);
                    } else setOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                  <span className="navM__arr">→</span>
                </Link>
              );
            })}
          </div>

          <div className="navM__cta">
            <button className="nav__cta nav__cta--big" type="button" onClick={openWhatsApp}>
              Start on WhatsApp →
            </button>
            <p className="navM__note">
              We reply fast. Share your offer, budget, GEO and traffic source.
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
}
