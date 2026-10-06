export interface Certificate {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 'comptia-sec-plus',
    title: 'CompTIA Security+',
    caption: 'CompTIA Security+ SY0-701',
    image: '/assets/CompTia Security+.png',
  },
  {
    id: 'cornerstone-cybersecurity',
    title: 'Cybersecurity Specialist',
    caption: 'Cybersecurity Specialist (Cornerstone)',
    image: '/assets/cornerstone cybersecurity.png',
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics (CISCO)',
    caption: 'Networking Basics (CISCO)',
    image: '/assets/Networking_Basics.png',
  },
  {
    id: 'network-security',
    title: 'Network-Focused Security',
    caption: 'Network-Focused Security',
    image: '/assets/Network-Focused Security Medium1.png',
  },
  {
    id: 'cybersecurity-fundamentals',
    title: 'Cybersecurity Fundamentals',
    caption: 'Cybersecurity Fundamentals',
    image: '/assets/cybersecurity fundamentals1.png',
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Fundamentals',
    caption: 'Cloud Security Fundamentals',
    image: '/assets/Cloud Security Fundamentals Medium1.png',
  },
  {
    id: 'dev-ai',
    title: 'AI Development',
    caption: 'AI Development',
    image: '/assets/Dev_AI.png',
  },
];
