import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "iOS Dev";
const domainColor = "bg-orange-500"; // From domainColors in domainList.js

// Sample topics for this domain
const defaultTopics = [
  { id: 1, name: "Storyboards", completed: false },
  { id: 2, name: "Auto Layout", completed: false },
  { id: 3, name: "Core Data", completed: false },
  { id: 4, name: "App Store Deployment", completed: false },
  { id: 5, name: "Swift Fundamentals", completed: false },
  { id: 6, name: "UIKit Components", completed: false },
  { id: 7, name: "SwiftUI", completed: false },
  { id: 8, name: "Networking & APIs", completed: false },
  { id: 9, name: "TableViews & CollectionViews", completed: false },
  { id: 10, name: "Push Notifications", completed: false },
  { id: 11, name: "User Authentication", completed: false },
  { id: 12, name: "App Lifecycle", completed: false },
];
const description = 'Develop beautiful and performant iOS applications';
const techStack = ['Swift', 'UIKit', 'SwiftUI', 'Xcode'];
const resources = {
  docs: [
    { href: 'https://developer.apple.com/documentation/', title: 'Apple Developer Docs', subtitle: 'Official iOS Development Guide' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=comQ1-x2a1Q', title: 'FreeCodeCamp - iOS Development Course', thumbnail: 'https://img.youtube.com/vi/comQ1-x2a1Q/maxresdefault.jpg' },
    { href: 'https://www.youtube.com/watch?v=F2ojC6TNwws', title: 'Design+Code - SwiftUI Course', thumbnail: 'https://img.youtube.com/vi/F2ojC6TNwws/maxresdefault.jpg' },
  ],
};

const IOSDev = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="orange"
    domainColor={domainColor}
  />
);

export default IOSDev;