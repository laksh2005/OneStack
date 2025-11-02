import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Data Science";
const domainColor = "bg-yellow-500"; // From domainColors in domainList.js

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Data Cleaning", completed: false },
  { id: 2, name: "Exploratory Data Analysis", completed: false },
  { id: 3, name: "Machine Learning", completed: false },
  { id: 4, name: "Data Visualization", completed: false },
  { id: 5, name: "Statistical Analysis", completed: false },
  { id: 6, name: "Natural Language Processing", completed: false },
  { id: 7, name: "Big Data Processing", completed: false },
  { id: 8, name: "Time Series Analysis", completed: false },
  { id: 9, name: "Feature Engineering", completed: false },
  { id: 10, name: "Model Evaluation", completed: false },
  { id: 11, name: "Deep Learning Basics", completed: false },
  { id: 12, name: "Data Ethics", completed: false },
];
const description = 'Master the art of extracting insights from data using statistical methods and machine learning';
const techStack = ['Python', 'R', 'SQL', 'TensorFlow'];
const resources = {
  docs: [
    { href: 'https://scikit-learn.org/stable/', title: 'Scikit-learn Docs', subtitle: 'Machine Learning in Python' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=ua-CiDNNj30', title: 'FreeCodeCamp - Data Science Course', thumbnail: 'https://img.youtube.com/vi/ua-CiDNNj30/maxresdefault.jpg' },
    { href: 'https://youtu.be/gDZ6czwuQ18?si=tcud5vL9wh7JRybt', title: 'WsTechCube - Data Science Full Course', thumbnail: 'https://i.ytimg.com/vi/gDZ6czwuQ18/maxresdefault.jpg' },
  ],
};

const DataScience = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="green"
    domainColor={domainColor}
  />
);

export default DataScience;