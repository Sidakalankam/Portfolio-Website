import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "../../../lib/content";

export default function FinForgePage() {
  const project = getProject("finforge");

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

const problem =
  "Most personal finance apps are passive. You can view transactions and budgets, but you're still responsible for spotting patterns, identifying problems, and deciding what to do. Even apps that surface insights require you to open them and go looking. Important trends and spending behaviors go unnoticed between sessions.";

const solution =
  "FinForge is a personal finance platform that proactively monitors your financial activity and delivers personalized insights based on live banking data. By connecting to financial accounts through Plaid, it continuously analyzes transactions, spending patterns, and account activity to generate briefings tailored to you. Unlike traditional finance apps, FinForge combines a web dashboard with an agentic AI experience. You can review your financial data and briefings through the app, receive scheduled updates in your inbox, and reply to any email to continue the conversation with the AI agent. Financial guidance delivered through a channel you already use, without having to repeatedly open another app.";

const highLevelFlow = [
  "Users connect their financial accounts through Plaid.",
  "Transaction and account data is stored in PostgreSQL.",
  "The AI agent retrieves relevant financial context and memory.",
  "Personalized briefings are generated and delivered through email and the dashboard.",
  "Users can continue the conversation through email replies or the web interface.",
];

const coreComponents = [
  {
    title: "FastAPI Backend",
    body:
      "FastAPI acts as the orchestration layer for the product. It exposes API endpoints, protects authenticated user workflows, coordinates the AI agent, processes financial data, and starts scheduled briefing workflows.",
    detail:
      "I chose FastAPI because it gives the backend a strongly typed, async-friendly foundation while keeping API development lightweight. That mattered for a system that talks to external services like Plaid, Claude, Resend, PostgreSQL, Pinecone, and AWS workers.",
  },
  {
    title: "Data Layer",
    body:
      "PostgreSQL stores structured product data such as accounts, transactions, briefings, conversations, and user preferences. Pinecone stores agent memory, past conversation context, financial insight embeddings, and semantic search indexes.",
    detail:
      "I separated relational data from vector data because they serve different access patterns. PostgreSQL is the source of truth for transactional records and user-owned entities, while Pinecone is optimized for semantic retrieval when the agent needs long-term memory or similar past context.",
  },
  {
    title: "AI Agent",
    body:
      "The AI layer uses Claude to reason over financial context, memory, and user requests. Before generating a response, the agent builds context from current account data, recent transactions, saved insights, and relevant prior conversations.",
    detail:
      "This makes the workflow agentic rather than a single prompt over raw data. The agent retrieves memory, constructs context, uses tools for financial data access, and produces responses that are grounded in the user's actual financial state.",
  },
  {
    title: "Async Processing",
    body:
      "EventBridge schedules recurring jobs, SQS buffers work, and Lambda workers process background tasks such as briefing generation. This keeps long-running financial analysis outside of request-response paths.",
    detail:
      "Scheduled financial briefings can take several seconds to generate. Rather than blocking API requests, jobs are processed asynchronously through a queue-based architecture.",
  },
];

const scheduledBriefingSteps = [
  "EventBridge",
  "SQS",
  "Lambda Worker",
  "Plaid Data Retrieval",
  "Agent Analysis",
  "Store Briefing",
  "Send Email",
];

const emailConversationSteps = [
  "User Reply",
  "Resend Webhook",
  "FastAPI",
  "Retrieve Context",
  "Claude Agent",
  "Generate Response",
  "Email User",
];

const designDecisions = [
  {
    title: "Why Email Instead of Chat?",
    body:
      "Email makes FinForge proactive instead of purely session-based. Users do not need to open another app to receive insights, and replies become a natural continuation of the financial briefing thread.",
  },
  {
    title: "Why Use Plaid?",
    body:
      "Plaid provides a standardized way to connect bank accounts, retrieve transactions, and access account data across financial institutions. That lets FinForge focus on analysis and user experience instead of building custom bank integrations.",
  },
  {
    title: "Why Separate Pinecone and PostgreSQL?",
    body:
      "PostgreSQL stores structured financial records, user preferences, briefings, and conversations. Pinecone stores semantic memory and embeddings. Keeping them separate lets relational queries and vector retrieval use the storage systems best suited to each access pattern.",
  },
  {
    title: "Why EventBridge + SQS?",
    body:
      "EventBridge handles time-based briefing schedules, while SQS buffers jobs before worker execution. This makes scheduled workflows more reliable and prevents slow agent generation from blocking API requests.",
  },
  {
    title: "Why Claude Instead of OpenAI?",
    body:
      "Claude was a strong fit for long-form financial reasoning, natural conversation, and instruction-following around user-specific context. The tradeoff is that the agent layer should remain provider-agnostic enough to support a different model if cost, latency, or quality requirements change.",
  },
  {
    title: "Why Agent Memory?",
    body:
      "Personal finance is contextual. Agent memory lets FinForge connect new questions to prior briefings, spending patterns, and user preferences instead of treating every interaction as a blank conversation.",
  },
];

const challenges = [
  {
    title: "Maintaining Conversation Context",
    body:
      "Users may reference spending habits, goals, or prior advice from months ago. FinForge addresses this with vector memory retrieval in Pinecone, pulling only the most relevant prior context into the current agent response.",
  },
  {
    title: "Delivering Briefings Reliably",
    body:
      "Users expect scheduled briefings to arrive at specific times. EventBridge triggers the schedule, SQS buffers the work, and background workers generate briefings without depending on an active user session.",
  },
  {
    title: "Managing Token Costs",
    body:
      "Sending every transaction and conversation to the LLM would be expensive and noisy. FinForge reduces cost by retrieving only relevant financial context, memory, and recent activity needed for the current briefing or reply.",
  },
];

function ProjectDetail({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  return (
    <article className="project-detail">
      <header>
        <p className="kicker">{project.role}</p>
        <h1>{project.name}</h1>
        <p>{project.subtitle}</p>
      </header>
      <section>
        <h2>Problem</h2>
        <p>{problem}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p>{solution}</p>
      </section>
      <section>
        <h2>Tech Stack</h2>
        <ul className="tag-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="deep-dive-section">
        <h2>Deep Dive</h2>
        <p>
          FinForge is built around an agentic architecture that combines live
          banking data, long-term memory, scheduled workflows, and email-based
          interactions. The system is designed to proactively deliver financial
          insights while allowing users to continue conversations through
          natural language.
        </p>
      </section>
      <section className="architecture-section">
        <h2>System Architecture</h2>
        <figure className="architecture-figure">
          <Image
            src="/images/finforge-ai-architecture.webp"
            alt="FinForge AI architecture diagram showing user interfaces, FastAPI backend, Supabase authentication, PostgreSQL, Pinecone, Plaid, Claude, Resend, EventBridge, SQS, and Lambda workers."
            width={1344}
            height={896}
            sizes="(max-width: 900px) calc(100vw - 36px), 900px"
          />
        </figure>
        <div className="detail-copy">
          <h3>High-Level Flow</h3>
          <ol className="detail-list">
            {highLevelFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section>
        <h2>Core Components</h2>
        <div className="component-grid">
          {coreComponents.map((component) => (
            <article className="component-card" key={component.title}>
              <h3>{component.title}</h3>
              <p>{component.body}</p>
              <p>{component.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>Data Flow</h2>
        <div className="flow-group">
          <div>
            <h3>Scheduled Briefing Generation</h3>
            <ol className="flow-chain">
              {scheduledBriefingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              EventBridge triggers recurring briefing schedules and places work
              onto SQS. A Lambda worker consumes each job, retrieves fresh Plaid
              account and transaction data, asks the agent to analyze the latest
              financial context, stores the generated briefing, and sends it to
              the user through Resend.
            </p>
          </div>
          <div>
            <h3>Email Conversation Flow</h3>
            <ol className="flow-chain">
              {emailConversationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              When a user replies to a briefing email, Resend forwards the
              inbound message to a webhook. FastAPI identifies the conversation,
              retrieves relevant user context and agent memory, sends that
              context to Claude, stores the response, and emails the answer back
              so the thread can continue naturally.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Design Decisions</h2>
        <div className="component-grid">
          {designDecisions.map((decision) => (
            <article className="component-card" key={decision.title}>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>Challenges</h2>
        <div className="component-grid">
          {challenges.map((challenge) => (
            <article className="component-card" key={challenge.title}>
              <h3>{challenge.title}</h3>
              <p>{challenge.body}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
