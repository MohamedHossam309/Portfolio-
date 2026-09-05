// ============================================================
// SINGLE SOURCE OF TRUTH — All real CV / portfolio data
// ============================================================

export const personalInfo = {
  fullName: 'Mohamed Hossam Eldin Mohamed Soliman',
  shortName: 'Mohamed Hossam',
  initials: 'MH',
  role: 'Penetration Testing | Web Application Security | Bug Bounty Hunting | Network Security',
  tagline: 'Think Like an Attacker. Defend Like an Engineer.',
  location: 'Fayoum, Egypt',
  email: '844844za@gmail.com',
  phone: '+20 109 684 7000',
  linkedin: 'https://www.linkedin.com/in/mohamed-hossam-11b092290',
  github: 'https://github.com/MohamedHossam309',
  photoUrl: '/images/profile.jpg',
  hasPhoto: true, // flipped to true to show the photo
  statusText: 'AVAILABLE FOR INTERNSHIP / ENTRY-LEVEL ROLES',
} as const;

export const summary = `Fourth-year IT student specializing in Network Engineering (graduating July 2027), training in Penetration Testing, Bug Bounty Hunting, and Web Application Security on a CCNA-based network security foundation. A self-driven, analytical researcher with strong problem-solving skills and close attention to detail in identifying vulnerabilities.`;

export const missionStatement = 'Understanding how systems fail in order to help make them stronger.';

export const education = {
  degree: 'Higher Diploma in Information Technology — Network Engineering',
  institution: 'Fayoum Technological University',
  location: 'Fayoum, Egypt',
  expectedGraduation: 'July 2027',
} as const;

export const experience = [
  {
    title: 'Digital Egypt Pioneers Initiative (DEPI)',
    organization: 'Rowad Misr Al-Raqmeya',
    track: 'Vulnerability Analyst and Penetration Tester',
    date: 'July 2026 – Present',
    year: 2026,
    description: 'Government-backed digital training initiative focused on vulnerability analysis and penetration testing.',
    type: 'training' as const,
  },
  {
    title: 'NTI Bootcamp — IT Technical Support',
    organization: 'National Telecommunication Institute (NTI)',
    track: null,
    date: '2026',
    year: 2026,
    description: 'Hands-on IT technical support training covering troubleshooting, systems administration, and end-user support fundamentals.',
    type: 'training' as const,
  },
  {
    title: 'ITI Bootcamp — Full Stack Web Development',
    organization: 'Information Technology Institute (ITI)',
    track: null,
    date: '2025',
    year: 2025,
    description: 'Intensive full stack web development scholarship program covering front-end, back-end, databases, and modern application architecture.',
    type: 'training' as const,
  },
] as const;

export const certifications = [
  {
    title: 'Red Hat System [Confirm exact certificate title]',
    issuer: 'Maharat Tech',
    date: '[Add date]',
    verifyUrl: '[Add verification link]',
  },
  {
    title: 'Migrate Linux and PostgreSQL Workloads to Azure',
    issuer: 'Microsoft',
    date: '[Add date]',
    verifyUrl: '[Add verification link]',
  },
  {
    title: 'AI Fundamentals Digital Badge',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    verifyUrl: '[Add verification link]',
  },
] as const;

export const courses = [
  { title: 'Ethical Hacking', provider: 'Maharat Tech', year: '2026' },
  { title: 'Introduction to Network Security', provider: 'Maharat Tech', year: '2026' },
  { title: 'Computer Network Fundamentals', provider: 'Maharat Tech', year: '2026' },
  { title: 'Implementation of Computer Network Fundamentals', provider: 'Maharat Tech', year: '2026' },
  { title: 'Python Programming Basics', provider: 'Maharat Tech', year: '2026' },
  { title: 'Artificial Intelligence Fundamentals', provider: 'IBM SkillsBuild', year: '2025' },
] as const;

export const technicalSkills = [
  {
    category: 'Networking',
    icon: 'Network',
    items: [
      'CCNA Fundamentals (Introduction to Networks, Switching, Routing & Wireless Essentials, Enterprise Networking Basics)',
      'VLANs',
      'Subnetting',
      'Routing Fundamentals',
      'Basic Network Security',
      'Cisco Packet Tracer',
    ],
  },
  {
    category: 'Operating Systems',
    icon: 'Monitor',
    items: ['Windows Fundamentals', 'Linux Fundamentals'],
  },
  {
    category: 'Programming Languages',
    icon: 'Code',
    items: ['Python', 'C', 'C++', 'Java'],
  },
  {
    category: 'Tools & Platforms',
    icon: 'Wrench',
    items: ['Git', 'GitHub'],
    note: 'More tools coming as DEPI training progresses',
  },
] as const;

export const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Self-Learning',
  'Research & Investigation',
  'Attention to Detail',
] as const;

export const projects = [
  {
    id: 'CASE-001',
    status: 'COMPLETED',
    classification: 'Development Project — Security-Minded Engineering',
    title: 'University Management System (FITU)',
    stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'REST APIs', 'JWT Authentication'],
    description: 'Built a full-stack university management system covering students, faculty, courses, grades, and scheduling for 500+ users.',
    details: [
      'Designed a relational database with an entity-relationship diagram (ERD), views, triggers, and role-based permissions to maintain full data integrity.',
      'Implemented JWT authentication and real-time admin dashboards, reducing administrative workload by approximately 50%.',
    ],
    github: 'https://github.com/MohamedHossam309/FITU-project',
    findings: null,
    lessonsLearned: 'Gained deep understanding of secure authentication patterns (JWT, RBAC) and how data integrity constraints at the database level prevent many common web vulnerabilities.',
  },
  {
    id: 'CASE-002',
    status: 'PENDING',
    classification: '[Add penetration test / bug bounty write-up once available]',
    title: '[Reserved — Future Security Assessment]',
    stack: [],
    description: 'This case file is reserved for a real penetration test or bug bounty write-up to be added once completed through the DEPI track.',
    details: [],
    github: null,
    findings: null,
    lessonsLearned: null,
  },
] as const;

export const methodology = [
  {
    stage: '01',
    title: 'Reconnaissance',
    description: 'Gathering publicly available information about the target. Identifying potential attack surfaces through passive and active information gathering.',
    tools: ['[Add OSINT tools as learned]'],
    objectives: ['Identify target scope', 'Map external footprint', 'Discover subdomains & endpoints'],
  },
  {
    stage: '02',
    title: 'Enumeration',
    description: 'Systematically probing discovered services and endpoints to extract detailed information about the target environment.',
    tools: ['[Add enumeration tools as learned]'],
    objectives: ['Service version detection', 'Directory & file enumeration', 'User & share enumeration'],
  },
  {
    stage: '03',
    title: 'Initial Access',
    description: 'Identifying and leveraging vulnerabilities to gain a first foothold in the target system.',
    tools: ['[Add exploitation frameworks as learned]'],
    objectives: ['Exploit identified vulnerabilities', 'Gain initial shell access', 'Establish communication channel'],
  },
  {
    stage: '04',
    title: 'Exploitation',
    description: 'Deepening access by exploiting discovered vulnerabilities in applications, services, or configurations.',
    tools: ['[Add tools as learned]'],
    objectives: ['Exploit web application flaws', 'Leverage misconfigurations', 'Bypass security controls'],
  },
  {
    stage: '05',
    title: 'Privilege Escalation',
    description: 'Elevating permissions from a standard user to an administrator or root-level account.',
    tools: ['[Add privesc tools as learned]'],
    objectives: ['Identify escalation vectors', 'Exploit kernel or service vulnerabilities', 'Achieve administrative access'],
  },
  {
    stage: '06',
    title: 'Lateral Movement',
    description: 'Moving across the network to access additional systems and expand the scope of the assessment.',
    tools: ['[Add tools as learned]'],
    objectives: ['Pivot between systems', 'Access additional network segments', 'Identify high-value targets'],
  },
  {
    stage: '07',
    title: 'Persistence / Validation',
    description: 'Verifying that access can be maintained and that findings are reproducible and documented.',
    tools: ['[Add tools as learned]'],
    objectives: ['Validate access persistence', 'Document attack paths', 'Verify finding reproducibility'],
  },
  {
    stage: '08',
    title: 'Reporting & Remediation',
    description: 'Compiling findings into a comprehensive report with risk ratings, evidence, and actionable remediation recommendations.',
    tools: ['Documentation tools', 'Report templates'],
    objectives: ['Executive summary', 'Technical findings with evidence', 'Remediation roadmap'],
  },
] as const;

export const terminalCommands = [
  { command: 'whoami', output: 'Mohamed Hossam' },
  { command: 'specialization', output: 'Penetration Testing / Web Application Security / Network Security' },
  { command: 'status', output: 'Training — DEPI Vulnerability Analyst & Penetration Tester Track\nAvailable for internship / entry-level opportunities' },
  { command: 'education', output: 'Higher Diploma in IT — Network Engineering\nFayoum Technological University — Graduating July 2027' },
  { command: 'contact', output: '844844za@gmail.com' },
] as const;

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B1 — Technical reading and writing proficient' },
] as const;

export const securityProfile = {
  primaryFocus: 'Penetration Testing',
  secondaryFocus: 'Web Application Security / Network Security',
  interests: [
    'Web Security',
    'Network Security',
    'Bug Bounty Hunting',
    'CCNA / Enterprise Networking',
    'CTFs',
  ],
} as const;

export const seo = {
  title: 'Mohamed Hossam — Penetration Tester | Network Security | Cybersecurity Student',
  description: 'Portfolio of Mohamed Hossam, a Fayoum-based IT student specializing in Penetration Testing, Web Application Security, and Network Security.',
  ogImage: '/images/profile.jpg',
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Writeups', href: '#writeups' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;
