import Icon from "./Icon";
import { profile } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow hero-animate">{profile.eyebrow}</p>
        <h1 className="hero-animate">
          <span className="hero-line">{profile.name}</span>
          <span className="hero-line">Turning practical ideas</span>
          <span className="hero-line">
            into <em className="hero-italic">thoughtful web experiences.</em>
          </span>
        </h1>
        <p className="hero-intro hero-animate">{profile.heroIntro}</p>
        <div className="hero-actions hero-animate">
          <a className="button button-primary" href="#work">
            View my work <Icon name="arrow" />
          </a>
          <a className="button button-text" href="#contact">
            Contact me <Icon name="arrow" />
          </a>
        </div>
      </div>

      <div className="portrait-wrap hero-portrait-animate">
        <img
          src="/leaf-corner.png"
          alt=""
          aria-hidden="true"
          className="leaf-corner"
        />
        <div className="portrait-card">
          <div className="portrait-photo-frame">
            <img
              src="/profile-portrait.jpg"
              alt={profile.fullName}
              className="portrait-photo"
            />
          </div>
          <div className="portrait-info">
            <span>{profile.status}</span>
            <strong>{profile.fullName}</strong>
            <small>{profile.role}</small>
          </div>
        </div>
        <p className="portrait-caption">
          <span>01</span> Frontend developer in progress
        </p>
      </div>
    </section>
  );
}
