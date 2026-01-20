import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * <ZoomParallax from={1.06} to={1} className="hero__titleWrap">
 *   <h1>NEVER-ENDING <span className="grad">GROWTH</span></h1>
 * </ZoomParallax>
 *
 * from: starting scale (default 1.1)
 * to  : end scale (default 1)
 *
 * ✅ Auto Performance:
 * - full: full zoom parallax
 * - mid : reduced zoom intensity + softer spring
 * - lite: disabled (static scale, no scroll hooks)
 */
export default function ZoomParallax({
  children,
  from = 1.1,
  to = 1,
  className = "",
}) {
  const ref = useRef(null);
  const mode = usePerfMode();

  // ✅ Lite Mode: no scroll hooks (0 overhead)
  if (mode === "lite") {
    return (
      <div ref={ref} className={className} style={{ transform: "scale(1)" }}>
        {children}
      </div>
    );
  }

  // ✅ Mid mode: reduce zoom amount so it stays smooth
  const lerp = (a, b, t) => a + (b - a) * t;

  // If from=1.1 and to=1, mid mode should be closer to 1.0
  const fromMid = lerp(1, from, 0.55);
  const toMid = lerp(1, to, 0.55);

  const effectiveFrom = mode === "mid" ? fromMid : from;
  const effectiveTo = mode === "mid" ? toMid : to;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [effectiveFrom, effectiveTo]);
  const scale = useSpring(scaleRaw, {
    stiffness: mode === "mid" ? 95 : 120,
    damping: mode === "mid" ? 30 : 25,
    mass: 0.9,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ scale, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
