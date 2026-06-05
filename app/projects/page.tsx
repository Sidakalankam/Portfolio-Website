import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../lib/content";

export default function ProjectsPage() {
  return (
    <>
      <section className="section simple-page-heading">
        <p className="section-label">Selected Work</p>
        <div className="simple-heading-row">
          <h1>Projects</h1>
          <p>Technical builds across ML infrastructure, AI agents, and cloud systems.</p>
        </div>
      </section>
      <section className="section compact-top">
        <div className="project-grid projects-page-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
