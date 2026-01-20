import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import ScrollParallax from "../../parallax/ScrollParallax";
import ZoomParallax from "../../parallax/ZoomParallax";
import VelocityParallax from "../../parallax/VelocityParallax";
import CursorParallax from "../../parallax/CursorParallax";
import TiltParallaxCard from "../../parallax/TiltParallaxCard";

import servicesData from "../../data/services.json";
import "./style/Services.css";

function trimTo30(text = "") {
  const cleaned = String(text).replace(/\s+/g, " ").trim();
  if (cleaned.length <= 30) return cleaned;
  return cleaned.slice(0, 30).trimEnd() + "...";
}

export default function Services() {
  const reduce = useReducedMotion();
  const navigate = useNavigate();

  const services = servicesData?.services ?? [];

  return (
    <section className="services" id="services" aria-label="Services">
      {/* Background accents */}
      <div className="services__bg" aria-hidden="true" />

      <VelocityParallax intensity={36}>
        <div className="services__bgGlow services__bgGlow--a" aria-hidden="true" />
      </VelocityParallax>

      <VelocityParallax intensity={22}>
        <div className="services__bgGlow services__bgGlow--b" aria-hidden="true" />
      </VelocityParallax>

      <div className="services__wrap">
        {/* Header */}
        <motion.div
          className="services__head"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="services__kicker">SERVICES</p>

          <ZoomParallax from={1.04} to={1} className="services__titleWrap">
            <h2 className="services__title">
              Powerful Systems for{" "}
              <span className="services__grad">Real Performance</span>
            </h2>
          </ZoomParallax>

          <p className="services__sub">
            Explore our growth services designed to scale revenue, optimize conversions,
            and build unstoppable marketing engines.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="services__grid">
          {services.map((svc, idx) => (
            <ScrollParallax key={svc.slug} speed={18 + idx * 2}>
              {/* 3D Tilt Wrapper */}
              <TiltParallaxCard className="svcTilt">
                <motion.article
                  className="svcCard"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: idx * 0.04 }}
                >
                  {/* Media */}
                  <div className="svcCard__media" aria-hidden="true">
                    <CursorParallax intensity={20} className="svcCard__mediaInner">
                      <motion.img
                        className="svcCard__img"
                        src={svc.image}
                        alt=""
                        draggable={false}
                        initial={reduce ? {} : { y: 10, scale: 1.05 }}
                        animate={reduce ? {} : { y: [10, -12, 10] }}
                        transition={
                          reduce
                            ? {}
                            : { duration: 6 + idx * 0.3, ease: "easeInOut", repeat: Infinity }
                        }
                      />
                    </CursorParallax>

                    <div className="svcCard__mediaGlow" aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <h3 className="svcCard__title">{svc.title}</h3>
                  <p className="svcCard__desc">{trimTo30(svc.description)}</p>

                  {/* CTA */}
                  <button
                    className="svcCard__btn"
                    type="button"
                    onClick={() => navigate(`/service/${svc.slug}`)}
                  >
                    Know More <span className="svcCard__btnArrow">→</span>
                  </button>

                  {/* effects */}
                  <div className="svcCard__spotlight" aria-hidden="true" />
                  <div className="svcCard__shine" aria-hidden="true" />
                </motion.article>
              </TiltParallaxCard>
            </ScrollParallax>
          ))}
        </div>
      </div>
    </section>
  );
}
