import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./style/ScrollProgress.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const p = Math.round(v * 100);
      setPct(p);
    });
  }, [scrollYProgress]);

  return (
    <div className="spx" aria-hidden="true">
      <motion.div
        className="spx__bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="spx__pill">{pct}%</div>
    </div>
  );
}
