import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Ethical Hacking";
const domainColor = "bg-rose-500"; // From domainColors in domainList.js

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Reconnaissance", completed: false },
  { id: 2, name: "Vulnerability Scanning", completed: false },
  { id: 3, name: "Social Engineering", completed: false },
  { id: 4, name: "Exploit Development", completed: false },
  { id: 5, name: "Web Application Security", completed: false },
  { id: 6, name: "Wireless Network Hacking", completed: false },
  { id: 7, name: "System Hacking", completed: false },
  { id: 8, name: "Privilege Escalation", completed: false },
  { id: 9, name: "Password Cracking", completed: false },
  { id: 10, name: "Network Traffic Analysis", completed: false },
  { id: 11, name: "Post-Exploitation", completed: false },
  { id: 12, name: "Reporting & Documentation", completed: false },
];

const description = 'Master ethical hacking and cybersecurity techniques';
const techStack = ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap'];
const resources = {
  docs: [
    { href: 'https://www.hackthebox.com/universities', title: 'Hack The Box Academy', subtitle: 'Hands-on Cybersecurity Training' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE', title: 'HackerSploit - Ethical Hacking Course', thumbnail: 'https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg' },
    { href: 'https://www.youtube.com/watch?v=dz7Ntp7KQGA', title: 'Cybersecurity Career Guide - Complete Bootcamp', thumbnail: 'https://img.youtube.com/vi/dz7Ntp7KQGA/maxresdefault.jpg' },
  ],
};

const EthicalHacking = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="rose"
    domainColor={domainColor}
  />
);

export default EthicalHacking;