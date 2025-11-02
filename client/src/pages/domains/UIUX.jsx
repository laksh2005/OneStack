import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "UI/UX";  // Keep consistent with domainList
const domainColor = "bg-rose-500";  // Keep consistent with domainColors

const defaultTopics = [
  { id: 1, name: "Design Fundamentals", completed: false },
  { id: 2, name: "User Research", completed: false },
  { id: 3, name: "Wireframing", completed: false },
  { id: 4, name: "Prototyping", completed: false },
  { id: 5, name: "UI Components", completed: false },
  { id: 6, name: "Typography", completed: false },
  { id: 7, name: "Color Theory", completed: false },
  { id: 8, name: "Interaction Design", completed: false },
  { id: 9, name: "Usability Testing", completed: false },
  { id: 10, name: "Accessibility", completed: false },
  { id: 11, name: "Design Systems", completed: false },
  { id: 12, name: "Portfolio Building", completed: false },
];

const description = 'Master the art of creating beautiful and user-friendly digital experiences';
const techStack = ['Figma', 'Adobe XD', 'Sketch', 'InVision'];
const resources = {
  docs: [
    { href: 'https://www.figma.com/community', title: 'Figma Community', subtitle: 'Design Resources & Templates' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU', title: 'Complete UI/UX Design Course', thumbnail: 'https://img.youtube.com/vi/c9Wg6Cb_YlU/maxresdefault.jpg' },
  ],
};

const UIUX = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="blue"
    domainColor={domainColor}
  />
);

export default UIUX;