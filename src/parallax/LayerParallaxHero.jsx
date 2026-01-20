import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * <LayerParallaxHero
 *   className="hero"
 *   height="100vh"
 *   layers={[
 *     { src: "/assets/hero/bg.jpg", speed: 14, className: "hero__layer hero__layer--bg" },
 *     { src: "/assets/hero/mid.png", speed: 34, opacity: 0.9, className: "hero__layer hero__layer--mid" },
 *     { src: "/assets/hero/front.png", speed: 70, opacity: 1, className: "hero__layer hero__layer--front" },
 *   ]}
 * >
 *   ...content...
 * </LayerParallaxHero>
 *
 * ✅ Auto Performance:
 * - full: full parallax
 * - mid : reduced speed + softer springs
 * - lite: static layers (best for mobile)
 */

function ParallaxLayer({ layer, idx, scrollYProgress, speedFactor, mode }) {
  // speed capped for stability (mid devices)
  const speed = Math.min((layer.speed ?? 80) * speedFactor, mode === "mid" ? 60 : 999);

  const yRaw = useTransform(scrollYProgress, [0, 1], [0, speed]);

  const y = useSpring(yRaw, {
    stiffness: mode === "mid" ? 85 : 120,
    damping: mode === "mid" ? 34 : 26,
    mass: 0.55,
  });

  return (
    <motion.img
      src={layer.src}
      alt={layer.alt || `layer-${idx}`}
      className={layer.className || ""}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        y,
        opacity: layer.opacity ?? 1,
        willChange: "transform",
        transform: "translateZ(0)",         // ✅ fix mobile flicker
        backfaceVisibility: "hidden",       // ✅ fix mobile flicker
        pointerEvents: "none",
        zIndex: idx + 1,
      }}
      draggable={false}
    />
  );
}

export default function LayerParallaxHero({
  layers = [],
  height = "100vh",
  className = "",
  children,
}) {
  const ref = useRef(null);
  const modeRaw = usePerfMode();

  // ✅ optional: always lite on small screens (hero stability)
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth < 820 || navigator.maxTouchPoints > 0);

  const mode = isMobile && modeRaw === "full" ? "mid" : modeRaw;

  // ✅ stable height for 100vh
  const computedHeight =
    height === "100vh"
      ? "calc(var(--vh, 1vh) * 100)" // ✅ stable mobile vh
      : height;

  // ✅ Lite mode (static layers)
  if (mode === "lite") {
    return (
      <section
        ref={ref}
        className={className}
        style={{
          height: computedHeight,
          position: "relative",
          overflow: "hidden",
          contain: "paint",
          transform: "translateZ(0)",
        }}
      >
        {layers.map((layer, idx) => (
          <img
            key={idx}
            src={layer.src}
            alt={layer.alt || `layer-${idx}`}
            className={layer.className || ""}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: layer.opacity ?? 1,
              pointerEvents: "none",
              zIndex: idx + 1,
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            draggable={false}
          />
        ))}

        <div style={{ position: "relative", zIndex: layers.length + 10, height: "100%" }}>
          {children}
        </div>
      </section>
    );
  }

  // ✅ full + mid parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const speedFactor = mode === "mid" ? 0.5 : 1;

  return (
    <section
      ref={ref}
      className={className}
      style={{
        height: computedHeight,
        position: "relative",
        overflow: "hidden",
        contain: "paint",
        transform: "translateZ(0)",
      }}
    >
      {layers.map((layer, idx) => (
        <ParallaxLayer
          key={idx}
          layer={layer}
          idx={idx}
          scrollYProgress={scrollYProgress}
          speedFactor={speedFactor}
          mode={mode}
        />
      ))}

      <div style={{ position: "relative", zIndex: layers.length + 10, height: "100%" }}>
        {children}
      </div>
    </section>
  );
}
