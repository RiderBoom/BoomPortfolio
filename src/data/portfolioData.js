export const profileData = {
  name: "Wisitchai Bunrae",
  title: "Founder & Lead Architect at BoomTech",
  role: "Full-Stack System Architect & Web3 Specialist",
  headline: "I design and ship software that keeps moving when the real world gets complicated.",
  tagline: "Production systems for on-demand logistics, real-time operations, Web3 infrastructure, and edge-first response workflows.",
  about: "ผู้เชี่ยวชาญด้าน Software Architecture, Real-Time Systems และ Web3 Platform ที่มีประสบการณ์ออกแบบและพัฒนาระบบที่มีสถาปัตยกรรมรองรับการเติบโตระดับ High Concurrency พร้อมการดูแล infrastructure ตั้งแต่คลาวด์จนถึง On-Premise/Edge Cluster",
  contact: {
    phone: "0950524447",
    location: "Khao Sai, Phichit, Thailand (Operating Globally)",
    github: "https://github.com/RiderBoom",
    linkedin: "",
    availability: "Available for Architecture Consulting & Custom Systems"
  }
};

export const credibilityData = [
  { value: "Live", label: "Production systems", detail: "Public products you can inspect" },
  { value: "< 100ms", label: "Dispatch latency", detail: "Real-time assignment target" },
  { value: "99.9%", label: "Service reliability", detail: "Production uptime target" },
  { value: "End-to-end", label: "Delivery ownership", detail: "Architecture to deployment" }
];

export const projectCategories = [
  "All Projects",
  "On-Demand Logistics",
  "Web3 & Asset Tracking",
  "Mission Critical & SOS"
];

export const projectsData = [
  {
    id: "boom-rider",
    title: "Boom Rider Ecosystem",
    tag: "Flagship Project",
    category: "On-Demand Logistics",
    shortDesc: "ระบบโลจิสติกส์และ On-demand Dispatch แบบครบวงจร ครอบคลุมการส่งอาหาร ซื้อของ ส่งพัสดุ พร้อมระบบติดตามสถานะเรียลไทม์ และระบบกระจายงานฉุกเฉิน",
    fullDesc: "Ecosystem โลจิสติกส์ระดับสายงานการขนส่งแบบ On-demand ที่รวมแอประหว่างลูกค้า (Customer), ไรเดอร์ (Driver Partner), และร้านค้า (Merchant) พร้อมส่วนงาน Dispatch Central C2 ที่ประมวลผลตำแหน่งแบบ WebSocket/Realtime Engine ช่วยคำนวณคิวและเส้นทางที่ดีที่สุดล่วงหน้า",
    problem: "งานสั่งซื้อและงานส่งต้องเคลื่อนผ่านลูกค้า ร้านค้า และไรเดอร์โดยไม่สูญเสียสถานะ แม้จำนวนเหตุการณ์จะเพิ่มขึ้นแบบเรียลไทม์",
    approach: "ออกแบบ workflow แบบ multi-role เชื่อม dispatch engine, location events และฐานข้อมูลสถานะไว้ใน production flow เดียว",
    outcome: "ระบบใช้งานจริงที่รองรับการสั่งอาหาร ซื้อของ ส่งพัสดุ และติดตามงานแบบ real-time จากจุดเดียว",
    highlights: [
      "Real-time Driver Location & Route Optimization",
      "Dynamic Fare Calculation & Peak Surge Pricing",
      "Instant Emergency Job Dispatching & Escalation",
      "Multi-Tenant Merchant Order Management"
    ],
    architecture: "Micro-Frontend (Next.js) + Supabase Edge Functions + PostgreSQL + Real-Time Engine (WebSocket) + Vercel Serverless Edge",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Real-Time Engine", "PostgreSQL", "Vercel"],
    liveUrl: "https://boomrider.vercel.app",
    metrics: "99.9% Uptime | < 100ms Dispatch Latency"
  },
  {
    id: "boomtech-gateway",
    title: "BoomTech-Gateway",
    tag: "Web3 Platform",
    category: "Web3 & Asset Tracking",
    shortDesc: "Super-App แพลตฟอร์มสำหรับติดตามสินทรัพย์ดิจิทัล แดชบอร์ดการเงิน และการเชื่อมต่อสัญญาอัจฉริยะ (Smart Contracts)",
    fullDesc: "แพลตฟอร์มบริหารจัดการพอร์ตฟอลิโอและวิเคราะห์สินทรัพย์ดิจิทัล เชื่อมต่อ Web3 Wallets และ Multi-Chain Indexing Engine ช่วยเฝ้าระวังธุรกรรมแบบ On-Chain และประมวลผล Smart Contract Calls ผ่านสถาปัตยกรรม UUPS Upgradeable Proxy",
    problem: "ข้อมูลสินทรัพย์และธุรกรรมกระจายอยู่หลาย chain ทำให้ติดตามสถานะ ความเสี่ยง และ contract interaction ได้ยาก",
    approach: "รวม wallet aggregation, on-chain indexing และ upgradeable contract architecture หลัง API gateway ที่ควบคุมได้",
    outcome: "แพลตฟอร์มเดียวสำหรับสำรวจพอร์ต ติดตามเหตุการณ์ และเชื่อมต่อ smart contract แบบ multi-chain",
    highlights: [
      "Multi-chain Wallet Portfolio Aggregation",
      "UUPS Upgradeable Smart Contract Architecture",
      "Automated On-chain Event Indexing & Alerting",
      "Secure DeFi Yield Tracking Dashboard"
    ],
    architecture: "Solidity (EVM) + Hardhat + React + Web3.js / Viem + PostgreSQL + Express API Gateway",
    tech: ["Solidity", "React", "Web3.js", "PostgreSQL", "UUPS Proxy", "Tailwind CSS"],
    liveUrl: "https://boomtech.app",
    metrics: "Multi-Chain Indexing | Upgradeable UUPS Security"
  },
  {
    id: "tactical-dispatch",
    title: "Tactical Dispatch & SOS Hub",
    tag: "Mission Critical",
    category: "Mission Critical & SOS",
    shortDesc: "โมดูลต่อยอดสำหรับการประสานงานกู้ภัยฉุกเฉินและระบบโลจิสติกส์เชิงยุทธการ (Tactical C2 Logistics Engine)",
    fullDesc: "ระบบศูนย์บัญชาการสถานการณ์ฉุกเฉินและการกู้ภัย (Tactical Command & Control Center) ออกแบบให้ทำงานได้แม้สภาพเครือข่ายจำกัด มีระบบคิวส่งข้อมูล Offline-First Sync และ Edge Relay Station ช่วยประสานงานทีมภาคสนามและศูนย์รับแจ้งเหตุ SOS",
    problem: "การประสานงานภาคสนามไม่สามารถพึ่งพาเครือข่ายที่เสถียรได้ แต่ตำแหน่ง เหตุการณ์ และลำดับความเร่งด่วนต้องไม่สูญหาย",
    approach: "วางโครงสร้าง offline-first queue, edge relay และ event-driven dispatch พร้อมกลไก failover สำหรับพื้นที่สัญญาณจำกัด",
    outcome: "แนวทาง C2 ที่ยังรักษา incident flow และ field coordination ได้เมื่อการเชื่อมต่อไม่สมบูรณ์",
    highlights: [
      "Offline-first Sync & Mesh Disaster Messaging",
      "Live GPS Fleet & Incident Location Tracking",
      "Priority Dispatch & Emergency Triage Queue",
      "High-Availability Edge Cluster Failover"
    ],
    architecture: "Edge Computing Relay + API Gateway + Event-Driven Socket Cluster + Time-Series Metrics",
    tech: ["Architecture", "Edge Dispatch", "Real-Time Tracking", "API Gateway", "Go / Node", "Docker"],
    liveUrl: "#",
    metrics: "Fail-Safe Redundancy | Sub-second Field Sync"
  }
];

export const servicesData = [
  {
    id: "arch",
    title: "End-to-End System Architecture",
    desc: "ออกแบบและพัฒนา Web Application ตั้งแต่ Database Schema, Backend APIs จนถึง Frontend UI/UX ระดับ Production",
    deliverables: [
      "High-Performance Database Design (PostgreSQL / Supabase)",
      "RESTful & GraphQL API Design with Auth & RBAC",
      "Scalable Microservices / Monorepo Architecture"
    ]
  },
  {
    id: "dispatch",
    title: "Real-Time Dispatch Engines",
    desc: "พัฒนาระบบคิว โลจิสติกส์ ระบบติดตามตำแหน่งแบบเรียลไทม์ และการจัดการสถานะ Order อัตโนมัติ",
    deliverables: [
      "WebSocket & Server-Sent Events (SSE) Pipelines",
      "Automated Order Assignment Algorithms",
      "Geospatial Indexing & Live Mapping"
    ]
  },
  {
    id: "ai",
    title: "AI & Workflow Automation",
    desc: "เชื่อมต่อ LLM APIs, AI Agents และสร้างระบบ Automation เพื่อเพิ่มประสิทธิภาพการทำงานของธุรกิจ",
    deliverables: [
      "Custom AI Assistant Integration & RAG Workflows",
      "Business Process Automation (Webhooks, Queue Processing)",
      "Automated Data Extraction & Intelligent Parsing"
    ]
  },
  {
    id: "infra",
    title: "Infrastructure & Web3 Solutions",
    desc: "ออกแบบ Mini Data Center, ระบบเซิร์ฟเวอร์ Edge Computing และสถาปัตยกรรม Smart Contract",
    deliverables: [
      "Solidity Smart Contracts (ERC20, ERC721, Upgradeable UUPS)",
      "Self-Hosted Edge Nodes & Container Orchestration",
      "CI/CD Pipelines & Zero-Downtime Deployment"
    ]
  }
];

export const techStackData = [
  { name: "Next.js", category: "Frontend & Fullstack" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Supabase", category: "Database & Auth" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Solidity", category: "Web3 / Blockchain" },
  { name: "MariaDB", category: "Database" },
  { name: "Vercel", category: "Cloud & Edge" },
  { name: "Framer Motion", category: "Animation" }
];

export const terminalCommands = {
  help: `Available commands:
  - about      : Learn about Wisitchai Bunrae
  - projects   : List featured production projects
  - services   : List technical engineering capabilities
  - skills     : Display full tech stack
  - contact    : View official contact methods
  - clear      : Clear terminal screen`,
  about: `Wisitchai Bunrae - Founder & Lead Architect at BoomTech Studio.
Specializing in Real-time Dispatch Engines, Scalable Web Applications, and Web3 Architecture.
Location: Khao Sai, Phichit, Thailand (Operating Globally)`,
  projects: `1. Boom Rider Ecosystem [Flagship] - On-Demand Logistics & Real-Time Dispatch Engine
2. BoomTech-Gateway [Web3] - Decentralized Asset Tracking & Smart Contract Infrastructure
3. Tactical Dispatch & SOS Hub [Mission Critical] - Emergency Command & Control Logistics`,
  services: `* End-to-End System Architecture (Full-Stack Production Setup)
* Real-Time Dispatch Engines (Geospatial & WebSocket Queues)
* AI & Workflow Automation (LLM Agents & Webhook Automation)
* Infrastructure & Web3 Solutions (Smart Contracts & Edge Nodes)`,
  skills: `Frontend  : Next.js, React, Tailwind CSS, Framer Motion
Backend   : Node.js, Express, Go, REST, WebSocket
Database  : PostgreSQL, Supabase, MariaDB
Web3      : Solidity, Web3.js, Viem, UUPS Proxy
Infra     : Vercel, Docker, Edge Computing, Mini Data Center`,
  contact: `Phone    : 0950524447
Chat     : https://ceo.boomtech.app/#contact
Location : Khao Sai, Phichit, Thailand
Website  : https://boomtech.app`
};
