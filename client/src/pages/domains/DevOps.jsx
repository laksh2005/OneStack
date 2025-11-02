import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "DevOps";
const domainColor = "bg-teal-500";

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Continuous Integration", completed: false },
  { id: 2, name: "Continuous Deployment", completed: false },
  { id: 3, name: "Infrastructure as Code", completed: false },
  { id: 4, name: "Monitoring", completed: false },
  { id: 5, name: "Docker Containerization", completed: false },
  { id: 6, name: "Kubernetes Orchestration", completed: false },
  { id: 7, name: "CI/CD Pipelines", completed: false },
  { id: 8, name: "Configuration Management", completed: false },
  { id: 9, name: "Cloud Infrastructure", completed: false },
  { id: 10, name: "Microservices Architecture", completed: false },
  { id: 11, name: "Site Reliability Engineering", completed: false },
  { id: 12, name: "DevSecOps", completed: false },
];
const description = 'Master modern DevOps practices and automation tools';
const techStack = ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'];
const resources = {
  docs: [
    { href: 'https://kubernetes.io/docs/home/', title: 'Kubernetes Docs', subtitle: 'Container Orchestration Guide' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=j5Zsa_eOXeY', title: 'FreeCodeCamp - DevOps Course', thumbnail: 'https://img.youtube.com/vi/j5Zsa_eOXeY/maxresdefault.jpg' },
    { href: 'https://youtu.be/tgmM3_2dZwg?si=vHLO_m6DvU59zTVb', title: 'GreatLearning - DevOps Zero to Hero', thumbnail: 'https://i.ytimg.com/vi/tgmM3_2dZwg/hq720.jpg' },
  ],
};

const DevOps = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="red"
    domainColor={domainColor}
  />
);

export default DevOps;