import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * PinnedSlides (Sticky scrollytelling)
 * - stays pinned until slides complete
 * - no glitch, production safe
 *
 * slides: [{ img, title, desc }]
 * heightVh: how long scroll story lasts (recommended 320)
 */
export default function PinnedSlides({ slides = [], heightVh = 320 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 3 scenes:
  // 0..0.33 => slide1
  // 0.33..0.66 => slide2
  // 0.66..1 => slide3

  // Opacity timing
  const s1Opacity = useTransform(scrollYProgress, [0, 0.26, 0.33], [1, 1, 0]);
  const s2Opacity = useTransform(scrollYProgress, [0.28, 0.45, 0.66, 0.73], [0, 1, 1, 0]);
  const s3Opacity = useTransform(scrollYProgress, [0.63, 0.8, 1], [0, 1, 1]);

  // Slight zoom per slide for video feel
  const s1Scale = useTransform(scrollYProgress, [0, 0.33], [1, 1.05]);
  const s2Scale = useTransform(scrollYProgress, [0.33, 0.66], [1, 1.05]);
  const s3Scale = useTransform(scrollYProgress, [0.66, 1], [1, 1.05]);

  // Text vertical parallax
  const t1Y = useTransform(scrollYProgress, [0, 0.33], [0, -40]);
  const t2Y = useTransform(scrollYProgress, [0.33, 0.66], [30, -30]);
  const t3Y = useTransform(scrollYProgress, [0.66, 1], [30, 0]);

  const slide1 = slides[0] ?? {};
  const slide2 = slides[1] ?? {};
  const slide3 = slides[2] ?? {};

  return (
    <section ref={ref} className="pinned" style={{ height: `${heightVh}vh` }}>
      <div className="pinned__sticky">
        {/* Slide 1 */}
        <motion.div className="pinned__slide" style={{ opacity: s1Opacity }}>
          {slide1.img && (
            <motion.img
              src={slide1.img}
              alt=""
              className="pinned__img"
              style={{ scale: s1Scale }}
              draggable={false}
            />
          )}
        </motion.div>

        {/* Slide 2 */}
        <motion.div className="pinned__slide" style={{ opacity: s2Opacity }}>
          {slide2.img && (
            <motion.img
              src={slide2.img}
              alt=""
              className="pinned__img"
              style={{ scale: s2Scale }}
              draggable={false}
            />
          )}
        </motion.div>

        {/* Slide 3 */}
        <motion.div className="pinned__slide" style={{ opacity: s3Opacity }}>
          {slide3.img && (
            <motion.img
              src={slide3.img}
              alt=""
              className="pinned__img"
              style={{ scale: s3Scale }}
              draggable={false}
            />
          )}
        </motion.div>

        {/* Overlay */}
        <div className="pinned__overlay" aria-hidden="true" />

        {/* Text */}
        <div className="pinned__text">
          <motion.div className="pinned__textInner" style={{ opacity: s1Opacity, y: t1Y }}>
            <div className="pinned__kicker">STEP 01</div>
            <h2 className="pinned__title">{slide1.title}</h2>
            <p className="pinned__desc">{slide1.desc}</p>
          </motion.div>

          <motion.div className="pinned__textInner" style={{ opacity: s2Opacity, y: t2Y }}>
            <div className="pinned__kicker">STEP 02</div>
            <h2 className="pinned__title">{slide2.title}</h2>
            <p className="pinned__desc">{slide2.desc}</p>
          </motion.div>

          <motion.div className="pinned__textInner" style={{ opacity: s3Opacity, y: t3Y }}>
            <div className="pinned__kicker">STEP 03</div>
            <h2 className="pinned__title">{slide3.title}</h2>
            <p className="pinned__desc">{slide3.desc}</p>
          </motion.div>
        </div>

        {/* dots */}
        <div className="pinned__dots" aria-hidden="true">
          <motion.span className="dot" style={{ opacity: s1Opacity }} />
          <motion.span className="dot" style={{ opacity: s2Opacity }} />
          <motion.span className="dot" style={{ opacity: s3Opacity }} />
        </div>
      </div>
    </section>
  );
}
