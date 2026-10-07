/**
 * ==============================================================================
 * AGENT FORGE - Centralized Event Configuration
 * Organized by Google Developer Student Clubs · Sri Sairam Engineering College
 * ==============================================================================
 */

export const EVENT_NAME = "AGENT FORGE";
export const WORKSHOP_TOPIC = "Multi-Agent Implementation & Orchestration Using CrewAI";
export const RESOURCE_PERSON = "Mohammed Al Riyaz D";
export const RESOURCE_PERSON_DESIGNATION = "AI Generalist";
export const RESOURCE_PERSON_COMPANY = "Dell Technologies";
export const ORGANIZER = "Google Developer Student Clubs";
export const INSTITUTION = "Sri Sairam Engineering College";

/**
 * REGISTRATION_FORM_URL
 * Centralized configuration variable for the entire application.
 * All registration buttons reference this single source of truth.
 */
export const REGISTRATION_FORM_URL = "YOUR_REGISTRATION_FORM_URL";

/**
 * Configurable Event Logistics
 * Set to null when not yet announced. Unconfigured values are cleanly hidden in the UI
 * to avoid displaying any fabricated or misleading information.
 */
export const EVENT_DATE: string | null = null;
export const EVENT_TIME: string | null = null;
export const EVENT_VENUE: string | null = null;
export const REGISTRATION_DEADLINE: string | null = null;

export const EVENT_CONFIG = {
  eventName: EVENT_NAME,
  eventType: "Hands-on AI Workshop",
  eventYear: "2026",
  eyebrow: "AI WORKSHOP · 2026",
  topic: WORKSHOP_TOPIC,
  description: "Build intelligent multi-agent systems, orchestrate autonomous AI agents, and transform complex tasks into collaborative AI workflows using CrewAI.",
  technology: "CrewAI",
  focus: "Multi-Agent AI",
  organizer: ORGANIZER,
  institution: INSTITUTION,
  resourcePerson: {
    name: RESOURCE_PERSON,
    designation: RESOURCE_PERSON_DESIGNATION,
    company: RESOURCE_PERSON_COMPANY,
    supportingText: "Learn practical approaches to building, coordinating, and orchestrating intelligent multi-agent systems using CrewAI."
  },
  registrationFormUrl: REGISTRATION_FORM_URL,
  eventDate: EVENT_DATE,
  eventTime: EVENT_TIME,
  eventVenue: EVENT_VENUE,
  registrationDeadline: REGISTRATION_DEADLINE
};

export const isRegistrationUrlConfigured = (): boolean => {
  const url: string = REGISTRATION_FORM_URL;
  return (
    Boolean(url) &&
    url !== "YOUR_REGISTRATION_FORM_URL" &&
    (url.startsWith("http://") || url.startsWith("https://"))
  );
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Workshop", href: "#about" },
  { label: "CrewAI", href: "#why-crewai" },
  { label: "Learning", href: "#learning" },
  { label: "Resource Person", href: "#resource-person" },
  { label: "FAQ", href: "#faq" },
];

export const EVENT_INFO_STRIP = [
  {
    label: "WORKSHOP",
    value: "Hands-on AI Workshop"
  },
  {
    label: "TECHNOLOGY",
    value: "CrewAI"
  },
  {
    label: "FOCUS",
    value: "Multi-Agent AI"
  },
  {
    label: "RESOURCE PERSON",
    value: RESOURCE_PERSON
  },
  {
    label: "COMPANY",
    value: RESOURCE_PERSON_COMPANY
  },
  {
    label: "ORGANIZER",
    value: ORGANIZER
  }
];

export const ABOUT_CARDS = [
  {
    number: "01",
    title: "DESIGN",
    description: "Define specialized AI agents with clear roles and goals."
  },
  {
    number: "02",
    title: "ORCHESTRATE",
    description: "Coordinate multiple agents through structured workflows."
  },
  {
    number: "03",
    title: "EXECUTE",
    description: "Build practical multi-agent applications using CrewAI."
  }
];

export const WORKFLOW_STAGES = [
  {
    id: "goal",
    step: "01",
    label: "USER GOAL",
    role: "System Input",
    desc: "Defines the objective, context, and operational parameters for the crew.",
    googleColor: "#4285F4" // Blue
  },
  {
    id: "planner",
    step: "02",
    label: "PLANNER AGENT",
    role: "Decomposition",
    desc: "Deconstructs high-level goal into structured, delegable tasks and execution order.",
    googleColor: "#FBBC05" // Yellow
  },
  {
    id: "researcher",
    step: "03",
    label: "RESEARCH AGENT",
    role: "Context Retrieval",
    desc: "Gathers external intelligence, scrapes sources, and queries knowledge bases.",
    googleColor: "#EA4335" // Red
  },
  {
    id: "analyst",
    step: "04",
    label: "ANALYSIS AGENT",
    role: "Synthesis",
    desc: "Synthesizes gathered data, evaluates constraints, and drafts solution strategy.",
    googleColor: "#4285F4" // Blue
  },
  {
    id: "developer",
    step: "05",
    label: "IMPLEMENTATION AGENT",
    role: "Execution",
    desc: "Executes code, calls APIs, and builds target artifacts with tool delegation.",
    googleColor: "#34A853" // Green
  },
  {
    id: "reviewer",
    step: "06",
    label: "REVIEW AGENT",
    role: "Validation",
    desc: "Audits outputs against criteria, checks edge cases, and verifies quality.",
    googleColor: "#EA4335" // Red
  },
  {
    id: "output",
    step: "07",
    label: "FINAL OUTPUT",
    role: "Verified Artifact",
    desc: "Production-ready, deterministic deliverable forged by the autonomous crew.",
    googleColor: "#34A853" // Green
  }
];

export const LEARNING_CARDS = [
  {
    number: "01",
    title: "MULTI-AGENT ARCHITECTURE",
    description: "Understand the fundamentals behind multi-agent AI systems."
  },
  {
    number: "02",
    title: "CREWAI FUNDAMENTALS",
    description: "Learn agents, tasks, crews, tools, and workflows."
  },
  {
    number: "03",
    title: "AGENT ROLES",
    description: "Create specialized AI agents with clear responsibilities."
  },
  {
    number: "04",
    title: "TASK DELEGATION",
    description: "Understand agent collaboration and delegation."
  },
  {
    number: "05",
    title: "ORCHESTRATION",
    description: "Design structured workflows for coordinating multiple agents."
  },
  {
    number: "06",
    title: "REAL-WORLD IMPLEMENTATION",
    description: "Apply multi-agent concepts to practical AI applications."
  }
];

export const WORKSHOP_JOURNEY = [
  {
    step: "01",
    title: "Discover Multi-Agent AI",
    desc: "Understand the transition from single-prompt LLM tasks to collaborative autonomous agent systems."
  },
  {
    step: "02",
    title: "Understand CrewAI",
    desc: "Explore core concepts: agents, tasks, tools, memory, and hierarchical crew coordination."
  },
  {
    step: "03",
    title: "Create Your Agents",
    desc: "Configure role-specific personas, domain goals, and specialized LLM configurations."
  },
  {
    step: "04",
    title: "Define Tasks",
    desc: "Establish structured task objectives, expected deliverables, and collaborative context chains."
  },
  {
    step: "05",
    title: "Orchestrate the Crew",
    desc: "Connect agents with sequential and hierarchical execution processes and delegation rules."
  },
  {
    step: "06",
    title: "Build & Execute",
    desc: "Run a full multi-agent workflow that solves real-world engineering problems end-to-end."
  }
];

export const WORKSHOP_TIMELINE = WORKSHOP_JOURNEY;

export const REGISTRATION_STEPS = [
  {
    step: "01",
    title: "REGISTER",
    desc: "Fill in the official registration form with your participant details."
  },
  {
    step: "02",
    title: "CONFIRM DETAILS",
    desc: "Review your registration details and workshop confirmation."
  },
  {
    step: "03",
    title: "JOIN THE WORKSHOP",
    desc: "Receive setup instructions, starter resources, and session link."
  },
  {
    step: "04",
    title: "BUILD YOUR AI CREW",
    desc: "Participate hands-on and build real multi-agent systems using CrewAI."
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is AGENT FORGE?",
    answer: "AGENT FORGE is a hands-on workshop focused on understanding how multiple AI agents can collaborate, communicate, delegate tasks, and execute complex workflows using CrewAI, organized by Google Developer Student Clubs at Sri Sairam Engineering College."
  },
  {
    question: "Who can attend the workshop?",
    answer: "The workshop is open to students, developers, and tech enthusiasts who want to build modern multi-agent AI systems. Basic programming familiarity with Python is helpful."
  },
  {
    question: "What is CrewAI?",
    answer: "CrewAI is a leading framework for orchestrating role-playing autonomous AI agents. By enabling collaborative intelligence, CrewAI allows agents to work together seamlessly to tackle complex multi-step problems."
  },
  {
    question: "Do I need prior AI experience?",
    answer: "You do not need deep AI research experience. A foundational understanding of programming and general AI concepts is sufficient to follow along and build multi-agent crews."
  },
  {
    question: "Will the workshop include hands-on implementation?",
    answer: "Yes, AGENT FORGE is designed as an interactive, hands-on workshop where participants will design, orchestrate, and execute working multi-agent crews."
  },
  {
    question: "How can I register?",
    answer: "Click the 'REGISTER NOW' or 'REGISTER FOR AGENT FORGE' buttons on this website to proceed directly to the official external registration form."
  },
  {
    question: "Will workshop resources be provided?",
    answer: "Yes, registered participants will receive workshop code templates, reference documentation, and architectural guides."
  },
  {
    question: "Where will the workshop take place?",
    answer: "The venue details will be communicated to registered participants through the official GDSC community channels."
  }
];
