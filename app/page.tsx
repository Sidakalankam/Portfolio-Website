import Image from "next/image";
import Link from "next/link";
import { profile } from "../lib/content";

export default function Home() {
  return (
    <section className="about-home">
      <div className="about-copy-home">
        <h1>
          <strong>Siddarth</strong> Akalankam
        </h1>

        <p>
          Hi, I&apos;m Siddarth Akalankam, a recent CS grad from Michigan State and a
          software engineer focused on cloud infrastructure, AI/ML, and backend
          systems.
        </p>

        <p>
          I&apos;ve completed two software engineering internships and spent my
          free time building things I&apos;d actually want to use: FlashML, a
          platform for deploying ML models as production-ready inference APIs,
          and FinForge, an AI agent for personal finance.
        </p>

        <p>
          I like working close to the infrastructure: distributed systems,
          developer platforms, and the kind of problems where performance and
          reliability actually matter.
        </p>

        <div className="about-links" aria-label="Primary Links">
          <Link href="/projects">Projects</Link>

          <a
            href="/resume/Siddarth_Akalankam_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <aside className="profile-side" aria-label="Profile Summary">
        <div className="identity-card">
          <div className="profile-photo-frame">
            <Image
              src="/images/profile-photo.jpeg"
              alt="Siddarth Akalankam"
              width={800}
              height={800}
              priority
              className="profile-photo"
            />
          </div>

          <div>
            <p className="profile-location">{profile.location}</p>
          </div>
        </div>

      </aside>
    </section>
  );
}
