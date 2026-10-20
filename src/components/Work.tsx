import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-heading scroll-section">
        <div className="section-label">
          <span>02</span>
          <p>Selected work</p>
        </div>
        <div>
          <h2>Things I’ve built</h2>
          <p>
            Academic and frontend projects focused on responsive interfaces,
            clear structure, and practical usability.
          </p>
        </div>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
