import { useEffect, useState } from "react";
import { getPerfMode } from "./perfMode";

export default function usePerfMode() {
  const [mode, setMode] = useState(() => getPerfMode()); // ✅ init properly

  useEffect(() => {
    const update = () => setMode(getPerfMode());
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return mode;
}
