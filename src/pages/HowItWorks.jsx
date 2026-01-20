import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import TiltParallaxCard from "../parallax/TiltParallaxCard";
import CursorParallax from "../parallax/CursorParallax";
import VelocityParallax from "../parallax/VelocityParallax";
import ScrollParallax from "../parallax/ScrollParallax";

import "./style/HowItWorks.css";

const defaultViewport = { once: true, amount: 0.35 };

const cardIn = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 22, mass: 0.9 },
  },
};

export default function HowWeWork() {
  const reduce = useReducedMotion();

  // ✅ Replace these with your own images
  // These should be WITH BACKGROUND (cinematic)
  const steps = [
    {
      step: "01",
      title: "Strategy & Funnel Architecture",
      desc:
        "We audit your offer, build a clean funnel blueprint, define traffic angles, and map tracking events so scaling is predictable.",
      bg: "/services/slide1.png",
      overlay: "/assets/how/overlay1.png", // transparent png
    },
    {
      step: "02",
      title: "Launch, Testing & Optimization",
      desc:
        "We launch campaigns, test creatives fast, optimize targeting, and improve conversion rate until we find repeatable winners.",
      bg: "/services/slide2.png",
      overlay: "/assets/how/overlay2.png",
    },
    {
      step: "03",
      title: "Scaling with Attribution",
      desc:
        "We scale budgets and channels with controlled rules, maintain tracking accuracy, and build momentum without breaking profitability.",
      bg: "/services/slide3.png",
      overlay: "/assets/how/overlay1.png",
    },
  ];

  return (
    <section className="hww" id="how" aria-label="How we work">
      {/* Background */}
      <div className="hww__bg" aria-hidden="true" />
      <div className="hww__grid" aria-hidden="true" />

      {/* Cinematic glows */}
      <VelocityParallax intensity={24}>
        <div className="hww__glow hww__glow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={14}>
        <div className="hww__glow hww__glow--b" aria-hidden="true" />
      </VelocityParallax>

      <div className="hww__wrap">
        {/* Header */}
        <motion.div
          className="hww__head"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
        >
          <p className="hww__kicker">HOW WE WORK</p>
          <h2 className="hww__title">
            A cinematic process.
            <span className="hww__grad"> Built for outcomes.</span>
          </h2>
          <p className="hww__sub">
            Our workflow is designed like a growth engine: strategy → execution → scaling.
            Each stage compounds performance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="hww__stack">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              variants={cardIn}
              initial={reduce ? false : "hidden"}
              whileInView={reduce ? {} : "show"}
              viewport={defaultViewport}
              className="hww__item"
              style={{ "--i": idx }}
            >
              <TiltParallaxCard className="hwwCardTilt">
                <article className="hwwCard">
                  {/* Background media */}
                  <div className="hwwCard__media">
                    <CursorParallax intensity={22} className="hwwCard__mediaInner">
                      <motion.img
                        src={s.bg}
                        alt=""
                        className="hwwCard__bg"
                        draggable={false}
                        initial={reduce ? {} : { scale: 1.06 }}
                        whileHover={reduce ? {} : { scale: 1.1 }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 18,
                        }}
                      />
                    </CursorParallax>

                    {/* floating overlay PNG */}
                    <ScrollParallax speed={18 + idx * 8}>
                      <img
                        src={s.overlay}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        className="hwwCard__overlay driftSlow"
                      />
                    </ScrollParallax>

                    <div className="hwwCard__shade" aria-hidden="true" />
                    <div className="hwwCard__shine" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="hwwCard__content">
                    <div className="hwwCard__top">
                      <div className="hwwChip">
                        <span className="hwwChip__dot" />
                        STEP {s.step}
                      </div>

                      <div className="hwwMini">
                        <span className="hwwMini__pill">Growth System</span>
                        <span className="hwwMini__pill">Performance</span>
                      </div>
                    </div>

                    <h3 className="hwwCard__title">{s.title}</h3>
                    <p className="hwwCard__desc">{s.desc}</p>

                    <div className="hwwCard__ctaRow">
                      <a className="hwwBtn" href="/services">
                        Explore Services →
                      </a>
                      <a className="hwwBtn hwwBtn--ghost" href="#contact">
                        Talk to Us
                      </a>
                    </div>
                  </div>
                </article>
              </TiltParallaxCard>
            </motion.div>
          ))}
        </div>

        {/* End strip */}
        <motion.div
          className="hwwEnd"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
        >
          <div className="hwwEnd__left">
            <div className="hwwEnd__title">Ready to build your growth engine?</div>
            <div className="hwwEnd__sub">We’ll map your funnel and scale it with precision.</div>
          </div>

          <div className="hwwEnd__right">
            <a className="hwwBtn" href="#contact">Start Now →</a>
            <a className="hwwBtn hwwBtn--ghost" href="/services">See Services</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
