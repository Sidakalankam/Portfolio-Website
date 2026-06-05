import Link from "next/link";
import type { Project } from "../lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div>
        <p className="card-meta">{project.role}</p>
        <h2>{project.name}</h2>
        <p>{project.summary}</p>
      </div>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="project-actions">
        <Link className="text-link" href={`/projects/${project.slug}`}>
          Learn More
        </Link>
        {project.links.map((link) => (
          <a className="text-link secondary-link" href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
