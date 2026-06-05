import { PageHeader } from "../../components/PageHeader";
import { contributions } from "../../lib/content";

export default function ContributionsPage() {
  return (
    <>
      <PageHeader
        kicker="Contributions"
        title="Open-source, writing, leadership, and community work."
        description="A place for the evidence that does not fit neatly into a project card but still shows technical maturity."
      />
      <section className="section compact-top">
        <div className="contribution-grid">
          {contributions.map((item) => (
            <article className="project-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
