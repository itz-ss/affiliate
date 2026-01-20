import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import ScrollParallax from "../parallax/ScrollParallax";
import VelocityParallax from "../parallax/VelocityParallax";
import TiltParallaxCard from "../parallax/TiltParallaxCard";

import "./style/Features.css";

const defaultViewport = { once: true, amount: 0.25 };

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

const FEATURES = [
  {
    title: "DATING OFFERS",
    tags: "Casual • SOI/DOI • PPS",
    metrics: "Revenue: $80k/day",
    link: "/services",
    img: "/assets/features/dating.png",
    side: "right",
    icon: "/icons/dating.png",
  },
  {
    title: "IGAMING OFFERS",
    tags: "Casino • Poker • CPL",
    metrics: "Revenue: $120k/day",
    link: "/services",
    img: "/assets/features/igaming.png",
    side: "left",
    icon: "/icons/igaming.png",
  },
  {
    title: "FINANCE OFFERS",
    tags: "Loans • Crypto • CPL",
    metrics: "Revenue: $65k/day",
    link: "/services",
    img: "/assets/features/finance.png",
    side: "right",
    icon: "/icons/finance.png",
  },
  {
    title: "NUTRA OFFERS",
    tags: "Skincare • Keto • COD",
    metrics: "Revenue: $40k/day",
    link: "/services",
    img: "/assets/features/nutra.png",
    side: "left",
    icon: "/icons/nutra.png",
  },
];

function MiniIcon({ src }) {
  if (!src) return null;
  return (
    <span className="featCard__iconWrap" aria-hidden="true">
      <img className="featCard__icon" src={src} alt="" draggable={false} />
    </span>
  );
}

export default function  Features() {
  const reduce = useReducedMotion();

  return (
    <section className="features" aria-label="Features">
      {/* Background layer */}
      <div className="features__bg" aria-hidden="true" />
      <div className="features__grid" aria-hidden="true" />

      <VelocityParallax intensity={18}>
        <div className="features__glow features__glow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={12}>
        <div className="features__glow features__glow--b" aria-hidden="true" />
      </VelocityParallax>

      <div className="features__wrap">
        {/* Heading */}
        <motion.div
          className="features__head"
          variants={fadeUp}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? {} : "show"}
          viewport={defaultViewport}
        >
          <p className="features__kicker">FEATURES</p>
          <h2 className="features__title">
            We scale offers that print money.
            <span className="features__grad"> Across top verticals.</span>
          </h2>
          <p className="features__sub">
            Our network performs across multiple high-earning categories with tracking, creatives,
            funnel testing and controlled scaling.
          </p>
        </motion.div>

        {/* Items */}
        <div className="features__list">
          {FEATURES.map((item, i) => {
            const right = item.side === "right";

            return (
              <motion.article
                key={item.title}
                className="featRow"
                variants={fadeUp}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? {} : "show"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.02 }}
              >
                {/* IMAGE */}
                <ScrollParallax speed={right ? 26 : 18}>
                  <div className="featMedia">
                    <img
                      className="featMedia__img"
                      src={item.img}
                      alt={item.title}
                      draggable={false}
                      loading="lazy"
                    />
                    <div className="featMedia__shade" aria-hidden="true" />
                    <div className="featMedia__rim" aria-hidden="true" />
                  </div>
                </ScrollParallax>

                {/* CARD */}
                <div className={right ? "featCardAnchor featCardAnchor--right" : "featCardAnchor featCardAnchor--left"}>
                  <TiltParallaxCard className="featCardTilt">
                    <div className="featCard">
                      <MiniIcon src={item.icon} />

                      <div className="featCard__title">{item.title}</div>

                      <div className="featCard__meta">
                        <div className="featCard__line">
                          <span className="featCard__label">Type</span>
                          <span className="featCard__value">{item.tags}</span>
                        </div>

                        <div className="featCard__line">
                          <span className="featCard__label">Scale</span>
                          <span className="featCard__value">{item.metrics}</span>
                        </div>
                      </div>

                      <a className="featCard__link" href={item.link}>
                        Read More →
                      </a>
                    </div>
                  </TiltParallaxCard>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
