import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Data Structures & Algorithms";
const domainColor = "bg-blue-500"; // From domainColors in domainList.js

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Arrays and Strings", completed: false },
  { id: 2, name: "Linked Lists", completed: false },
  { id: 3, name: "Stacks and Queues", completed: false },
  { id: 4, name: "Trees and Graphs", completed: false },
  { id: 5, name: "Hash Tables", completed: false },
  { id: 6, name: "Heaps", completed: false },
  { id: 7, name: "Dynamic Programming", completed: false },
  { id: 8, name: "Greedy Algorithms", completed: false },
  { id: 9, name: "Sorting and Searching", completed: false },
  { id: 10, name: "Recursion and Backtracking", completed: false },
  { id: 11, name: "Bit Manipulation", completed: false },
  { id: 12, name: "System Design Basics", completed: false },
];

const description = 'Master fundamental DSA concepts and improve your problem-solving skills';

const DSA = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={[]}
    resources={{}}
    colorKey="blue"
    domainColor={domainColor}
  />
);

export default DSA;