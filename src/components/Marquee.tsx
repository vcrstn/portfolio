import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { tickerItems } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Marquee() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Repeat items so the track seamlessly fills extra-wide displays
  const repeatedItems = [...tickerItems, ...tickerItems];

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !trackRef.current) {
        return;
      }

      // Smooth continuous infinite loop
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: "none",
      });
      tweenRef.current = tween;

      // Dynamic velocity reaction on scroll
      const trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = Math.min(Math.abs(self.getVelocity() / 250), 4);
          if (velocity > 0.1) {
            gsap.to(tween, {
              timeScale: 1 + velocity,
              duration: 0.25,
              overwrite: "auto",
              onComplete: () => {
                gsap.to(tween, {
                  timeScale: 1,
                  duration: 0.8,
                  ease: "power1.out",
                });
              },
            });
          }
        },
      });

      return () => {
        tween.kill();
        trigger.kill();
      };
    },
    { scope: containerRef }
  );

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { timeScale: 1, duration: 0.4 });
    }
  };

  return (
    <section
      className="marquee"
      ref={containerRef}
      aria-label="Core focus areas"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-content">
          {repeatedItems.map((item, index) => (
            <span key={`group1-${index}`} className="marquee-item">
              <span>{item}</span>
              <i aria-hidden="true" />
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <span key={`group2-${index}`} className="marquee-item">
              <span>{item}</span>
              <i aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
