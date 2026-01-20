import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * const slides = [
 *  { img: "/assets/how/slide1.jpg", title: "1) Strategy", desc: "We build your plan..." },
 *  { img: "/assets/how/slide2.jpg", title: "2) Launch", desc: "We test creatives..." },
 *  { img: "/assets/how/slide3.jpg", title: "3) Scale", desc: "We scale with tracking..." },
 * ];
 *
 * <StickyRevealHero slides={slides} />
 *
 * slides: array of 3 items recommended
 *
 * ✅ Auto Performance:
 * - full: sticky + layer reveal
 * - mid : same but smaller scroll height (faster)
 * - lite: disables scroll reveal (renders single scene)
 */
export default function StickyRevealHero({ slides = [] }) {
  const ref = useRef(null);
  const mode = usePerfMode();

  // fallback safe
  const top = slides[0] ?? {};
  const mid = slides[1] ?? {};
  const bottom = slides[2] ?? {};

  /**
   * ✅ LITE MODE:
   * - no scrollYProgress hook
   * - no height reveal transforms
   * - renders only ONE scene (bottom preferred)
   * - still cinematic + readable
   */
  if (mode === "lite") {
    const liteScene = bottom?.img || mid?.img || top?.img;

    return (
      <section
        ref={ref}
        style={{
          height: "110vh",
          position: "relative",
          background: "#050516",
        }}
      >
        <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {liteScene && (
            <img
              src={liteScene}
              alt="scene"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 1,
                transform: "scale(1.02)",
                filter: "saturate(1.1) contrast(1.06) brightness(0.92)",
              }}
            />
          )}

          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              background:
                "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.07), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.14))",
            }}
          />

          {/* One text block only */}
          <div
            style={{
              position: "relative",
              zIndex: 5,
              height: "100%",
              display: "grid",
              placeItems: "center",
              padding: "0 18px",
              textAlign: "center",
              color: "white",
            }}
          >
            <div style={{ maxWidth: 920 }}>
              <h1 style={{ fontSize: "clamp(2.0rem, 6vw, 3.6rem)", margin: 0, fontWeight: 1000 }}>
                {bottom?.title || mid?.title || top?.title}
              </h1>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", marginTop: 12, opacity: 0.86 }}>
                {bottom?.desc || mid?.desc || top?.desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * FULL + MID MODE:
   * sticky scroll reveal.
   * mid mode reduces section scroll time to improve performance.
   */
  const sectionHeight = mode === "mid" ? "260vh" : "320vh";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smoothly reveal layers by height
  const topH = useTransform(scrollYProgress, [0, 0.35], ["100%", "0%"]);
  const midH = useTransform(scrollYProgress, [0.35, 0.75], ["100%", "0%"]);

  // Text scenes
  const text1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.35], [1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.22, 0.42, 0.65], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.62, 0.8, 1], [0, 1, 1]);

  const text1Y = useTransform(scrollYProgress, [0, 0.35], [0, -30]);
  const text2Y = useTransform(scrollYProgress, [0.22, 0.65], [30, -20]);
  const text3Y = useTransform(scrollYProgress, [0.62, 1], [30, 0]);

  return (
    <section ref={ref} style={{ height: sectionHeight, position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        {/* Bottom base image */}
        {bottom?.img && (
          <img
            src={bottom.img}
            alt="bottom"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              transform: "scale(1.02)",
              filter: "saturate(1.1) contrast(1.06) brightness(0.92)",
            }}
          />
        )}

        {/* Mid reveal */}
        {mid?.img && (
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: midH,
              overflow: "hidden",
              zIndex: 2,
            }}
          >
            <img
              src={mid.img}
              alt="mid"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        )}

        {/* Top reveal */}
        {top?.img && (
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: topH,
              overflow: "hidden",
              zIndex: 3,
            }}
          >
            <img
              src={top.img}
              alt="top"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        )}

        {/* overlay for readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 4,
            background:
              "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.08), transparent 55%), linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.10))",
          }}
        />

        {/* text block */}
        <div
          style={{
            position: "relative",
            zIndex: 6,
            height: "100%",
            display: "grid",
            placeItems: "center",
            padding: "0 18px",
            textAlign: "center",
            color: "white",
          }}
        >
          <motion.div style={{ position: "absolute", opacity: text1Opacity, y: text1Y }}>
            <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", margin: 0, fontWeight: 1000 }}>
              {top?.title}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", marginTop: 12, opacity: 0.85 }}>
              {top?.desc}
            </p>
          </motion.div>

          <motion.div style={{ position: "absolute", opacity: text2Opacity, y: text2Y }}>
            <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", margin: 0, fontWeight: 1000 }}>
              {mid?.title}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", marginTop: 12, opacity: 0.85 }}>
              {mid?.desc}
            </p>
          </motion.div>

          <motion.div style={{ position: "absolute", opacity: text3Opacity, y: text3Y }}>
            <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 4.2rem)", margin: 0, fontWeight: 1000 }}>
              {bottom?.title}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", marginTop: 12, opacity: 0.85 }}>
              {bottom?.desc}
            </p>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 24,
            zIndex: 7,
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: 0.85,
          }}
        >
          <div
            style={{
              padding: "8px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(0,0,0,0.28)",
              backdropFilter: "blur(10px)",
              fontWeight: 900,
              letterSpacing: "0.12em",
              fontSize: "0.72rem",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
