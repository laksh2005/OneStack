import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Cyber Security";
const domainColor = "bg-red-500";

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Network Security", completed: false },
  { id: 2, name: "Ethical Hacking", completed: false },
  { id: 3, name: "Cryptography", completed: false },
  { id: 4, name: "Vulnerability Assessment", completed: false },
  { id: 5, name: "Penetration Testing", completed: false },
  { id: 6, name: "Security Auditing", completed: false },
  { id: 7, name: "Incident Response", completed: false },
  { id: 8, name: "Malware Analysis", completed: false },
  { id: 9, name: "Web Application Security", completed: false },
  { id: 10, name: "Secure Coding Practices", completed: false },
  { id: 11, name: "Security Operations", completed: false },
  { id: 12, name: "Identity & Access Management", completed: false },
];
const description = 'Master cybersecurity concepts and protect digital assets';
const techStack = ['Kali Linux', 'Wireshark', 'Metasploit', 'Nmap'];
const resources = {
  docs: [
    { href: 'https://www.hacksplaining.com/', title: 'Hacksplaining', subtitle: 'Interactive Security Lessons' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=fNzpcB7ODxQ', title: 'FreeCodeCamp - Ethical Hacking Course', thumbnail: 'https://img.youtube.com/vi/fNzpcB7ODxQ/maxresdefault.jpg' },
    { href: 'https://www.youtube.com/watch?v=qwA6MmbeGNo', title: 'Professor Messer - CompTIA Security+ Course', thumbnail: 'https://img.youtube.com/vi/qwA6MmbeGNo/maxresdefault.jpg' },
  ],
};

const CyberSecurity = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="indigo"
    domainColor={domainColor}
  />
);

export default CyberSecurity;