import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import usePerfMode from "../utils/usePerfMode";

/**
 * Usage:
 * <CursorParallax intensity={18} className="cardParallax">
 *   <div className="card"> ... </div>
 * </CursorParallax>
 *
 * intensity: how much it moves (px)
 *
 * ✅ Auto Performance:
 * - full: enabled
 * - mid : reduced intensity
 * - lite: disabled (returns normal div)
 *
 * ✅ Touch devices:
 * - disabled automatically (no cursor)
 */
export default function CursorParallax({ children, intensity = 25, className = "" }) {
  const ref = useRef(null);
  const mode = usePerfMode();

  // ✅ Touch check: cursor parallax makes no sense on touch devices
  const isTouch =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  // ✅ Lite or touch: disable completely (no listeners, no motion values)
  if (mode === "lite" || isTouch) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  // ✅ mid devices reduce intensity automatically
  const effectiveIntensity = mode === "mid" ? intensity * 0.5 : intensity;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.8 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.8 });

  const moveX = useTransform(x, [-1, 1], [-effectiveIntensity, effectiveIntensity]);
  const moveY = useTransform(y, [-1, 1], [-effectiveIntensity, effectiveIntensity]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      mx.set(px * 2 - 1);
      my.set(py * 2 - 1);
    };

    const handleLeave = () => {
      mx.set(0);
      my.set(0);
    };

    // ✅ pointer events are smoother & more universal than mousemove
    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [mx, my]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: moveX,
        y: moveY,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
