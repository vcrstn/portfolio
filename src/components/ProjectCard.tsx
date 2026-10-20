import Icon from "./Icon";
import type { ProjectItem } from "../data/portfolioData";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternalGithub = Boolean(project.githubUrl?.startsWith("http"));
  const isExternalLive = Boolean(project.liveUrl?.startsWith("http"));

  return (
    <article className={`project project-${project.tone} project-card-animate`}>
      <div className="project-visual">
        <span>{project.category}</span>
        <div className="sample-window">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              loading="lazy"
            />
          ) : (
            <div className="sample-window-copy">
              <strong>{project.previewTitle}</strong>
              <small>{project.previewSubtitle}</small>
            </div>
          )}
        </div>
        <b aria-hidden="true">{project.number}</b>
      </div>

      <div className="project-copy">
        <p className="project-kicker">Project {project.number}</p>
        <h3>{project.title}</h3>

        <dl className="project-details">
          <div className="project-detail-block">
            <dt>Problem &amp; Purpose</dt>
            <dd>{project.problem}</dd>
          </div>
          <div className="project-detail-block">
            <dt>My Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>
        </dl>

        <ul aria-label="Technologies used">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-links" aria-label={`Links for ${project.title}`}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target={isExternalGithub ? "_blank" : undefined}
              rel={isExternalGithub ? "noopener noreferrer" : undefined}
            >
              <Icon name="github" /> {project.githubLabel ?? "GitHub Repository"}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={isExternalLive ? "_blank" : undefined}
              rel={isExternalLive ? "noopener noreferrer" : undefined}
            >
              {project.liveLabel ?? "Live Demo"} <Icon name="arrow" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
