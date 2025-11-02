import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Web Dev";
const domainColor = "bg-teal-500";

// Default topics for this domain
const defaultTopics = [
  { id: 1, name: "Responsive Design", completed: false },
  { id: 2, name: "RESTful APIs", completed: false },
  { id: 3, name: "Authentication", completed: false },
  { id: 4, name: "Deployment", completed: false },
  { id: 5, name: "Frontend Frameworks", completed: false },
  { id: 6, name: "Backend Development", completed: false },
  { id: 7, name: "Database Integration", completed: false },
  { id: 8, name: "State Management", completed: false },
  { id: 9, name: "Web Performance", completed: false },
  { id: 10, name: "Web Security", completed: false },
  { id: 11, name: "Testing Strategies", completed: false },
  { id: 12, name: "Progressive Web Apps", completed: false },
];

const description = 'Master modern web development from frontend to backend';
const techStack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'];
const resources = {
  docs: [
    { href: 'https://developer.mozilla.org', title: 'MDN Web Docs' },
  ],
  videos: [
    { href: 'https://youtube.com/webdev', title: 'Modern Web Development', thumbnail: 'https://i.ytimg.com/vi_webp/0/default.jpg' },
  ],
};

const WebDev = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="teal"
    domainColor={domainColor}
  />
);

export default WebDev;