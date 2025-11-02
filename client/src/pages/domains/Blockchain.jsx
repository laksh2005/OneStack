import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Blockchain";
const domainColor = "bg-blue-500";

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Smart Contracts", completed: false },
  { id: 2, name: "Decentralized Applications (DApps)", completed: false },
  { id: 3, name: "Consensus Algorithms", completed: false },
  { id: 4, name: "Ethereum Development", completed: false },
  { id: 5, name: "Cryptocurrency Fundamentals", completed: false },
  { id: 6, name: "Tokenomics", completed: false },
  { id: 7, name: "Blockchain Security", completed: false },
  { id: 8, name: "Solidity Programming", completed: false },
  { id: 9, name: "Digital Wallets", completed: false },
  { id: 10, name: "Decentralized Finance (DeFi)", completed: false },
  { id: 11, name: "Non-Fungible Tokens (NFTs)", completed: false },
  { id: 12, name: "Blockchain Scalability", completed: false },
];
const description = 'Explore decentralized technologies and build the future of Web3';
const techStack = ['Solidity', 'Ethereum', 'Web3.js', 'Truffle'];
const resources = {
  docs: [
    { href: 'https://docs.soliditylang.org/', title: 'Solidity Documentation', subtitle: 'Smart Contract Development' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=M576WGiDBdQ', title: 'FreeCodeCamp - Blockchain Course', thumbnail: 'https://img.youtube.com/vi/M576WGiDBdQ/maxresdefault.jpg' },
    { href: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ', title: 'Patrick Collins - Learn Solidity Full Course', thumbnail: 'https://img.youtube.com/vi/gyMwXuJrbJQ/maxresdefault.jpg' },
  ],
};

const Blockchain = () => (
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

export default Blockchain;