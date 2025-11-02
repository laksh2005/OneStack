import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "IoT (Internet of Things)";
const domainColor = "bg-cyan-500";

const defaultTopics = [
  { id: 1, name: "IoT Fundamentals", completed: false },
  { id: 2, name: "Sensors & Actuators", completed: false },
  { id: 3, name: "Embedded Systems", completed: false },
  { id: 4, name: "Arduino Programming", completed: false },
  { id: 5, name: "Raspberry Pi", completed: false },
  { id: 6, name: "IoT Protocols", completed: false },
  { id: 7, name: "IoT Security", completed: false },
  { id: 8, name: "Cloud Integration", completed: false },
  { id: 9, name: "Data Analytics", completed: false },
  { id: 10, name: "Edge Computing", completed: false },
  { id: 11, name: "Network Architecture", completed: false },
  { id: 12, name: "IoT Projects", completed: false },
];

const description = 'Master IoT development with hardware and software integration';
const techStack = ['Arduino', 'Raspberry Pi', 'Python', 'MQTT'];
const resources = {
  docs: [
    { href: 'https://www.arduino.cc/reference/en/', title: 'Arduino Docs', subtitle: 'Official Arduino Documentation' },
  ],
  videos: [
    { href: 'https://youtu.be/h0gWfVCSGQQ?si=a4mQZAjpyqXBT8sM', title: 'Complete IoT Development Course', thumbnail: 'https://i.ytimg.com/vi/h0gWfVCSGQQ/maxresdefault.jpg' },
  ],
};

const IoT = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="cyan"
    domainColor={domainColor}
  />
);

export default IoT;