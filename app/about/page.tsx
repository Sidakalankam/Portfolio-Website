import { PageHeader } from "../../components/PageHeader";
import { profile } from "../../lib/content";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="The Person Behind the Work"
        description="Use this page for the story that gives your portfolio context: what you care about, how you work, and where you are trying to grow."
      />
      <section className="section compact-top about-copy">
        <p>
          I am {profile.name}, a software developer interested in building systems that make complicated work easier to understand and act on.
        </p>
        <p>
          My projects currently sit at the intersection of applied machine learning, financial software, and cloud-backed application design. I like work where the interface, the data model, and the engineering tradeoffs all matter.
        </p>
        <p>
          Replace this copy with specifics: your background, what you are studying, the kind of engineering roles you are pursuing, and the traits that make your work distinct.
        </p>
      </section>
    </>
  );
}
