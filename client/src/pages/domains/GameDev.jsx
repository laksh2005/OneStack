import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Game Development";
const domainColor = "bg-violet-500";

const defaultTopics = [
  { id: 1, name: "Game Design Fundamentals", completed: false },
  { id: 2, name: "Unity Basics", completed: false },
  { id: 3, name: "Game Physics", completed: false },
  { id: 4, name: "Character Controllers", completed: false },
  { id: 5, name: "Animation Systems", completed: false },
  { id: 6, name: "Level Design", completed: false },
  { id: 7, name: "Game UI/UX", completed: false },
  { id: 8, name: "Sound & Music", completed: false },
  { id: 9, name: "Multiplayer Basics", completed: false },
  { id: 10, name: "Game AI", completed: false },
  { id: 11, name: "Optimization", completed: false },
  { id: 12, name: "Publishing", completed: false },
];
const description = 'Master game development with Unity and modern game design principles';
const techStack = ['Unity', 'C#', 'Blender', 'Visual Studio'];
const resources = {
  docs: [
    { href: 'https://docs.unity3d.com/Manual/index.html', title: 'Unity Documentation', subtitle: 'Official Unity Manual & Scripting API' },
  ],
  videos: [
    { href: 'https://www.youtube.com/watch?v=gB1F9G0JXOo', title: 'Complete Unity Game Development Course', thumbnail: 'https://img.youtube.com/vi/gB1F9G0JXOo/maxresdefault.jpg' },
  ],
};

const GameDev = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="violet"
    domainColor={domainColor}
  />
);

export default GameDev;