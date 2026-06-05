import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";
import { profile, projects } from "../../lib/content";

export default function ResumePage() {
  return (
    <>
      <PageHeader
        kicker="Resume"
        title="A resume page built for scanning."
        description="Keep a PDF download here, but make the web version readable without forcing a recruiter to open a file."
      />
      <section className="section compact-top resume-layout">
        <aside className="resume-sidebar">
          <h2>Contact</h2>
          <p>{profile.email}</p>
          <p>{profile.location}</p>
          <Link className="text-link" href={profile.github}>GitHub</Link>
          <Link className="text-link" href={profile.linkedin}>LinkedIn</Link>
        </aside>
        <div className="resume-main">
          <section>
            <h2>Education</h2>
            <p className="strong">Add your university and degree</p>
            <p>Computer Science / Software Engineering / related coursework.</p>
          </section>
          <section>
            <h2>Technical Skills</h2>
            <ul className="tag-list">
              {["Python", "TypeScript", "React", "Next.js", "AWS", "Docker", "SQL", "Machine Learning"].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Selected Projects</h2>
            {projects.map((project) => (
              <article className="resume-project" key={project.slug}>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </article>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
