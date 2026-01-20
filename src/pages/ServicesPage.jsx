import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import StickyRevealHero from "../parallax/StickyRevealHero";
import TiltParallaxCard from "../parallax/TiltParallaxCard";
import CursorParallax from "../parallax/CursorParallax";
import VelocityParallax from "../parallax/VelocityParallax";
import ScrollParallax from "../parallax/ScrollParallax";

import ScrollProgress from "../parallax/ScrollProgress";

import servicesData from "../data/services.json";
import "./style/ServicesPage.css";

function trimTo90(text = "") {
  const cleaned = String(text).replace(/\s+/g, " ").trim();
  if (cleaned.length <= 90) return cleaned;
  return cleaned.slice(0, 90).trimEnd() + "...";
}

export default function ServicesPage() {
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const services = useMemo(() => servicesData?.services ?? [], []);

  const slides = [
    {
      img: "/services/slide1.png",
      title: "Performance Systems Built to Scale",
      desc: "Everything is engineered for clean growth: offers, partnerships, tracking, conversion.",
    },
    {
      img: "/services/slide2.png",
      title: "Execution with Real Strategy",
      desc: "Paid traffic + funnel intelligence + testing frameworks that push ROI higher.",
    },
    {
      img: "/services/slide3.png",
      title: "Data-Driven Scaling",
      desc: "We scale winners. Cut waste. Compound results into predictable revenue.",
    },
  ];

  return (
    <div className="servicesPage">
      {/* Top fixed progress */}
      <ScrollProgress />

      {/* Sticky reveal cinematic intro */}
      <StickyRevealHero slides={slides} />

      {/* Cinematic transition strip */}
      <section className="svcInterlude" aria-label="Interlude">
        <div className="svcInterlude__wrap">
          <VelocityParallax intensity={18}>
            <h2 className="svcInterlude__title">
              Select the system you need.
              <span className="svcInterlude__grad"> We’ll build the outcome.</span>
            </h2>
          </VelocityParallax>

          <p className="svcInterlude__sub">
            Every service is structured for performance, clarity, and scaling.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="servicesList" aria-label="All Services">
        {/* Animated ambient background */}
        <div className="servicesList__bg" aria-hidden="true" />
        <div className="servicesList__gridLines" aria-hidden="true" />

        <VelocityParallax intensity={32}>
          <div className="servicesList__glow servicesList__glow--a" aria-hidden="true" />
        </VelocityParallax>

        <VelocityParallax intensity={20}>
          <div className="servicesList__glow servicesList__glow--b" aria-hidden="true" />
        </VelocityParallax>

        {/* Floating overlays */}
        <ScrollParallax speed={34}>
          <img
            className="servicesList__overlay servicesList__overlay--1 driftSlow"
            src="/assets/services/overlay1.png"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </ScrollParallax>

        <ScrollParallax speed={58}>
          <img
            className="servicesList__overlay servicesList__overlay--2 driftSlow2"
            src="/assets/services/overlay2.png"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </ScrollParallax>

        <ScrollParallax speed={84}>
          <img
            className="servicesList__fog driftSlow3"
            src="/assets/services/fog.png"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </ScrollParallax>

        <div className="servicesList__wrap">
          <motion.div
            className="servicesList__head"
            initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className="servicesList__kicker">SERVICES</p>

            <VelocityParallax intensity={14}>
              <h2 className="servicesList__title">
                Systems that turn traffic into{" "}
                <span className="servicesList__grad">profit.</span>
              </h2>
            </VelocityParallax>

            <p className="servicesList__sub">
              Click a service to explore full details, deliverables, and outcomes.
            </p>
          </motion.div>

          <div className="servicesList__grid">
            {services.map((svc, idx) => (
              <ScrollParallax key={svc.slug} speed={12 + idx * 2}>
                <TiltParallaxCard className="spTilt">
                  <motion.article
                    className="spCard"
                    initial={reduce ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
                    whileInView={reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                  >
                    {/* Media */}
                    <div className="spCard__media" aria-hidden="true">
                      <CursorParallax intensity={20} className="spCard__mediaInner">
                        <motion.img
                          className="spCard__img"
                          src={svc.image}
                          alt=""
                          draggable={false}
                          initial={reduce ? {} : { y: 10, scale: 1.04 }}
                          animate={reduce ? {} : { y: [10, -10, 10] }}
                          transition={
                            reduce
                              ? {}
                              : { duration: 6 + idx * 0.25, ease: "easeInOut", repeat: Infinity }
                          }
                        />
                      </CursorParallax>

                      <div className="spCard__mediaGlow" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <h3 className="spCard__title">{svc.title}</h3>
                    <p className="spCard__desc">{trimTo90(svc.description)}</p>

                    <div className="spCard__row">
                      <button
                        className="spCard__btn"
                        type="button"
                        onClick={() => navigate(`/service/${svc.slug}`)}
                      >
                        View Details <span aria-hidden="true">→</span>
                      </button>

                      <button
                        className="spCard__ghost"
                        type="button"
                        onClick={() => navigate("/#contact")}
                      >
                        Contact
                      </button>
                    </div>

                    <div className="spCard__spotlight" aria-hidden="true" />
                    <div className="spCard__shine" aria-hidden="true" />
                  </motion.article>
                </TiltParallaxCard>
              </ScrollParallax>
            ))}
          </div>
        </div>
      </section>

      {/* End CTA */}
      <section className="svcEnd" aria-label="Services CTA">
        <div className="svcEnd__wrap">
          <motion.div
            className="svcEnd__card"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="svcEnd__title">Want a custom growth plan?</h2>
            <p className="svcEnd__sub">
              We’ll map your traffic sources, build the funnel, and scale performance.
            </p>

            <div className="svcEnd__row">
              <button className="svcEnd__btn" onClick={() => navigate("/#contact")}>
                Talk to Us →
              </button>

              <button className="svcEnd__ghost" onClick={() => navigate("/")}>
                Back Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
