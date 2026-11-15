# ZYNAIDE — Intelligent AI Agent Platform
> **Pilot Application:** ZYNAIDE COCO (Multimodal AI Coconut Advisory System)  
> **Affiliation / Context:** Coconut Research Institute (CRI) Context  
> **Academic Project:** Group CS-31 | Agile Team Project 2026/27  

---

## 🌴 Overview

**ZYNAIDE** is an intelligent AI-agent deployment and orchestration platform designed to replace single-prompt black-box chatbots with structured, research-grounded autonomous agent teams.

Its flagship pilot product, **ZYNAIDE COCO**, provides a multimodal AI-powered coconut advisory and decision-support system designed for the Coconut Research Institute (CRI) context. Users describe problems affecting coconut palms and upload photographs; the system integrates **Gemini Vision 1.5** for image understanding and an approved research knowledge base to formulate verifiable, transparent recommendations or escalate high-stakes cases to qualified human agronomists.

---

## 🎨 Color Palette & Design System

The landing page implements the project's consistent, modern SaaS visual identity:

| Swatch | Color Name | Hex Code | Purpose & Usage |
|:---:|:---|:---|:---|
| 🟢 | **Deep Forest Green** | `#12372A` | Hero sections, primary dark cards, important navigation elements |
| 🟢 | **Emerald Green** | `#1E8A63` | Primary action buttons, active tabs, verified highlight badges |
| 🍃 | **Soft Mint** | `#B7E4C7` | Subtle borders, glowing accents, secondary iconography |
| 🥥 | **Warm Off-White** | `#F7F8F2` | Page background, content sections, card backdrops |
| ⬛ | **Dark Charcoal** | `#202B27` | High-contrast body typography, subtle metadata |
| 🏅 | **Muted Gold** | `#D6B56D` | Research citation stamps, high-confidence indicators, warning badges |

---

## 🏛️ Platform Architecture: The 4 Specialised Agents

Rather than querying a solitary generative model, ZYNAIDE distributes cognitive evaluation across 4 specialised agent roles:

1. **Coordinator Agent** (`Workflow Lead`):
   - Ingests incoming user inquiries, validates image resolution, and dispatches sub-tasks to specialised agents.
   - Monitors execution latency and synthesises consensus findings into structured advisory summaries.

2. **Research Agent** (`100% CRI Grounded`):
   - Queries verified Coconut Research Institute (CRI) publications, pathology monographs, and disease compendia.
   - Prohibits hallucinated remedies by grounding every management instruction in peer-reviewed science.

3. **Feasibility Agent** (`Context Aware`):
   - Evaluates management options against practical estate constraints: rainfall zones, tree age, soil type, and organic farming regulations.
   - Recommends only interventions that are realistically executable by the grower.

4. **Review Agent** (`Quality & Safety Auditor`):
   - Audits citation accuracy, uncertainty ratings, and potential chemical toxicity risks.
   - **Safety Gate:** Flags uncertain or lethal pathogens (e.g. Phytophthora Bud Rot) for immediate human escalation to certified CRI extension agronomists.

---

## 🔄 The 6-Stage Orchestration Workflow

1. **Stage 01 — User Intake:** User submits an inquiry describing symptoms and optionally uploads palm photographs.
2. **Stage 02 — Gemini Vision Examination:** Multimodal feature extraction classifies lesions, chlorosis, and damage patterns.
3. **Stage 03 — Research Grounding:** Research Agent retrieves matching literature from the CRI repository.
4. **Stage 04 — Feasibility Assessment:** Feasibility Agent assesses regional climate, plantation scale, and treatment availability.
5. **Stage 05 — Quality & Safety Audit:** Review Agent validates evidence thresholds and determines if human escalation is required.
6. **Stage 06 — Actionable Outcome:** User receives a transparent, cited advisory or an automated referral ticket to CRI experts.

---

## 🚀 Future Vision Roadmap

- **Phase 01: Zynaide Coco** *(Current Pilot)* — Focused coconut disease diagnostics and advisory for the CRI context.
- **Phase 02: Enterprise AI** *(Future Goal)* — Configurable multi-agent orchestration for agricultural enterprises and cooperatives.
- **Phase 03: AI Agent Marketplace** *(Future Goal)* — A catalogue of validated, peer-reviewed AI agents developed by global research institutions.
- **Phase 04: Intelligent Ecosystem** *(Future Goal)* — Comprehensive edge-to-cloud network integrating IoT sensors and autonomous agricultural machinery.

*(Note: Phases 02–04 represent proposed future development targets, not currently active services).*

---

## 💻 Running the Landing Page

### Option A: Instant Browser Launch (Zero-Setup Preview)
Simply double-click or open `standalone.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). It includes all custom styles, typography, full SVG illustrations, interactive agent selectors, workflow steppers, and the live simulation modal.

```powershell
start standalone.html
```

### Option B: Modern Vite + React Development Server
To run as a full modular React application:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 👥 Academic Attribution
- **Project Team:** Group CS-31
- **Coursework:** Agile Team Project 2026/27
- **Institution / Domain:** Coconut Research Institute (CRI) Context
