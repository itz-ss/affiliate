import React, { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import LayerParallaxHero from "../../parallax/LayerParallaxHero";
import ScrollParallax from "../../parallax/ScrollParallax";
import ZoomParallax from "../../parallax/ZoomParallax";
import VelocityParallax from "../../parallax/VelocityParallax";

import servicesData from "../../data/services.json";
import "./style/ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  const service = useMemo(() => {
    return (servicesData?.services ?? []).find((s) => s.slug === slug);
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If slug doesn't match anything
  if (!service) {
    return (
      <section className="sdNotFound">
        <div className="sdNotFound__wrap">
          <h1>Service not found</h1>
          <p>The service you are trying to open does not exist.</p>
          <button className="sdBtn" onClick={() => navigate("/")}>
            Go Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="sd">
      {/* HERO TOP (cinematic) */}
      <LayerParallaxHero
        className="sdHero"
        height="70vh"
        layers={[
          {
            src: "/assets/hero/nightsky.jpg",
            speed: 10,
            className: "sdHero__bg",
          },
        ]}
      >
        <div className="sdHero__overlay" />

        <VelocityParallax intensity={30}>
          <div className="sdHero__glow sdHero__glow--a" aria-hidden="true" />
        </VelocityParallax>
        <VelocityParallax intensity={18}>
          <div className="sdHero__glow sdHero__glow--b" aria-hidden="true" />
        </VelocityParallax>

        <div className="sdHero__content">
          <motion.button
            className="sdBack"
            onClick={() => navigate(-1)}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            ← Back
          </motion.button>

          <ScrollParallax speed={24}>
            <div className="sdKicker">SERVICE</div>
          </ScrollParallax>

          <ZoomParallax from={1.05} to={1} className="sdTitleWrap">
            <h1 className="sdTitle">{service.title}</h1>
          </ZoomParallax>

          <ScrollParallax speed={18}>
            <p className="sdSub">
              Built for performance. Designed for scalability. Engineered for growth.
            </p>
          </ScrollParallax>

          {/* Service Image */}
          <ScrollParallax speed={40}>
            <div className="sdHero__imageWrap" aria-hidden="true">
              <img src={service.image} alt="" className="sdHero__image" draggable={false} />
            </div>
          </ScrollParallax>
        </div>
      </LayerParallaxHero>

      {/* BODY */}
      <section className="sdBody">
        <div className="sdBody__wrap">
          <motion.div
            className="sdCard"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="sdH2">Overview</h2>
            <p className="sdP">{service.description}</p>
          </motion.div>

          <motion.div
            className="sdCard"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <h2 className="sdH2">What You Get</h2>
            <ul className="sdList">
              {(service.points ?? []).map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="sdCTA"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="sdCTA__left">
              <h3 className="sdCTA__title">Ready to scale with us?</h3>
              <p className="sdCTA__sub">
                Let’s build a performance strategy that compounds.
              </p>
            </div>

            <div className="sdCTA__right">
              <button className="sdBtn" onClick={() => navigate("/#contact")}>
                Contact Us →
              </button>

              <button className="sdBtn sdBtn--ghost" onClick={() => navigate("/")}>
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
