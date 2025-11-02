import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Android Development";
const domainColor = "bg-green-500";

const defaultTopics = [
  { id: 1, name: "Introduction to Android", completed: false },
  { id: 2, name: "Activity & Fragment Lifecycle", completed: false },
  { id: 3, name: "UI Components", completed: false },
  { id: 4, name: "Layouts & Views", completed: false },
  { id: 5, name: "Data Storage", completed: false },
  { id: 6, name: "Networking", completed: false },
  { id: 7, name: "Navigation Components", completed: false },
  { id: 8, name: "Working with APIs", completed: false },
  { id: 9, name: "Material Design", completed: false },
  { id: 10, name: "Kotlin Coroutines", completed: false },
  { id: 11, name: "App Architecture", completed: false },
  { id: 12, name: "App Publishing", completed: false },
];
const description = 'Master Android app development with Kotlin and modern architecture';
const techStack = ['Kotlin', 'Java', 'XML', 'Android SDK'];
const resources = {
  docs: [
    { href: 'https://developer.android.com/docs', title: 'Android Developers', subtitle: 'Official Android Documentation' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=fis26HvvDII', title: 'Complete Android Development Course', thumbnail: 'https://img.youtube.com/vi/fis26HvvDII/maxresdefault.jpg' },
  ],
};

const AndroidDev = () => (
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

export default AndroidDev;