export function getPerfMode() {
  if (typeof window === "undefined") return "full";

  const w = window.innerWidth;

  const memory = navigator.deviceMemory; // undefined on many devices
  const cores = navigator.hardwareConcurrency; // can be undefined too
  const conn = navigator.connection?.effectiveType || "";

  const slowNet = ["slow-2g", "2g"].includes(conn);

  // ✅ very small screens: don't kill parallax, just reduce it
  if (w < 820) return "mid";

  // ✅ if network is slow, reduce
  if (slowNet) return "mid";

  // ✅ if memory/cores are known & low => lite
  if ((memory && memory <= 2) || (cores && cores <= 2)) return "lite";

  // ✅ strong desktop/laptop
  if (w >= 1024 && (memory ? memory >= 8 : true) && (cores ? cores >= 8 : true) && !slowNet)
    return "full";

  // ✅ default
  return "mid";
}
