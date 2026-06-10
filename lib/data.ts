export const person = {
  name: "Rabi Rashid Mohammed Shaik",
  shortName: "Rabi Rashid",
  title: "Senior Manager · Digital Banking & Product",
  tagline: "Est. 2014 · 12+ years driving digital transformation across retail & investment banking",
  location: "Riyadh, Saudi Arabia",
  email: "r129rashid@gmail.com",
  linkedin: "https://www.linkedin.com/in/rabi-rashid",
  github: "https://github.com/r129rashid",
  summary:
    "Senior digital banking leader spearheading end-to-end platform revamps at Saudi Arabia's leading financial institutions. Known for shipping products that move metrics — from onboarding flows to investment platforms — while keeping cross-functional squads aligned, regulators satisfied, and customers coming back.",
};

export const experience = [
  {
    company: "The Saudi Investment Bank (SAIB)",
    role: "Senior Manager",
    period: "Jan 2025 – Present",
    location: "Riyadh, Saudi Arabia",
    bullets: [
      "Channel Owner for Retail Banking Web platform — leading end-to-end revamp to modernize architecture, reduce latency, and elevate customer experience.",
      "Acting as Product Owner for the Mobile Banking Investment Platform revamp, driving scalability, availability, and engagement for retail investment products.",
      "Leading cross-functional squads (POs, FE/BE, QA, UX, Delivery Leads) to high-quality releases within defined timelines.",
      "Overseeing SAMA regulatory implementations across all digital channels — compliance, resilience, and security at the forefront.",
    ],
  },
  {
    company: "Alinma Bank",
    role: "Product Owner",
    period: "Jan 2022 – Dec 2024",
    location: "Riyadh, Saudi Arabia",
    bullets: [
      "Owned the onboarding module for the retail mobile banking app as part of a full digital transformation journey.",
      "Conducted 40+ primary research sessions; synthesized insights into a robust analytics solution for measuring product success.",
      "Led a team of 5 Product Owners delivering onboarding, dashboard, and user profile features end-to-end.",
    ],
  },
  {
    company: "Kore.ai",
    role: "Product Manager",
    period: "May 2020 – Apr 2022",
    location: "Hyderabad, India",
    bullets: [
      "Owned an enterprise productivity platform from concept to market launch — increasing employee productivity by 70%.",
      "Conducted 20+ primary and secondary research cycles; wrote 10+ feature specs and ran A/B tests with C-suite stakeholders.",
      "Managed cross-functional scrum coordination for 3 major enterprise clients.",
    ],
  },
  {
    company: "Accenture",
    role: "Business & Integration Architect — Team Lead",
    period: "Jul 2018 – May 2020",
    location: "Hyderabad, India",
    bullets: [
      "Led a team of 4 BAs on an in-house Conversational AI Chatbot; won $150M in contracts from Oil & Gas firms.",
      "Conceptualized 'Experience Choreographer' — an AI-driven product that secured a $500M healthcare contract.",
      "Owned product backlog, conducted competitive analysis, and managed BA/engineering hiring.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "System Engineer",
    period: "Jan 2014 – Jul 2016",
    location: "Mumbai, India",
    bullets: [
      "Built a Credit Risk Monitoring web application reducing processing time by 70% for multiple banks.",
      "Developed Petty Cash — an expense management tool serving 80+ users across claims and reimbursements.",
      "Optimized legacy system code by 40%, converting monolithic systems to configurable architecture.",
    ],
  },
  {
    company: "Frost & Sullivan",
    role: "Research Analyst",
    period: "Jan 2018 – Aug 2018",
    location: "Bangalore, India",
    bullets: [
      "Developed market-entry strategies published in Frost & Sullivan's annual research papers.",
      "Identified UX-driven opportunities to increase machinery sales by 40% in the F&B sector.",
    ],
  },
];

export const certifications = [
  {
    name: "Professional Scrum Product Owner II",
    shortName: "PSPO II",
    issuer: "Scrum.org",
    year: "2026",
    category: "Leadership & Delivery",
    featured: true,
    description: "Advanced product ownership: stakeholder strategy, business value, and product mastery.",
  },
  {
    name: "Professional Scrum Product Owner I",
    shortName: "PSPO I",
    issuer: "Scrum.org",
    year: "2026",
    category: "Leadership & Delivery",
    featured: true,
    description: "Foundation-level certification in Scrum product ownership and backlog management.",
  },
  {
    name: "Power BI for Marketers",
    shortName: "Power BI",
    issuer: "Microsoft / LinkedIn Learning",
    year: "–",
    category: "Analytics",
    featured: true,
    description: "Data visualization and business intelligence dashboards for product analytics.",
  },
  {
    name: "Jira: Basic Administration",
    shortName: "Jira Admin",
    issuer: "Atlassian",
    year: "–",
    category: "Tools",
    featured: false,
    description: "Jira project configuration, workflows, and administration.",
  },
  {
    name: "Learning Jira Software",
    shortName: "Jira",
    issuer: "Atlassian / LinkedIn Learning",
    year: "–",
    category: "Tools",
    featured: false,
    description: "Agile boards, epics, sprints, and issue tracking in Jira Software.",
  },
];

export const featuredCerts = certifications.filter((c) => c.featured);

export const skills = [
  {
    category: "Product & Strategy",
    items: ["Product Roadmapping", "Market Research", "A/B Testing", "Design Thinking", "Value Proposition Design", "OKRs & KPIs"],
  },
  {
    category: "Agile & Delivery",
    items: ["Scrum", "SAFe", "Backlog Management", "Sprint Planning", "Scrum of Scrums", "Stakeholder Alignment"],
  },
  {
    category: "Banking & Domain",
    items: ["Retail Banking", "Digital Transformation", "Investment Platforms", "SAMA Compliance", "Onboarding Flows", "Regulatory Delivery"],
  },
  {
    category: "Analytics & Tools",
    items: ["Power BI", "Mixpanel", "Jira", "Miro", "Confluence", "Figma"],
  },
  {
    category: "Leadership",
    items: ["Cross-functional Team Leadership", "Hiring & Mentoring", "C-suite Communication", "Remote Team Management"],
  },
];

export const education = [
  {
    degree: "Master of Business Administration (MBA)",
    field: "Business Administration & Management",
    institution: "Birla Institute of Technology and Science (BITS), Pilani",
    year: "2016 – 2018",
  },
  {
    degree: "Diploma — Blockchain & Distributed Ledger Technologies",
    field: "Emerging Technology",
    institution: "IIIT Hyderabad",
    year: "Sep 2020 – Mar 2021",
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Electrical & Electronics Engineering",
    institution: "G. Pulla Reddy Engineering College, Kurnool",
    year: "2009 – 2013",
  },
];
