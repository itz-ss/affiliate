import React from "react";
import ScrollParallax from "../parallax/ScrollParallax";
import "./style/BrandStrip.css";

const items = [
  { label: "24/7 Tracking", sub: "Realtime attribution + reports", icon: "⚡" },
  { label: "Fast Payouts", sub: "Partner-first cycles", icon: "💸" },
  { label: "Fraud-Safe", sub: "Smart filters & validation", icon: "🛡️" },
  { label: "Global Offers", sub: "Multi-geo programs", icon: "🌍" },
  { label: "Pro Support", sub: "Scaling guidance", icon: "🎧" },
  { label: "High EPC", sub: "Optimized funnels", icon: "📈" },
];

export default function BrandStrip() {
  // duplicate list for seamless loop
  const marquee = [...items, ...items];

  return (
    <section className="brandStrip" aria-label="Highlights">
      {/* subtle parallax glow behind */}
      <ScrollParallax speed={18}>
        <div className="brandStrip__glow" aria-hidden="true" />
      </ScrollParallax>

      <div className="brandStrip__inner">
        <div className="brandStrip__fade brandStrip__fade--left" aria-hidden="true" />
        <div className="brandStrip__fade brandStrip__fade--right" aria-hidden="true" />

        <div className="brandStrip__track" role="presentation">
          <div className="brandStrip__marquee">
            {marquee.map((it, idx) => (
              <div className="chip" key={`${it.label}-${idx}`}>
                <div className="chip__icon" aria-hidden="true">
                  {it.icon}
                </div>

                <div className="chip__text">
                  <div className="chip__label">{it.label}</div>
                  <div className="chip__sub">{it.sub}</div>
                </div>

                <span className="chip__dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
