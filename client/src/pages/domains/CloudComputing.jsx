import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Cloud Computing";
const domainColor = "bg-indigo-500";

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "IaaS", completed: false },
  { id: 2, name: "PaaS", completed: false },
  { id: 3, name: "SaaS", completed: false },
  { id: 4, name: "Cloud Storage", completed: false },
  { id: 5, name: "Virtual Machines", completed: false },
  { id: 6, name: "Serverless Computing", completed: false },
  { id: 7, name: "Networking in Cloud", completed: false },
  { id: 8, name: "Cloud Security", completed: false },
  { id: 9, name: "Multi-Cloud Deployment", completed: false },
  { id: 10, name: "Database-as-a-Service", completed: false },
  { id: 11, name: "Auto Scaling", completed: false },
  { id: 12, name: "Cost Management", completed: false },
];
const description = 'Master cloud technologies and build scalable infrastructure';
const techStack = ['AWS', 'Azure', 'GCP', 'Docker'];
const resources = {
  docs: [
    { href: 'https://aws.amazon.com/getting-started/', title: 'AWS Documentation', subtitle: 'Cloud Computing Fundamentals' },
  ],
  videos: [
    { href: 'https://www.youtube.com/live/q3m1AB9ECXo?si=xZpVYI3L3dpZMGSo', title: 'Complete Cloud Computing Course', thumbnail: 'https://i.ytimg.com/vi/q3m1AB9ECXo/hqdefault.jpg' },
    { href: 'https://www.youtube.com/watch?v=3hLmDS179YE', title: 'TechWorld - Cloud Computing Full Course', thumbnail: 'https://img.youtube.com/vi/3hLmDS179YE/maxresdefault.jpg' },
  ],
};

const CloudComputing = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="sky"
    domainColor={domainColor}
  />
);

export default CloudComputing;