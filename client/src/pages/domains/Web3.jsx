import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Web3 Development";
const domainColor = "bg-amber-500";

const defaultTopics = [
  { id: 1, name: "Blockchain Fundamentals", completed: false },
  { id: 2, name: "Smart Contracts", completed: false },
  { id: 3, name: "Solidity Programming", completed: false },
  { id: 4, name: "DApp Development", completed: false },
  { id: 5, name: "Web3.js & Ethers.js", completed: false },
  { id: 6, name: "NFT Development", completed: false },
  { id: 7, name: "DeFi Protocols", completed: false },
  { id: 8, name: "Token Standards", completed: false },
  { id: 9, name: "Security Best Practices", completed: false },
  { id: 10, name: "IPFS & Storage", completed: false },
  { id: 11, name: "Gas Optimization", completed: false },
  { id: 12, name: "Testing Smart Contracts", completed: false },
];
const description = 'Master blockchain technology and decentralized application development';
const techStack = ['Solidity', 'Web3.js', 'Ethers.js', 'Hardhat'];
const resources = {
  docs: [
    { href: 'https://docs.soliditylang.org/', title: 'Solidity Docs', subtitle: 'Official Solidity Documentation' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ', title: 'Complete Web3 Development Course', thumbnail: 'https://img.youtube.com/vi/gyMwXuJrbJQ/maxresdefault.jpg' },
  ],
};

const Web3 = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="amber"
    domainColor={domainColor}
  />
);

export default Web3;