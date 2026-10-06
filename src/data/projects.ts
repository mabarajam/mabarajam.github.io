export interface ProjectLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  badge?: string;
  summary: string;
  bullets: string[];
  icon: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: 'comptia-practice',
    title: 'CompTIA Security+ SY0-701 Practice Exam',
    badge: 'LIVE LAB',
    summary: 'Interactive practice exam tool built from scratch to prepare for the CompTIA Security+ SY0-701 certification — 338+ real-style questions across all exam domains.',
    bullets: [
      'Covers all SY0-701 domains: Threats, Architecture, Implementation, Operations, Governance',
      'Randomized question order and instant answer feedback',
      'Built entirely with HTML, CSS, and JavaScript',
      'Deployed on GitHub Pages as a standalone tool',
    ],
    icon: 'fa-solid fa-graduation-cap',
    tags: ['Security+', 'JavaScript', 'HTML5/CSS3', 'Web Tool'],
    links: [
      { label: 'Launch Exam', url: 'https://mabarajam.github.io/CompTIASecurity-Practice/', external: true },
    ],
  },
  {
    slug: 'splunk-analysis',
    title: 'Linux Log Analysis with Splunk',
    badge: 'PROJECT',
    summary: 'Configured centralized log collection and analysis using Splunk on Linux systems to detect suspicious activity.',
    bullets: [
      'Installed Splunk Universal Forwarder on Ubuntu/Kali machines',
      'Forwarded logs from auth, syslog, and Apache access logs',
      'Created SPL queries to identify failed logins, root actions, and port scans',
      'Set alerts for brute-force attempts',
    ],
    icon: 'fa-solid fa-chart-line',
    tags: ['Splunk', 'Linux', 'SIEM', 'Log Analysis', 'SPL'],
    links: [
      { label: 'Read Walkthrough (Blog)', url: '/blog/splunk-log-analysis-linux' },
      { label: 'Medium: Project Wireshark & Splunk', url: 'https://medium.com/@mabarajam/project-wireshark-and-splunk-34216424dd91', external: true },
    ],
  },
  {
    slug: 'vuln-assessment',
    title: 'Vulnerability Assessment',
    badge: 'PROJECT',
    summary: 'Conducted vulnerability scans and analysis using industry tools to identify risks and recommend remediations.',
    bullets: [
      'Scanned target systems using Nmap, Nessus Essentials, and OpenVAS',
      'Detected outdated software, weak encryption, and misconfigurations',
      'Assessed severity using CVSS scores and prioritized risks',
      'Proposed remediation steps based on urgency and best practices',
    ],
    icon: 'fa-solid fa-shield-halved',
    tags: ['Nessus', 'Nmap', 'OpenVAS', 'CVSS', 'Vulnerability Management'],
    links: [],
  },
  {
    slug: 'web-pentest',
    title: 'Web Application Penetration Testing',
    badge: 'PROJECT',
    summary: 'Performed offensive security testing on vulnerable web applications through established security frameworks.',
    bullets: [
      'Conducted reconnaissance and scanning using OSINT and active tools',
      'Exploited vulnerabilities such as SQLi, XSS, and broken authentication',
      'Delivered a professional report with risk ratings and remediation steps',
    ],
    icon: 'fa-solid fa-globe',
    tags: ['Burp Suite', 'OWASP Top 10', 'SQLi', 'XSS', 'Pentesting'],
    links: [
      { label: 'Medium: Altoro Mutual & DVWA SQLi Writeup', url: 'https://medium.com/@mabarajam/altoro-mutual-web-and-dvwa-for-sql-injection-ctf-writeup-93676b0545e1', external: true },
      { label: 'Medium: Online Book Store 1.0 Writeup', url: 'https://medium.com/@mabarajam/ctf-online-book-store-1-0-writeup-ac797d18a484', external: true },
    ],
  },
  {
    slug: 'ransomware-lab',
    title: 'Ransomware Development Lab (Python)',
    badge: 'PROJECT',
    summary: 'Built and analyzed a proof of concept ransomware in an isolated VM to understand encryption behavior and defensive detection.',
    bullets: [
      'Implemented file level encryption using Fernet and generated a separate key file',
      'Created a custom decryptor requiring a passphrase to restore data',
      'Tested file encryption/decryption behavior on controlled sample files',
      'Documented attacker workflow, key handling, and defensive insights',
    ],
    icon: 'fa-solid fa-lock',
    tags: ['Python', 'Fernet', 'Cryptography', 'Malware Analysis', 'Defensive Detection'],
    links: [
      { label: 'Medium: Creating Ransomware with Python!', url: 'https://medium.com/@mabarajam/i-created-m-lware-with-python-980a7b2558a4', external: true },
    ],
  },
];
