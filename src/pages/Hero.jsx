"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/Hero.css";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const PARALLAX_END = 0.15; // 15% scroll window
const MOVE = 40;          // max 10px


  // Depth transforms (GPU-friendly)
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  
  const moonY = useTransform(
  scrollYProgress,
  [0, PARALLAX_END],
  [0, MOVE],
  { clamp: true }
);

const farCloudsY  = useTransform(
  scrollYProgress,
  [0, PARALLAX_END],
  [0, MOVE * 0.6],
  { clamp: true }
);
  
const midCloudsY = useTransform(
  scrollYProgress,
  [0, PARALLAX_END],
  [0, MOVE * 0.8],
  { clamp: true }
);

const frontCloudsY = useTransform(
  scrollYProgress,
  [0, PARALLAX_END],
  [0, MOVE],
  { clamp: true }
);
  
  const fogY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  const contentY = useTransform(
  scrollYProgress,
  [0, PARALLAX_END],
  [0, MOVE * 0.9],
  { clamp: true }
);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="hero">
      {/* Background */}
      <img className="hero__bg" src="/assets/hero/nightsky.jpg" alt="" />

      {/* Stars */}
      <motion.div style={{ y: starsY }} className="hero__stars" />

      {/* Moon */}
      <motion.div style={{ y: moonY }} className="hero__moonWrap">
        <div className="hero__moonGlow" />
        <img src="/assets/hero/moon2.png" alt="moon" />
        <div className="hero__moonHaze" />
      </motion.div>

      {/* Clouds */}
      <motion.div style={{ y: farCloudsY }} className="cloudLayer far" />
      <motion.div style={{ y: midCloudsY }} className="cloudLayer mid" />
      <motion.div style={{ y: frontCloudsY }} className="cloudLayer front" />

      {/* Fog */}
      <motion.div style={{ y: fogY }} className="hero__fog" />

      {/* Content */}
      <motion.div
        style={{ y: contentY, scale: contentScale }}
        className="hero__content"
      >
        <div className="hero__kicker">
          LEKSUSS NETWORK • PERFORMANCE AFFILIATE ENGINE
        </div>

        <h1 className="hero__title">
          TURN TRAFFIC INTO
          <br />
          <span className="grad">UNSTOPPABLE INCOME</span>
        </h1>

        <p className="hero__sub">
          A premium ecosystem built for affiliates who want scale, clarity, and domination.
        </p>

        <div className="hero__ctaRow">
          <a className="hero__btn" href="#contact">JOIN THE NETWORK →</a>
          <a className="hero__btnSecondary" href="#services">Explore Programs</a>
        </div>
      </motion.div>
    </section>
  );
}
