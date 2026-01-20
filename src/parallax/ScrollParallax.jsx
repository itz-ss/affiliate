import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * <ScrollParallax speed={120}>
 *   <img src="/assets/hero/cloud.png" alt="" />
 * </ScrollParallax>
 *
 * speed: number (px range). Higher = more movement.
 * className: optional wrapper class
 *
 * ✅ Auto Performance:
 * - full: full parallax
 * - mid : reduced parallax
 * - lite: parallax disabled (returns normal div)
 */
export default function ScrollParallax({ children, speed = 120, className = "" }) {
  const ref = useRef(null);
  const mode = usePerfMode();

  // ✅ automatically scale intensity
  const effectiveSpeed =
    mode === "lite" ? 0 : mode === "mid" ? speed * 0.45 : speed;

  // ✅ Lite mode: no scroll hooks (zero overhead)
  if (mode === "lite" || effectiveSpeed === 0) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-effectiveSpeed, effectiveSpeed]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 25, mass: 0.8 });

  return (
    <motion.div ref={ref} className={className} style={{ y, willChange: "transform" }}>
      {children}
    </motion.div>
  );
}
