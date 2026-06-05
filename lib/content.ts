export type ProjectSlug = "flashml" | "finforge";

export type Project = {
  slug: ProjectSlug;
  name: string;
  subtitle: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  links: {
    label: string;
    href: string;
  }[];
};

export const profile = {
  name: "Siddarth Akalankam",
  title:
    "I build cloud-native applications, AI systems, and machine learning infrastructure.",
  location: "Troy, Michigan, United States",
  email: "Sidaka.business@gmail.com",
  github: "https://github.com/Sidakalankam",
  linkedin: "https://www.linkedin.com/in/siddarth-akalankam",
};

export const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  {
    label: "Resume",
    href: "/resume/Siddarth_Akalankam_Resume_2026.pdf",
    external: true,
  },
];
export const projects: Project[] = [
  {
    slug: "flashml",
    name: "FlashML",
    subtitle: "Infrastructure for production-ready model APIs",
    summary:
      "A platform for deploying ONNX models and instantly generating production-ready inference APIs without managing infrastructure.",
    role: "ML Infrastructure",
    stack: [
      "Next.js",
      "FastAPI",
      "ONNX Runtime",
      "AWS ECS",
      "AWS S3",
      "PostgreSQL",
      "RunPod Serverless",
    ],
    highlights: [
      "Turns trained ONNX models into deployable inference endpoints.",
      "Keeps deployment, API generation, and runtime concerns in one workflow.",
      "Focuses on reducing infrastructure work for model builders.",
    ],
    links: [{ label: "Live Site", href: "https://flashml.dev" }],
  },
  {
    slug: "finforge",
    name: "FinForge",
    subtitle: "AI Agent for Personal Finance",
    summary:
      "An AI agent for personal finance that analyzes spending data, generates personalized briefings, and answers questions about your finances.",
    role: "Agentic AI",
    stack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Plaid",
      "Claude API",
      "AWS Lambda",
      "AWS SQS",
      "PostgreSQL",
      "Pinecone",
    ],
    highlights: [
      "Transforms transaction data into personalized financial context.",
      "Generates briefings that summarize spending patterns and next actions.",
      "Uses natural-language interaction to help users reason about personal finances.",
    ],
    links: [{ label: "Live Site", href: "https://finforgeai.app" }],
  },
];

export const experiences = [
  {
    title: "Amazon",
    role: "Capstone Software Engineer",
    organization: "Michigan State University × Amazon",
    stack: [
      "AWS",
      "Time-series analysis",
      "Anomaly detection",
      "Incident triage",
    ],
    impact: "Saved engineering teams 2+ hours per day",
    problem:
      "Engineering teams often rely on multiple dashboards, metrics, and logs to understand system health. Investigating anomalies can require manually searching across several tools before engineers can determine what happened and where to begin troubleshooting.",
    contribution:
      "Helped build an observability and anomaly triage platform for AWS environments that centralized monitoring and investigation workflows across resources deployed in multiple regions and accounts. The platform automated metric collection and machine learning–based anomaly detection, analyzed dashboard screenshots for visual anomalies, prioritized findings based on severity, and provided direct access to relevant logs and operational context, enabling engineers to identify and investigate potential issues from a single interface.",
  },
  {
    title: "Altair",
    role: "Software Engineering Intern",
    organization: "Altair",
    stack: [
      "Azure",
      "Cloud model deployment",
      "Production APIs",
      "NVIDIA Jetson",
      "Edge model deployment",
      "Microservices",
    ],
    impact: "Reduced inference latency to near real-time",
    problem:
      "Data scientists often have strong models but lack the infrastructure expertise required to deploy them reliably to cloud environments and edge devices.",
    contribution:
      "Created a deployment platform that helped data scientists ship machine learning models to Azure cloud environments and NVIDIA Jetson edge devices without managing Kubernetes, containers, networking, or hardware acceleration. Built production APIs, optimized Jetson inference pipelines, and integrated the platform into Altair's microservice ecosystem.",
  },
  {
    title: "RecycleMe",
    role: "ML Software Engineering Intern",
    organization: "RecycleMe",
    stack: [
      "Computer vision",
      "Model deployment",
      "Mobile integration",
      "On-device inference",
    ],
    impact: "Automated recyclable material classification",
    problem:
      "Recycling decisions are often manual and unclear, making it harder for users to quickly identify materials and dispose of them correctly.",
    contribution:
      "Deployed computer vision models that classified recyclable materials and integrated predictions into a mobile application. Moving inference closer to the user improved response times, reduced reliance on external services, and replaced manual classification with automated image-based predictions.",
  },
];

export function getProject(slug: ProjectSlug) {
  return projects.find((project) => project.slug === slug);
}
