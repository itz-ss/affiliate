import LayerParallaxHero from "../parallax/LayerParallaxHero";
import ScrollParallax from "../parallax/ScrollParallax";
import ZoomParallax from "../parallax/ZoomParallax";
import "./style/Hero.css";

export default function Hero() {
  return (
    <LayerParallaxHero
      className="hero"
      height="100vh"
      layers={[
        {
          src: "/assets/hero/nightsky.jpg",
          speed: 12,
          className: "hero__layer hero__layer--bg",
        },
      ]}
    >
      {/* Overlay */}
      <div className="hero__overlay" />

      {/* 1) Stars shimmer (slowest layer) */}
      <ScrollParallax speed={18}>
        <div className="hero__stars" aria-hidden="true">
          <span className="star s1" />
          <span className="star s2" />
          <span className="star s3" />
          <span className="star s4" />
          <span className="star s5" />
          <span className="star s6" />
          <span className="star s7" />
          <span className="star s8" />
          <span className="star s9" />
          <span className="star s10" />
        </div>
      </ScrollParallax>

      {/* 2) Moon layer */}
      <ScrollParallax speed={34}>
        <div className="hero__moonWrap" aria-hidden="true">
          <div className="hero__moonGlow" />
          <img
            src="/assets/hero/moon2.png"
            alt="moon"
            className="hero__moon"
            draggable={false}
          />
          <div className="hero__moonHaze" />
        </div>
      </ScrollParallax>

      {/* 3) FAR CLOUDS (small, slow) */}
      <ScrollParallax speed={55}>
        <div className="hero__cloudLayer hero__cloudLayer--far" aria-hidden="true">
          <div className="cloudWrap cloud--far cfar1 driftSlow">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--far cfar2 driftSlow2">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--far cfar3 driftSlow3">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
        </div>
      </ScrollParallax>

      {/* 4) MID CLOUDS (medium size, medium speed) */}
      <ScrollParallax speed={78}>
        <div className="hero__cloudLayer hero__cloudLayer--mid" aria-hidden="true">
          <div className="cloudWrap cloud--mid cmid1 driftMid">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--mid cmid2 driftMid2">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--mid cmid3 driftMid3">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--mid cmid4 driftMid2">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
        </div>
      </ScrollParallax>

      {/* 5) FRONT CLOUDS (huge, fast) */}
      <ScrollParallax speed={110}>
        <div className="hero__cloudLayer hero__cloudLayer--front" aria-hidden="true">
          <div className="cloudWrap cloud--front cfront1 driftFast">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--front cfront2 driftFast2">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
          <div className="cloudWrap cloud--front cfront3 driftFast3">
            <img src="/assets/hero/cloud.png" alt="" />
          </div>
        </div>
      </ScrollParallax>

      {/* 6) Fog layer */}
      <ScrollParallax speed={120}>
        <div className="hero__fog" aria-hidden="true">
          <div className="fog fog1" />
          <div className="fog fog2" />
        </div>
      </ScrollParallax>

      {/* TEXT LAYER */}
      <div className="hero__content">
        <ScrollParallax speed={20}>
          <div className="hero__kicker">
            AFFILLION NETWORK <span className="hero__dot">•</span> PERFORMANCE AFFILIATE ENGINE
          </div>
        </ScrollParallax>

        <ZoomParallax from={1.08} to={1} className="hero__titleWrap">
          <h1 className="hero__title">
            TURN TRAFFIC INTO
            <br />
            <span className="grad">UNSTOPPABLE INCOME</span>
          </h1>
        </ZoomParallax>

        <ScrollParallax speed={15}>
          <p className="hero__sub">
            A premium ecosystem built for affiliates who want scale, clarity, and domination.
            <span className="hero__subStrong"> Your growth should look inevitable.</span>
          </p>
        </ScrollParallax>

        <ScrollParallax speed={12}>
          <div className="hero__ctaRow">
            <a className="hero__btn" href="#contact">
              JOIN THE NETWORK <span className="hero__btnArrow">→</span>
            </a>

            <a className="hero__btnSecondary" href="#services">
              Explore Programs
            </a>
          </div>
        </ScrollParallax>

        <ScrollParallax speed={8}>
          <div className="hero__proof">
            <div className="hero__stat">
              <div className="hero__statNum">24/7</div>
              <div className="hero__statLabel">Tracking System</div>
            </div>
            <div className="hero__stat">
              <div className="hero__statNum">Fast</div>
              <div className="hero__statLabel">Payout Cycles</div>
            </div>
            <div className="hero__stat">
              <div className="hero__statNum">Pro</div>
              <div className="hero__statLabel">Scaling Support</div>
            </div>
          </div>
        </ScrollParallax>
      </div>
    </LayerParallaxHero>
  );
}
