// Personal profile data — single source of truth for desktop and /simple views.
export const profile = {
  name: 'Mario Barajas',
  role: 'Cybersecurity Analyst',
  location: 'Vancouver, BC',
  email: 'Defensium@protonmail.com',
  resume: '/resume.pdf',
  resumeFileName: 'Mario_Barajas_Resume.pdf',
  bio: [
    'Cybersecurity Analyst focused on threat detection, risk mitigation, and security compliance — with a financial services background that sharpens the ability to communicate and position security solutions effectively.',
    'Detail-oriented and solution-driven, with growing expertise in blockchain security, smart contract vulnerabilities, and DeFi risk analysis.',
  ],
  socials: [
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/marioabarajas/' },
    { label: 'Medium', icon: 'fa-brands fa-medium', url: 'https://medium.com/@mabarajam' },
    { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/mabarajam' },
  ],
  labsUrl: 'https://mabarajam.github.io/CompTIASecurity-Practice/',
};

export const skillGroups = [
  {
    title: 'Network & Systems',
    items: [
      'Network Configuration & Troubleshooting',
      'Physical Security Systems (CCTV/DVR/NVR)',
      'Linux (Administration, scripting, and offensive security tools)',
    ],
  },
  {
    title: 'Security & Analysis',
    items: [
      'IT Documentation & Compliance',
      'SIEM / Monitoring Tools (Wazuh, Splunk)',
      'Malware Analysis (Python)',
    ],
  },
];

export const tools = ['Nmap', 'Nessus', 'OpenVAS', 'Wireshark', 'Splunk', 'Wazuh', 'Python'];

export const locations = [
  { name: 'Vancouver, BC', coords: [-123.1207, 49.2827] as [number, number], desc: 'Current Base | Cybersecurity Operations' },
  { name: 'Aguascalientes, MX', coords: [-102.2916, 21.8853] as [number, number], desc: 'Origin | Education & Early Career' },
];

export const trademarkNotice =
  'Kali Linux™ and the Kali dragon logo are trademarks of OffSec. This portfolio is not affiliated with or endorsed by OffSec.';
