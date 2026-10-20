import { useState } from "react";
import { profile } from "../data/portfolioData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <a className="wordmark" href="#top" aria-label="Home">
        <span>[</span> {profile.initials} <span>]</span>
      </a>
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}
