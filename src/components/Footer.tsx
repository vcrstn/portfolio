import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} {profile.fullName}. Designed &amp; built with care.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
