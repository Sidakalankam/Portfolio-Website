import Link from "next/link";
import { PageHeader } from "../../components/PageHeader";
import { profile } from "../../lib/content";

type ContactIcon = "mail" | "linkedin" | "github" | "resume";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
    note: "For roles, scheduling, or project questions.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/siddarth-akalankam",
    href: profile.linkedin,
    icon: "linkedin",
    note: "Professional profile and work history.",
  },
  {
    label: "GitHub",
    value: "github.com/Sidakalankam",
    href: profile.github,
    icon: "github",
    note: "Project repositories and code samples.",
  },
  {
    label: "Resume",
    value: "Siddarth_Akalankam_Resume_2026.pdf",
    href: "/resume/Siddarth_Akalankam_Resume_2026.pdf",
    icon: "resume",
    note: "PDF version of my resume.",
  },
] satisfies {
  label: string;
  value: string;
  href: string;
  icon: ContactIcon;
  note: string;
}[];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title="Contact"
        description="You can reach me by email or use the links below for LinkedIn, GitHub, and my resume."
      />

      <section className="section compact-top contact-layout">
        <article className="contact-feature">
          <span className="contact-icon-wrap email">
            <ContactIconSvg icon="mail" />
          </span>
          <p className="section-label">Email</p>
          <h2>Send a Message</h2>
          <p>
            For recruiting, interview scheduling, or questions about my work,
            email is the simplest way to get in touch.
          </p>
          <a className="contact-primary-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </article>

        <div className="contact-list">
          {contactLinks.map((item) => {
            const isExternal = item.href.startsWith("http");
            const isEmail = item.href.startsWith("mailto:");

            return (
              <article className="contact-card" key={item.label}>
                <span className={`contact-icon-wrap ${item.icon}`}>
                  <ContactIconSvg icon={item.icon} />
                </span>
                <div>
                  <p className="card-meta">{item.label}</p>
                  {isExternal || isEmail ? (
                    <a
                      className="contact-link"
                      href={item.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <Link className="contact-link" href={item.href}>
                      {item.value}
                    </Link>
                  )}
                  <p className="contact-note">{item.note}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ContactIconSvg({ icon }: { icon: ContactIcon }) {
  if (icon === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.8 9.1H3.6v10.3h3.2V9.1ZM5.2 4.1a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm14.4 9.4c0-3.1-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V9.1H9.4v10.3h3.2v-5.1c0-1.4.3-2.7 2-2.7 1.6 0 1.7 1.5 1.7 2.8v5h3.2v-5.9Z" />
      </svg>
    );
  }

  if (icon === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1A9.7 9.7 0 0 1 12 6c.9 0 1.8.1 2.6.4 2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.8.7.8 1.1 1.7 1.1 2.8 0 4-2.4 4.9-4.7 5.2.4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.7Z" />
      </svg>
    );
  }

  if (icon === "resume") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6.5 3.5h7.2l3.8 3.8v13.2h-11V3.5Zm6.4 1.7v3h3l-3-3Zm-3.8 7h5.8v-1.6H9.1v1.6Zm0 3.2h5.8v-1.6H9.1v1.6Zm0 3.2h3.9V17H9.1v1.6Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 6.5h16v11H4v-11Zm2.2 1.7 5.8 4.2 5.8-4.2H6.2Zm11.9 7.6v-5.5l-6.1 4.4-6.1-4.4v5.5h12.2Z" />
    </svg>
  );
}
