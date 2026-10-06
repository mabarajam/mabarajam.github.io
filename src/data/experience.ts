export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface PastCareer {
  role: string;
  company: string;
  location: string;
  period: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  year: string;
  coursework?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export const relevantExperience: WorkExperience[] = [
  {
    role: 'Web Security & Network Support',
    company: 'English Bay Bike Rentals',
    location: 'Vancouver, BC',
    period: 'July 2025 - present',
    bullets: [
      'Conducted a website vulnerability assessment and delivered remediation recommendations.',
      'Installed and configured CCTV systems to enhance physical security.',
      'Optimized company network infrastructure, while also assisting with e-bike repairs and maintenance as needed.',
    ],
  },
  {
    role: 'AV & Security Camera Technician',
    company: 'Wynntek Installations',
    location: 'Vancouver, BC',
    period: 'Jan 2022 - May 2023',
    bullets: [
      'Installed, mounted, and configured surveillance cameras and DVR/NVR systems for optimal coverage and remote network access.',
      'Mounted TVs and installed audio/sound equipment for residential and commercial clients.',
    ],
  },
  {
    role: 'IT Support',
    company: 'CFHAGS S.A',
    location: 'México',
    period: 'July 2018 - Nov 2021',
    bullets: [
      'Managed and supported 300+ iPads (20 per classroom) across 15-20 classrooms, plus the school\'s Sistema UNO digital learning platform.',
      'Administered school network (WiFi, user accounts) and maintained computer lab equipment.',
      'Coordinated with platform providers for technical issues and system updates.',
    ],
  },
];

export const pastCareers: PastCareer[] = [
  {
    role: 'Loan Advisor',
    company: 'Spring Financial Inc.',
    location: 'Canada',
    period: 'Oct 2024 - Feb 2025',
  },
  {
    role: 'Store Manager',
    company: 'Cloud Ebikes',
    location: 'Canada',
    period: 'Nov 2021 - Sep 2024',
  },
  {
    role: 'Database Assistant',
    company: 'DA Comp',
    location: 'Mexico',
    period: 'Jan 2012 - Jan 2013',
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Cybersecurity Analyst Diploma',
    school: 'Cornerstone Community College',
    location: 'Vancouver, BC',
    year: '2025',
    coursework: 'Cybersecurity Fundamentals, Network Defender, Certified Ethical Hacker, Penetration Testing Professional',
  },
  {
    degree: 'Bachelor of Science',
    school: 'Autonomous University of Aguascalientes',
    location: 'Mexico',
    year: '2017',
  },
  {
    degree: 'Information Technology Technician',
    school: 'CBtis 168',
    location: 'Mexico',
    year: '2012',
  },
];

export const certificationsList: CertificationItem[] = [
  {
    name: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    year: '2026',
  },
];
