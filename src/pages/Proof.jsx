import React from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";

import VelocityParallax from "../parallax/VelocityParallax";
import ScrollParallax from "../parallax/ScrollParallax";
import TiltParallaxCard from "../parallax/TiltParallaxCard";

import "./style/Proof.css";

/**
 * Stat counter starts ONLY when it comes into view.
 */
function Stat({ value, suffix = "", label, icon, delay = 0 }) {
  const reduce = useReducedMotion();

  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.55, once: true }); // 55% visible triggers
  const startedRef = React.useRef(false);

  const count = useMotionValue(0);
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    if (startedRef.current) return;

    startedRef.current = true;

    // reduced motion: set instantly
    if (reduce) {
      count.set(value);
      setDisplay(value);
      return;
    }

    const controls = animate(count, value, {
      duration: 1.4,
      ease: "easeOut",
      delay,
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value, delay, reduce, count]);

  return (
    <TiltParallaxCard className="proofCardTilt">
      <motion.div
        ref={ref}
        className="proofCard"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="proofCard__top">
          <div className="proofCard__icon" aria-hidden="true">
            {icon}
          </div>
          <div className="proofCard__label">{label}</div>
        </div>

        <div className="proofCard__num">
          {display.toLocaleString()}
          <span className="proofCard__suffix">{suffix}</span>
        </div>

        <div className="proofCard__shine" aria-hidden="true" />
      </motion.div>
    </TiltParallaxCard>
  );
}

export default function Proof() {
  const reduce = useReducedMotion();

  const stats = [
    { value: 1200, suffix: "+", label: "Partners Activated", icon: "🤝" },
    { value: 47, suffix: "+", label: "Countries / GEOs", icon: "🌍" },
    { value: 98, suffix: "%", label: "Tracking Accuracy", icon: "📡" },
    { value: 24, suffix: "/7", label: "Support & Optimization", icon: "⚡" },
  ];

  return (
    <section className="proof" id="proof" aria-label="Proof">
      {/* Ambient background */}
      <div className="proof__bg" aria-hidden="true" />
      <div className="proof__grid" aria-hidden="true" />

      {/* parallax glow */}
      <VelocityParallax intensity={30}>
        <div className="proof__glow proof__glow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={18}>
        <div className="proof__glow proof__glow--b" aria-hidden="true" />
      </VelocityParallax>

      {/* floating particles */}
      <ScrollParallax speed={30}>
        <div className="proof__particles" aria-hidden="true">
          <span className="p p1" />
          <span className="p p2" />
          <span className="p p3" />
          <span className="p p4" />
          <span className="p p5" />
          <span className="p p6" />
        </div>
      </ScrollParallax>

      <div className="proof__wrap">
        {/* heading */}
        <motion.div
          className="proof__head"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="proof__kicker">PROOF</p>

          <h2 className="proof__title">
            Built for performance.{" "}
            <span className="proof__grad">Validated by data.</span>
          </h2>

          <p className="proof__sub">
            We scale what works, measure everything, and optimize continuously — performance is not
            a guess, it’s a system.
          </p>
        </motion.div>

        {/* stats cards */}
        <div className="proof__cards">
          {stats.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              icon={s.icon}
              delay={reduce ? 0 : i * 0.08}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="proof__cta"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="proof__ctaLeft">
            <div className="proof__ctaTitle">Want results like this?</div>
            <div className="proof__ctaSub">
              Let’s map your traffic, offers, and conversion path — then scale it.
            </div>
          </div>

          <div className="proof__ctaRight">
            <a className="proofBtn" href="#contact">
              Get a Growth Plan →
            </a>
            <a className="proofBtn proofBtn--ghost" href="/services">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
