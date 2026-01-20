import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL has #hash, scroll to element
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      // small delay so DOM loads
      setTimeout(() => {
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 60);

      return;
    }

    // otherwise normal route navigation -> scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
