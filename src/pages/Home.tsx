import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      // 1. Hero Entrance Animation
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".hero-animate", {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
        })
        .from(
          ".hero-portrait-animate",
          {
            y: 32,
            opacity: 0,
            rotation: 4,
            duration: 0.95,
          },
          "-=0.5"
        );

      // 2. Scroll-Triggered Animations for Sections
      gsap.utils.toArray<HTMLElement>(".scroll-section").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            toggleActions: "play none none none",
          },
          y: 36,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      });

      // 3. Scroll-Triggered Animations for Project Cards
      gsap.utils.toArray<HTMLElement>(".project-card-animate").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            toggleActions: "play none none none",
          },
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="site-shell" ref={containerRef}>
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
