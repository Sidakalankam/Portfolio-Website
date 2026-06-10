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

export type Experience = {
  title: string;
  role: string;
  organization: string;
  location: string;
  dates: string;
  stack: string[];
  impact: string;
  problem: string;
  contribution: string;
  highlights: string[];
};

export const profile = {
  name: "Siddarth Akalankam",
  title:
    "I build cloud-native applications, AI systems, and machine learning infrastructure.",
  location: "Troy, Michigan, United States",
  email: "sidaka.business@gmail.com",
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
  { label: "Contact", href: "/contact" },
];
export const projects: Project[] = [
  {
    slug: "flashml",
    name: "FlashML",
    subtitle: "Infrastructure for production-ready model APIs",
    summary:
      "A platform for deploying ML models and instantly generating production-ready inference APIs without managing infrastructure.",
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
      "An AI agent for personal finance that analyzes spending data, generates personalized briefings, and answers questions about your finances, all from your inbox.",
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

export const experiences: Experience[] = [
  {
    title: "Amazon",
    role: "Capstone Software Engineer",
    organization: "Michigan State University × Amazon",
    location: "East Lansing, MI",
    dates: "Jan. 2026 - Apr. 2026",
    stack: [
      "AWS",
      "Java",
      "EventBridge",
      "Lambda",
      "DynamoDB",
      "IAM",
      "SageMaker",
      "CloudWatch",
      "Time-series anomaly detection",
    ],
    impact: "Reduced manual monitoring by 2+ hours daily",
    problem:
      "Engineering teams monitoring AWS environments often need to reason across multiple services, accounts, regions, metrics, dashboards, and logs before they can identify what happened and where to start troubleshooting.",
    contribution:
      "Developed an observability platform that automated anomaly detection across multiple AWS services, accounts, and regions. Built Java backend services and a serverless metric ingestion pipeline using EventBridge, Lambda, and DynamoDB, collected metrics through cross-account IAM role assumption, integrated SageMaker for live time-series anomaly detection, and designed a triage interface with direct CloudWatch links to specific timestamps.",
    highlights: [
      "Reduced manual monitoring for engineering teams by 2+ hours daily.",
      "Collected metrics across AWS accounts through cross-account IAM role assumption.",
      "Cut log investigation scope from 10,000+ logs to 50 with targeted CloudWatch links.",
    ],
  },
  {
    title: "Altair",
    role: "AI Engineering Intern",
    organization: "Altair",
    location: "Troy, MI",
    dates: "May 2025 - Aug. 2025",
    stack: [
      "Azure",
      "NVIDIA Jetson",
      "TensorRT",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "Microservices",
      "GPU inference",
    ],
    impact: "Reduced inference latency from 4s to 100ms",
    problem:
      "Data scientists needed a reliable way to deploy machine learning models to both Azure cloud infrastructure and NVIDIA Jetson edge devices without taking on container orchestration, hardware acceleration, and production API concerns.",
    contribution:
      "Shipped a production API that enabled seamless ML model deployment to cloud and edge environments. Reduced inference latency by moving serving from CPU to GPU with TensorRT, adding in-memory model caching, and prewarming inference workers to eliminate cold starts. Integrated the platform into Altair's microservice architecture with RabbitMQ, Docker, and Kubernetes.",
    highlights: [
      "Enabled ML model deployment to Azure cloud infrastructure and NVIDIA Jetson edge devices.",
      "Reduced inference latency from 4s to 100ms with TensorRT GPU serving, caching, and worker prewarming.",
      "Integrated async microservice workflows with RabbitMQ, Docker, and Kubernetes.",
    ],
  },
  {
    title: "YouLearn AI",
    role: "Software Engineering Intern",
    organization: "YouLearn AI",
    location: "Remote",
    dates: "Sep. 2023 - Dec. 2023",
    stack: [
      "OpenAI API",
      "Redis",
      "MongoDB",
      "Docker",
      "Google Cloud Run",
      "Pytest",
      "Vector search",
      "LLM orchestration",
    ],
    impact: "Reduced API latency by 40%",
    problem:
      "A study material chatbot needed faster responses and more reliable backend workflows for repeated vector queries, conversation history, context retrieval, and LLM orchestration.",
    contribution:
      "Reduced API latency by implementing Redis caching for frequent vector queries, designed MongoDB schemas for conversation history, containerized backend services with Docker, and deployed them to Google Cloud Run to autoscale conversational workloads. Built automated integration and end-to-end tests with Pytest to validate context retrieval accuracy, database queries, and LLM orchestration workflows.",
    highlights: [
      "Reduced chatbot API latency by 40% with Redis caching for frequent vector queries.",
      "Deployed containerized backend services to Google Cloud Run for autoscaling workloads.",
      "Built automated integration and E2E tests for retrieval, database, and LLM workflows.",
    ],
  },
];

export function getProject(slug: ProjectSlug) {
  return projects.find((project) => project.slug === slug);
}
