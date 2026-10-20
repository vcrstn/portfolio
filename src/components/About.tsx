import { statusItems } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about section scroll-section" id="about">
      <div className="section-label">
        <span>01</span>
        <p>A little context</p>
      </div>
      <div className="about-content">
        <p className="lead">
          I turn practical ideas into responsive, intuitive web experiences.
        </p>
        <div className="about-grid">
          <p>
            I learn by building. Through academic projects and hands-on
            experimentation, I’ve been developing my skills in web development,
            exploring how thoughtful interfaces and practical functionality come
            together to solve real problems.
          </p>
          <p>
            Currently, I’m strengthening my frontend foundations and building
            with React. I’m looking for an opportunity to contribute to real
            projects, learn from experienced developers, and grow into a
            developer who creates useful, well-crafted web experiences.
          </p>
        </div>
      </div>
      <aside className="currently" aria-label="Current status">
        {statusItems.map((item) => (
          <div className="currently-item" key={item.label}>
            <span className="currently-label">{item.label}</span>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </div>
        ))}
      </aside>
    </section>
  );
}
