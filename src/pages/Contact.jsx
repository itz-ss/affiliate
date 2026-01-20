import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import TiltParallaxCard from "../parallax/TiltParallaxCard";
import CursorParallax from "../parallax/CursorParallax";
import VelocityParallax from "../parallax/VelocityParallax";
import ScrollParallax from "../parallax/ScrollParallax";

import "./style/Contact.css";

const defaultViewport = { once: true, amount: 0.28 };

const fadeUpSpring = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 20, mass: 0.9 },
  },
};

const WHATSAPP_NUMBER = "916388060502"; // countrycode + number

export default function Contact() {
  const reduce = useReducedMotion();

  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "Affiliate Marketing",
    budget: "₹15k–₹50k",
    message: "",
  });

  const services = useMemo(
    () => [
      "Affiliate Marketing",
      "Paid Traffic Strategy",
      "Conversion Optimization",
      "Analytics & Tracking",
      "Content Creation",
    ],
    []
  );

  const budgets = useMemo(
    () => ["₹15k–₹50k", "₹50k–₹1L", "₹1L–₹3L", "₹3L+", "Not sure yet"],
    []
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Affillion Network,\n\nName: ${form.name || "-"}\nEmail: ${
        form.email || "-"
      }\nWhatsApp: ${form.whatsapp || "-"}\nService: ${
        form.service
      }\nBudget: ${form.budget}\n\nMessage:\n${form.message || "-"}`
    );
    window.open(`https://wa.me/${6388060502}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleMail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Hi Team,\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n`
    );

    // Replace email
    window.location.href = `mailto:rahulkushwaha2205@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact" aria-label="Contact">
      {/* background */}
      <div className="contact__bg" aria-hidden="true" />
      <div className="contact__grid" aria-hidden="true" />

      <VelocityParallax intensity={26}>
        <div className="contact__glow contact__glow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={14}>
        <div className="contact__glow contact__glow--b" aria-hidden="true" />
      </VelocityParallax>

      <div className="contact__wrap">
        {/* header */}
        <motion.div
          className="contact__head"
          variants={fadeUpSpring}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? {} : "show"}
          viewport={defaultViewport}
        >
          <p className="contact__kicker">CONTACT</p>

          <h2 className="contact__title">
            Let’s build something
            <span className="contact__grad"> unstoppable.</span>
          </h2>

          <p className="contact__sub">
            Tell us what you want to scale. We’ll respond with a clear growth plan and next steps.
          </p>
        </motion.div>

        <div className="contact__grid2">
          {/* LEFT: cinematic panel */}
          <motion.div
            className="contact__left"
            variants={fadeUpSpring}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? {} : "show"}
            viewport={defaultViewport}
          >
            <TiltParallaxCard className="contact__tilt">
              <div className="contactPanel">
                <CursorParallax intensity={20} className="contactPanel__media">
                  {/* background image (WITH BG) */}
                  <img
                    src="/contact/contact.png"
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className="contactPanel__bg"
                  />

                  {/* transparent globe png */}
                  <ScrollParallax speed={44}>
                    <img
                      src="/contact/globe.png"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="contactPanel__globe driftSlow"
                    />
                  </ScrollParallax>

                  {/* transparent skyline/fog */}
                  <ScrollParallax speed={28}>
                    <img
                      src="/assets/contact/skyline.png"
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      className="contactPanel__sky driftSlow2"
                    />
                  </ScrollParallax>

                  <div className="contactPanel__shade" aria-hidden="true" />
                  <div className="contactPanel__shine" aria-hidden="true" />
                </CursorParallax>

                <div className="contactPanel__content">
                  <div className="contactPanel__chip">
                    <span className="contactPanel__dot" />
                    FAST RESPONSE
                  </div>

                  <h3 className="contactPanel__title">
                    We reply within <span className="contactPanel__grad">24 hours</span>.
                  </h3>

                  <p className="contactPanel__desc">
                    Prefer WhatsApp? Get a faster response and share offer details instantly.
                  </p>

                  <div className="contactPanel__ctaRow">
                    <button type="button" className="cBtn" onClick={handleWhatsApp}>
                      WhatsApp Now →
                    </button>
                    <a className="cBtn cBtn--ghost" href="/services">
                      View Services
                    </a>
                  </div>

                  <div className="contactPanel__proof">
                    <div className="pill">Tracking & Attribution</div>
                    <div className="pill">Creative Testing</div>
                    <div className="pill">Scaling Systems</div>
                  </div>
                </div>
              </div>
            </TiltParallaxCard>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            className="contact__right"
            variants={fadeUpSpring}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? {} : "show"}
            viewport={defaultViewport}
          >
            <form className="contactForm" onSubmit={handleMail}>
              <div className="contactForm__top">
                <div className="contactForm__title">Send a message</div>
                <div className="contactForm__hint">Or use WhatsApp for quick replies.</div>
              </div>

              <div className="contactForm__grid">
                <label className="field">
                  <span>Full Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="field">
                  <span>Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    type="email"
                    required
                  />
                </label>

                <label className="field">
                  <span>WhatsApp</span>
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={onChange}
                    placeholder="+91 9xxxxxxxxx"
                  />
                </label>

                <label className="field">
                  <span>Service</span>
                  <select name="service" value={form.service} onChange={onChange}>
                    {services.map((s) => (
                      <option value={s} key={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field field--full">
                  <span>Budget</span>
                  <select name="budget" value={form.budget} onChange={onChange}>
                    {budgets.map((b) => (
                      <option value={b} key={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field field--full">
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us your offer, goal, GEO, traffic sources, and timeline..."
                    rows={5}
                    required
                  />
                </label>
              </div>

              <div className="contactForm__actions">
                <button className="cBtn" type="submit">
                  Send Email →
                </button>
                <button className="cBtn cBtn--ghost" type="button" onClick={handleWhatsApp}>
                  WhatsApp →
                </button>
              </div>

              <div className="contactForm__small">
                By messaging us you agree to be contacted back. No spam. No nonsense.
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
