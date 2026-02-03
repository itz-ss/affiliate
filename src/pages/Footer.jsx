import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import LayerParallaxHero from "../parallax/LayerParallaxHero";
import ScrollParallax from "../parallax/ScrollParallax";
import VelocityParallax from "../parallax/VelocityParallax";
import CursorParallax from "../parallax/CursorParallax";

import "./style/Footer.css";

const WHATSAPP_NUMBER = "916388060502";
const TELEGRAM_USERNAME = "Rahulkushwaha_007"; // without @
const defaultViewport = { once: true, amount: 0.25 };

export default function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  const openTelegram = () => {
    const msg = encodeURIComponent(
      "Hello leksuss Network! I’d like to know more about your services."
    );
  
    window.open(
      `https://t.me/${TELEGRAM_USERNAME}?text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <LayerParallaxHero
      className="footer"
      height="auto"
      layers={[
        // base background (slowest)
        { src: "/assets/hero/nightsky.jpg", speed: 10, className: "footer__layer footer__layer--bg" },
      ]}
    >
      {/* ✅ overlay depth */}
      <div className="footer__overlay" aria-hidden="true" />

      {/* ✅ skyline + fog as parallax layers (same as HERO) */}
      <ScrollParallax speed={50}>
        <div className="footer__scene" aria-hidden="true">
          <img
            src="/assets/footer/skyline.png"
            alt=""
            className="footer__skyline"
            draggable={false}
          />
        </div>
      </ScrollParallax>

      {/* ✅ glow motion */}
      <VelocityParallax intensity={28}>
        <div className="footer__glow footer__glow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={20}>
        <div className="footer__glow footer__glow--b" aria-hidden="true" />
      </VelocityParallax>

      {/* ✅ content */}
      <div className="footer__wrap">
        {/* CTA */}
        <motion.div
          className="footerCta"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
        >
          <div className="footerCta__left">
            <div className="footerCta__kicker">READY TO SCALE?</div>
            <div className="footerCta__title">
              Let’s build your growth engine —{" "}
              <span className="footerCta__grad">strategy → execution → scaling.</span>
            </div>
            <div className="footerCta__sub">
              Fast response on WhatsApp. Serious performance systems for serious brands.
            </div>
          </div>

          <div className="footerCta__right">
            <button className="fBtn" onClick={openTelegram} type="button">
              Telegram Now →
            </button>
            <a className="fBtn fBtn--ghost" href="#contact">
              Contact Form
            </a>
          </div>
        </motion.div>

        {/* Main footer grid */}
        <motion.div
          className="footerMain"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="footerCol footerCol--brand">
            <CursorParallax intensity={16}>
              <div className="footerBrand">
                <div className="footerBrand__logo">
                  <span className="footerBrand__dot" />
                  LEKSUSS
                </div>

                <p className="footerBrand__desc">
                  Performance marketing systems that scale brands through affiliates, traffic,
                  conversion optimization, and attribution.
                </p>

                <div className="footerBrand__chips">
                  <span className="chip">Affiliate Programs</span>
                  <span className="chip">Paid Traffic</span>
                  <span className="chip">Tracking</span>
                </div>

                <div className="footerSocial">
                  <a className="social" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="social" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="social" href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </div>
              </div>
            </CursorParallax>
          </div>

          {/* Quick links */}
          <div className="footerCol">
            <div className="footerCol__title">Quick Links</div>
            <ul className="footerLinks">
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="#proof">Proof</a></li>
              <li><a href="#how">How We Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footerCol">
            <div className="footerCol__title">Services</div>
            <ul className="footerLinks">
              <li><a href="/services#affiliate-marketing">Affiliate Marketing</a></li>
              <li><a href="/services#paid-traffic-strategy">Paid Traffic Strategy</a></li>
              <li><a href="/services#conversion-optimization">Conversion Optimization</a></li>
              <li><a href="/services#analytics-tracking">Tracking & Attribution</a></li>
              <li><a href="/services#content-creation">Content Creation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footerCol footerCol--contact">
            <div className="footerCol__title">Contact</div>

            <div className="footerContact">
              {/* <div className="line">
                <span className="label">Email</span>
                <a href="mailto:contact@affillionnetwork.com">contact@affillionnetwork.com</a>
              </div> */}

              <div className="line">
                <span className="label">Telegram</span>
                <button className="linkBtn" type="button" onClick={openTelegram}>
                  Message us →
                </button>
              </div>

              <div className="line">
                <span className="label">Response</span>
                <span className="value">Within 24 hours</span>
              </div>

              <div className="footerContact__cta">
                <button className="fBtn" onClick={openTelegram} type="button">
                  Start on telegram→
                </button>
                <a className="fBtn fBtn--ghost" href="#contact">
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="footerBottom">
          <div className="footerBottom__left">
            © {year} Leksuss Network. All rights reserved.
          </div>
          <div className="footerBottom__right">
            <a href="/privacy">Privacy</a>
            <span className="sep">•</span>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </LayerParallaxHero>
  );
}
