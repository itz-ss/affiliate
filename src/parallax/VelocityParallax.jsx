import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * <VelocityParallax intensity={18}>
 *   <div className="glow" />
 * </VelocityParallax>
 *
 * intensity: number (px). Higher = more movement.
 *
 * ✅ Auto Performance:
 * - full: full velocity-based parallax
 * - mid : reduced intensity + softer mapping
 * - lite: disabled (returns normal div)
 */
export default function VelocityParallax({
  children,
  intensity = 25,
  className = "",
}) {
  const ref = useRef(null);
  const mode = usePerfMode();

  // ✅ Lite mode: no hooks, no overhead
  if (mode === "lite") {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // ✅ scale intensity automatically
  const effectiveIntensity = mode === "mid" ? intensity * 0.55 : intensity;

  // ✅ reduce sensitivity on mid devices (less jitter)
  const range = mode === "mid" ? 900 : 1500;

  const { scrollY } = useScroll(); // global
  const v = useVelocity(scrollY);

  // smooth velocity
  const vSmooth = useSpring(v, {
    stiffness: mode === "mid" ? 95 : 120,
    damping: mode === "mid" ? 34 : 30,
  });

  // map velocity to translate
  const yRaw = useTransform(
    vSmooth,
    [-range, 0, range],
    [effectiveIntensity, 0, -effectiveIntensity]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: yRaw, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
