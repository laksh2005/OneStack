import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "Generative AI";
const domainColor = "bg-purple-500";

const defaultTopics = [
  { id: 1, name: "Introduction to Generative AI", completed: false },
  { id: 2, name: "Natural Language Processing", completed: false },
  { id: 3, name: "Large Language Models", completed: false },
  { id: 4, name: "Prompt Engineering", completed: false },
  { id: 5, name: "Text Generation", completed: false },
  { id: 6, name: "Image Generation", completed: false },
  { id: 7, name: "Audio Generation", completed: false },
  { id: 8, name: "Diffusion Models", completed: false },
  { id: 9, name: "Fine-tuning LLMs", completed: false },
  { id: 10, name: "AI Ethics and Safety", completed: false },
  { id: 11, name: "Vector Databases", completed: false },
  { id: 12, name: "RAG Applications", completed: false },
];

const description = 'Master the art of building and working with generative AI models';
const techStack = ['Python', 'PyTorch', 'TensorFlow', 'Transformers'];
const resources = {
  docs: [
    { href: 'https://huggingface.co/docs', title: 'Hugging Face', subtitle: 'State-of-the-art AI Models' },
  ],
  videos: [
    { href: 'https://youtu.be/ErH8YKpSsWI?si=yn2Se5KYQjipSA2v', title: 'Complete Generative AI Course', thumbnail: 'https://i.ytimg.com/vi/ErH8YKpSsWI/hq720.jpg' },
  ],
};

const GenAI = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="purple"
    domainColor={domainColor}
  />
);

export default GenAI;