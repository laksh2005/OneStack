import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Aptitude";
const domainColor = "bg-purple-500";

const defaultTopics = [
  { id: 1, name: "Number Series", completed: false },
  { id: 2, name: "Time and Work", completed: false },
  { id: 3, name: "Percentage", completed: false },
  { id: 4, name: "Profit and Loss", completed: false },
  { id: 5, name: "Simple Interest", completed: false },
  { id: 6, name: "Compound Interest", completed: false },
  { id: 7, name: "Time, Speed and Distance", completed: false },
  { id: 8, name: "Probability", completed: false },
  { id: 9, name: "Permutation and Combination", completed: false },
  { id: 10, name: "Ages", completed: false },
  { id: 11, name: "Average", completed: false },
  { id: 12, name: "Ratio and Proportion", completed: false },
];

const description = 'Master quantitative aptitude and logical reasoning skills';
const techStack = [];
const resources = {
  docs: [
    { href: 'https://www.indiabix.com/', title: 'IndiaBix', subtitle: 'Comprehensive Aptitude Practice' },
  ],
  videos: [
    { href: 'https://www.youtube.com/playlist?list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK', title: 'Complete Quantitative Aptitude Course', thumbnail: 'https://img.youtube.com/vi/SmqFzXz5Cak/maxresdefault.jpg' },
  ],
};

const Aptitude = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="lime"
    domainColor={domainColor}
  />
);

export default Aptitude;