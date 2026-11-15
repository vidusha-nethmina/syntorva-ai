export const BRAND = {
  name: "ZYNELO",
  fullName: "ZYNELO — Intelligent AI Agent Platform",
  pilotProduct: "ZYNELO COCO",
  pilotSubtitle: "Multimodal AI-Powered Coconut Advisory & Decision-Support System",
  institute: "Coconut Research Institute (CRI) Context",
  tagline: "Intelligence for Agriculture. Innovation for Tomorrow.",
  heroDescription:
    "Meet Zynelo Coco, an intelligent AI-powered coconut advisory system combining image understanding, trusted agricultural research and specialised AI agents to support better decision-making.",
  academicCredit: "Group CS-31 | Agile Team Project 2026/27",
  copyright: "© 2026/27 ZYNELO Platform. All rights reserved."
};

export const AGENTS = [
  {
    id: "coordinator",
    name: "Coordinator Agent",
    role: "Workflow & Orchestration",
    description: "Directs incoming queries, delegates tasks to specialised sub-agents, monitors progress, and synthesises final responses.",
    iconName: "Compass",
    badge: "Core Orchestrator",
    metrics: "< 350ms dispatch",
    accent: "#1E8A63"
  },
  {
    id: "research",
    name: "Research Agent",
    role: "Literature & Document Retrieval",
    description: "Queries vetted Coconut Research Institute (CRI) repositories, agricultural bulletins, and peer-reviewed pathology documents.",
    iconName: "BookOpenCheck",
    badge: "Grounded Knowledge",
    metrics: "100% CRI Grounded",
    accent: "#12372A"
  },
  {
    id: "feasibility",
    name: "Feasibility Agent",
    role: "Contextual & Practical Evaluation",
    description: "Evaluates recommendations against the grower's regional climate, soil conditions, plantation scale, and treatment availability.",
    iconName: "SlidersHorizontal",
    badge: "Context Aware",
    metrics: "Actionable & Practical",
    accent: "#D6B56D"
  },
  {
    id: "review",
    name: "Review Agent",
    role: "Evidence & Quality Verification",
    description: "Audits citation validity, checks uncertainty metrics, and ensures uncertain or high-stakes cases trigger expert human referral.",
    iconName: "ShieldCheck",
    badge: "Safety & Governance",
    metrics: "Double-Audit Protocol",
    accent: "#1E8A63"
  }
];

export const CORE_FEATURES = [
  {
    id: "image-analysis",
    title: "AI-Powered Image Analysis",
    description: "Analyse uploaded coconut plant photographs and identify preliminary visual symptoms with multimodal Gemini Vision precision.",
    highlights: ["Spear leaf & crown inspection", "Trunk bleeding detection", "Nut & button fall pattern recognition"],
    iconName: "ScanSearch",
    metric: "Multimodal Gemini Vision"
  },
  {
    id: "research-grounded",
    title: "Research-Grounded Intelligence",
    description: "Retrieve relevant information from approved agricultural research documents, ensuring advice is verified rather than hallucinated.",
    highlights: ["Coconut Research Institute (CRI) archives", "Pathology diagnostic keys", "Preventative cultural management guides"],
    iconName: "FileCheck2",
    metric: "CRI Research Grounded"
  },
  {
    id: "agent-collaboration",
    title: "Intelligent Agent Collaboration",
    description: "Coordinate specialised agents to analyse, assess and review user inquiries collaboratively before returning actionable advice.",
    highlights: ["Parallel agent execution", "Context-driven feasibility scoring", "Cross-agent consensus verification"],
    iconName: "Network",
    metric: "4 Specialized Agents"
  },
  {
    id: "decision-support",
    title: "Reliable Decision Support",
    description: "Provide transparent answers with source references, uncertainty indicators and expert referral when cases require human agronomy intervention.",
    highlights: ["Exact document page citations", "Confidence interval ratings", "Human-in-the-loop agronomist escalation"],
    iconName: "GraduationCap",
    metric: "Transparent & Safe"
  }
];

export const WORKFLOW_STAGES = [
  {
    step: 1,
    title: "Inquiry & Image Submission",
    summary: "User submits a coconut-related inquiry and optionally uploads an image.",
    detail: "Growers, extension officers, or agronomists upload symptoms (e.g., yellowing fronds, stem exudates) along with tree age and soil context.",
    tag: "User Input",
    iconName: "Camera"
  },
  {
    step: 2,
    title: "Gemini Vision Examination",
    summary: "Gemini Vision examines visible symptoms.",
    detail: "The computer vision module extracts leaf chlorosis vectors, lesion boundaries, trunk fissures, and pest damage indicators with bounding confidence.",
    tag: "Multimodal AI",
    iconName: "Eye"
  },
  {
    step: 3,
    title: "Research Agent Retrieval",
    summary: "Research Agent retrieves relevant approved research.",
    detail: "Vector search queries indexed CRI advisory bulletins, scientific monographs, and certified disease management compendiums for matching symptom profiles.",
    tag: "Knowledge Base",
    iconName: "Library"
  },
  {
    step: 4,
    title: "Contextual Feasibility Assessment",
    summary: "Feasibility Agent considers the user's context.",
    detail: "Matches candidate management strategies with the user's regional climate, farm scale, organic certification constraints, and season.",
    tag: "Context Filter",
    iconName: "Filter"
  },
  {
    step: 5,
    title: "Rigorous Evidence Review",
    summary: "Review Agent checks evidence and response quality.",
    detail: "Validates citations, verifies safety thresholds, and flags borderline or high-risk cases that require expert human verification.",
    tag: "Quality Guard",
    iconName: "ShieldAlert"
  },
  {
    step: 6,
    title: "Informed Response or Expert Referral",
    summary: "The user receives a research-backed response or an expert referral.",
    detail: "A transparent advisory summary is delivered with references and treatment timing, or automatically routed to a certified CRI agronomist.",
    tag: "Actionable Outcome",
    iconName: "CheckCircle2"
  }
];

export const ROADMAP_PHASES = [
  {
    phase: "Phase 01",
    name: "Zynelo Coco",
    status: "Pilot Application",
    isCurrent: true,
    tagline: "Focused Agricultural Advisory",
    description: "Focused coconut advisory system built specifically for the Coconut Research Institute (CRI) context, addressing critical disease diagnostics and grower decision support.",
    milestones: [
      "Gemini Vision symptom detection pipeline",
      "CRI research document grounding engine",
      "4-agent collaborative orchestration protocol",
      "Expert human escalation triage system"
    ]
  },
  {
    phase: "Phase 02",
    name: "Enterprise AI",
    status: "Future Development Goal",
    isCurrent: false,
    tagline: "Configurable Intelligent Agents for Organisations",
    description: "Expanding the underlying orchestration engine to enable enterprise agricultural bodies, cooperatives, and commercial estates to deploy custom agent workflows.",
    milestones: [
      "Custom domain knowledge ingestion",
      "Role-based multi-agent policy designer",
      "Telemetry and compliance auditing suites",
      "Localized agronomic data connectors"
    ]
  },
  {
    phase: "Phase 03",
    name: "AI Agent Marketplace",
    status: "Future Development Goal",
    isCurrent: false,
    tagline: "A Catalogue of Validated AI Agents",
    description: "A centralized marketplace of peer-reviewed, domain-certified agents developed by research institutes, universities, and ag-tech innovators globally.",
    milestones: [
      "Standardized Agent Interaction Protocol (AIP)",
      "Peer-reviewed safety and accuracy benchmarking",
      "One-click multi-agent composition",
      "Monetization & attribution for research bodies"
    ]
  },
  {
    phase: "Phase 04",
    name: "Intelligent Ecosystem",
    status: "Future Development Goal",
    isCurrent: false,
    tagline: "A Wider Ecosystem for Organisations & Developers",
    description: "A comprehensive cross-industry autonomous agent network connecting Internet of Things (IoT) field sensors, satellite spectral feeds, and autonomous machinery.",
    milestones: [
      "Autonomous edge-to-cloud agent consensus",
      "Cross-sector supply chain intelligence",
      "Open SDK for third-party agronomy developers",
      "Global climate adaptation modeling"
    ]
  }
];

export const SIMULATED_CASES = [
  {
    id: "coconut-mite",
    title: "Coconut Aceria Mite Damage",
    scientificName: "Aceria guerreronis Keifer",
    symptomSummary: "Triangular pale patches near perianth evolving into brown suberized wart-like patches.",
    confidence: "94.8% Match",
    urgency: "Moderate",
    recommendation: "Apply recommended botanical neem oil-garlic emulsion (2%) or biopesticide spray directed at young nut bunches (1-4 months old).",
    researchSource: "CRI Advisory Leaflet No. 34 (Pest Management Series)",
    agentFindings: {
      coordinator: "Dispatched vision extraction and matching against CRI Arthropod Compendium.",
      research: "Retrieved CRI Leaflet #34; verified Aceria guerreronis feeding patterns on juvenile nuts.",
      feasibility: "Organic certified farm friendly. Local spraying equipment compatible.",
      review: "Confidence exceeds 90%; citations verified against CRI standard; no toxicity conflict."
    }
  },
  {
    id: "bud-rot",
    title: "Phytophthora Bud Rot",
    scientificName: "Phytophthora palmivora",
    symptomSummary: "Yellowing and wilting of the spear leaf followed by necrosis and central whorl rotting.",
    confidence: "91.2% High Risk",
    urgency: "Critical — Expert Referral Recommended",
    recommendation: "Immediate isolation. Apply Bordeaux paste (10%) or Metalaxyl to the crown base. High stakes: Flagged for direct CRI Field Officer inspection.",
    researchSource: "CRI Bulletin 112: Fatal Crown Pathology Guidelines",
    agentFindings: {
      coordinator: "Prioritized as high-severity pathogenic alert.",
      research: "Identified Phytophthora palmivora symptoms with wet rot smell indicator.",
      feasibility: "Requires immediate fungicide application before next monsoon cycle.",
      review: "HIGH STAKES DETECTED: Automatically triggered CRI Agronomist referral ticket #CRI-2026-884."
    }
  },
  {
    id: "potassium-deficiency",
    title: "Potassium (K) Leaf Scorch",
    scientificName: "Physiological Nutrient Disorder",
    symptomSummary: "Orange-yellow translucent spotting and marginal necrosis on older fronds.",
    confidence: "96.4% Match",
    urgency: "Low - Nutritional",
    recommendation: "Soil application of Muriate of Potash (MOP) at 1.5 - 2.0 kg/palm/year split across two rainy seasons with organic mulching.",
    researchSource: "CRI Soils & Plant Nutrition Circular Vol. 18",
    agentFindings: {
      coordinator: "Correlated soil questionnaire data with frond image color spectrum.",
      research: "Matched typical leaf necrosis symptoms from CRI Soils Circular Vol. 18.",
      feasibility: "MOP fertilizer readily available through local agrarian services centers.",
      review: "Dosage adheres strictly to soil fertility recommendations for intermediate rainfall zones."
    }
  }
];
