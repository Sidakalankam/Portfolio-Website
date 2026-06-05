import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject } from "../../../lib/content";

export default function FlashMLPage() {
  const project = getProject("flashml");

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

const problem =
  "Deploying machine learning models is often significantly harder than building them. Students, researchers, and small teams may have a trained model ready for inference, but turning that model into a production-ready service typically requires learning cloud infrastructure, containers, APIs, GPU provisioning, storage systems, and deployment workflows. For many projects, infrastructure becomes a larger obstacle than the model itself.";

const solution =
  "I built FlashML, a cloud platform that allows developers to deploy machine learning models as scalable APIs through a simple upload workflow. After uploading an ONNX model, users receive a hosted inference endpoint that can be integrated directly into web, mobile, and backend applications. FlashML manages the underlying infrastructure, model storage, versioning, and inference execution, enabling teams to focus on building AI-powered products rather than operating machine learning infrastructure.";

const coreComponents = [
  {
    title: "User Interfaces",
    body:
      "FlashML exposes two entry points: a Next.js dashboard and a developer API. The dashboard lets users upload models, manage deployments, test inference, and create API keys. The developer API provides programmatic access to uploads, model management, and inference.",
    detail:
      "This split keeps the console useful for manual workflows while still letting external applications integrate with FlashML through authenticated API requests.",
  },
  {
    title: "FastAPI Control Plane",
    body:
      "FastAPI manages authentication, upload orchestration, model validation, version management, API key management, and routing inference requests to the correct runtime.",
    detail:
      "A key design decision is that the control plane never stores large model artifacts directly. It coordinates the model lifecycle while keeping storage and execution separated.",
  },
  {
    title: "Metadata Layer",
    body:
      "Supabase stores metadata for users, models, uploads, and API keys. It acts as the system of record for ownership, lifecycle state, and access control.",
    detail:
      "Model artifacts are intentionally stored separately in object storage, so the relational database stays focused on metadata instead of large binary files.",
  },
  {
    title: "Artifact Storage",
    body:
      "S3 stores original upload bundles such as user/uploads/model-v1.tar.gz and validated model directories such as user/models/model-v1/.",
    detail:
      "Models are extracted and validated once during upload, allowing inference runtimes to load a predictable file structure instead of re-processing arbitrary user bundles at request time.",
  },
  {
    title: "Inference Layer",
    body:
      "The current CPU runtime uses ONNX Runtime inside FastAPI for low-latency testing and lightweight inference. The GPU runtime uses RunPod workers with ONNX Runtime GPU for higher-throughput production workloads.",
    detail:
      "This keeps the platform usable for simple CPU-backed testing while leaving a clear path for heavier models to run on dedicated GPU infrastructure.",
  },
];

const modelUploadSteps = [
  "User",
  "FastAPI",
  "Generate Presigned URL",
  "Direct Upload to S3",
  "Validate Bundle",
  "Extract Files",
  "Publish Canonical Model",
  "Create Model Record",
];

const inferenceSteps = [
  "Client",
  "API Request",
  "Authentication",
  "Model Lookup",
  "Load Model",
  "Preprocess Input",
  "ONNX Runtime",
  "Postprocess Output",
  "JSON Response",
];

const designDecisions = [
  {
    title: "Why ONNX?",
    body:
      "FlashML uses ONNX because it is framework agnostic, portable, and designed for efficient runtime execution. Compared with serving native PyTorch or TensorFlow models directly, ONNX is less flexible at runtime but much easier to package, validate, and deploy consistently.",
  },
  {
    title: "Why S3 Instead of Database Storage?",
    body:
      "Models are large binary artifacts, so storing them in the database would make the metadata layer heavier and more expensive to operate. S3 provides cheaper storage, high durability, and native support for presigned uploads.",
  },
  {
    title: "Why Presigned Uploads?",
    body:
      "Instead of routing browser uploads through the backend before sending them to S3, FlashML lets the browser upload directly to S3 through a presigned URL. This lowers backend bandwidth, makes uploads faster, and scales better for large model files.",
  },
  {
    title: "Why Separate Metadata and Artifacts?",
    body:
      "Supabase stores metadata while S3 stores artifacts. This separation keeps the architecture cleaner, lets metadata queries stay simple, and allows storage and database capacity to scale independently.",
  },
  {
    title: "Why API Keys?",
    body:
      "API keys let external systems call inference endpoints without requiring an interactive user session. That supports CI/CD integration, backend-to-backend inference, and production application use cases.",
  },
];

const challenges = [
  {
    title: "Supporting Multiple Model Types",
    body:
      "Users can upload image classification, object detection, text classification, and embedding models. FlashML handles this with task-specific validation and inference handlers instead of treating every model as the same shape of problem.",
  },
  {
    title: "Safe Model Validation",
    body:
      "Users upload arbitrary files, so the validation pipeline checks that required assets exist, the model structure is correct, and metadata is valid before the model can be deployed.",
  },
  {
    title: "Large Model Files",
    body:
      "Large uploads can overwhelm application servers if every file passes through the backend. Presigned S3 uploads move the heavy transfer path directly between the browser and object storage.",
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
          FlashML is built around a control plane and data plane architecture.
          The control plane manages users, models, authentication, uploads, and
          API access, while the inference layer executes deployed ONNX models
          through CPU and GPU runtimes.
        </p>
      </section>
      <section className="architecture-section">
        <h2>System Architecture</h2>
        <figure className="architecture-figure">
          <Image
            src="/images/flashml-architecture-diagram.png"
            alt="FlashML architecture diagram showing Next.js clients, FastAPI control plane, Supabase authentication and metadata, S3 artifact storage, CPU inference, GPU inference, and RunPod workers."
            width={1536}
            height={1024}
            sizes="(max-width: 900px) calc(100vw - 36px), 900px"
          />
        </figure>
        <p>
          At a high level, FlashML separates control-plane responsibilities from
          inference execution. The control plane owns user workflows, model
          metadata, API keys, and upload lifecycle state. The inference layer
          loads validated ONNX artifacts from storage and runs them through the
          appropriate CPU or GPU runtime.
        </p>
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
        <h2>Data Flows</h2>
        <div className="flow-group">
          <div>
            <h3>Model Upload Flow</h3>
            <ol className="flow-chain">
              {modelUploadSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              The user starts an upload through the dashboard or API. FastAPI
              creates a presigned S3 URL so the model bundle can be uploaded
              directly to object storage. After upload, the backend validates the
              bundle, extracts the files, publishes a canonical model directory,
              and creates the model record that tracks ownership, versioning,
              and lifecycle state.
            </p>
          </div>
          <div>
            <h3>Inference Flow</h3>
            <ol className="flow-chain">
              {inferenceSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p>
              A client sends an authenticated inference request with an API key.
              FastAPI verifies access, looks up the target model, loads the
              validated artifact structure, normalizes the request payload,
              executes the ONNX graph, postprocesses the outputs, and returns a
              JSON response that application code can consume directly.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Key Design Decisions</h2>
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
