import { experiences } from "../../lib/content";

export default function ExperiencePage() {
  return (
    <>
      <section className="section simple-page-heading">
        <p className="section-label">Professional Work</p>
        <div className="simple-heading-row">
          <h1>Experience</h1>
          <p>Internship and capstone work across backend systems, observability, and ML deployment.</p>
        </div>
      </section>
      <section className="section compact-top">
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={`${item.title}-${item.role}`}>
              <div className="experience-card-header">
                <div>
                  <p className="card-meta">{item.organization}</p>
                  <h2>{item.title}</h2>
                  <p className="strong">{item.role}</p>
                </div>
              </div>
              <div className="experience-copy-grid">
                <div>
                  <p className="experience-label">Problem</p>
                  <p className="experience-description">{item.problem}</p>
                </div>
                <div>
                  <p className="experience-label">Built / Contributed</p>
                  <p className="experience-description">{item.contribution}</p>
                </div>
              </div>
              <div className="experience-highlights">
                <p className="experience-label">Key Metrics & Highlights</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <ul className="tag-list experience-stack" aria-label={`${item.title} Technologies`}>
                {item.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
