const profile = {
  name: "Ngoc Long (Ricky) Vu",
  shortName: "Ricky Vu",
  headline: "Network · Cybersecurity · IT Support",
  headlineItems: ["Network", "Cybersecurity", "IT Support"],
  location: "Adelaide, South Australia",
  tagline:
    "Master of IT graduate specialising in Network and Cybersecurity, based in Adelaide, Australia.",
  summary:
    "I bring over 5 years of hands-on Network Operations Center experience in the telecommunications industry, now backed by a Master of IT majoring in Network and Cybersecurity Systems from Flinders University. I'm comfortable configuring and troubleshooting Cisco-based enterprise networks, and I've built academic projects covering intrusion detection, secure network design, and IT security governance. I'm also genuinely curious about technology beyond my core field — I built this very site myself while learning Next.js and React.",

  skills: [
    {
      category: "Networking",
      items: [
        "Cisco Configuration",
        "Network Design",
        "VLAN, Routing & Switching",
        "CCNA / CCNP-level Knowledge",
      ],
    },
    {
      category: "Cybersecurity",
      items: [
        "Information Security",
        "Threat Modelling",
        "Intrusion Detection",
        "SIEM",
        "Firewall & Risk Management",
      ],
    },
    {
      category: "Systems & Cloud",
      items: [
        "Linux Server Management",
        "AWS (EC2, IAM, VPC, S3)",
        "GCP Networking & IAM Basics",
      ],
    },
    {
      category: "Support & Tools",
      items: ["Incident Monitoring & Reporting", "Technical Documentation", "JIRA"],
    },
    {
      category: "Also exploring",
      items: ["Next.js / React (self-taught, built this site)"],
    },
  ],

  certifications: [
    { name: "CompTIA Security+", year: "2026", status: "in progress" },
    { name: "Cisco CyberOps Associate", year: "2024", status: "earned" },
    { name: "Cisco Certified Network Associate (CCNA)", year: "2024", status: "earned" },
    { name: "Microsoft Certified Solutions Associate (MCSA)", year: "2011", status: "earned" },
  ],

  experience: [
    {
      role: "Network Operations Center Operator",
      company: "DIGI-TEXX Vietnam",
      period: "2021 – 2023",
      bullets: [
        "Deployed and monitored agents across servers and network devices, detecting and reporting incidents to stakeholders.",
        "Set up customer-required monitoring systems and documented procedures for new trainees.",
      ],
    },
    {
      role: "Network Operations Center Operator",
      company: "FPT Telecom Vietnam",
      period: "2012 – 2015",
      bullets: [
        "Operated and monitored Core, Access and International network channels.",
        "Coordinated incident response and implemented optimisation plans to stabilise the network.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of IT (Network and Cybersecurity Systems)",
      institution: "Flinders University, Adelaide",
      period: "2024 – 2025",
    },
    {
      degree: "Bachelor of Engineering (Electrical, Electronics – Telecommunication)",
      institution: "Ton Duc Thang University, Vietnam",
      period: "2007 – 2012",
    },
  ],

  interests: [
    "Landscape & outdoor photography",
    "Camping and climbing across Australia (Mount Kosciuszko, Upper Colo NSW)",
    "Building and operating Memory Lane Photography, a live photography studio site",
  ],

  contact: {
    email: "ngoclong327@gmail.com",
    linkedin: "https://www.linkedin.com/in/ngoclong327/",
  },
};

export default profile;
