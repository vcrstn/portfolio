import Icon from "./Icon";
import { profile } from "../data/portfolioData";

export default function Contact() {
  return (
    <section className="contact section scroll-section" id="contact">
      <div className="contact-top">
        <div className="section-label light">
          <span>03</span>
          <p>Say hello</p>
        </div>
        <p className="availability">Open to entry-level frontend roles</p>
      </div>
      <div className="contact-main">
        <h2>
          Let’s build
          <br />
          something <em>thoughtful.</em>
        </h2>
        <p>
          I’m currently looking for entry-level frontend developer opportunities,
          internships, or collaborative web projects. Feel free to reach out by
          email or connect with me below.
        </p>
      </div>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>
          <Icon name="mail" />
          <b>Email</b>
          <small>{profile.email}</small>
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="github" />
          <b>GitHub</b>
          <small>{profile.githubDisplay}</small>
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Icon name="linkedin" />
          <b>LinkedIn</b>
          <small>{profile.linkedinDisplay}</small>
        </a>
      </div>
    </section>
  );
}
