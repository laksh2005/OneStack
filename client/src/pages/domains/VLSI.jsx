import React from 'react';
import DomainPageTemplate from '../../components/domains/DomainPageTemplate';

// Domain-specific data
const domainName = "VLSI Design (Very Large Scale Integration)";
const domainColor = "bg-zinc-500";

const defaultTopics = [
  { id: 1, name: "Digital Design Basics", completed: false },
  { id: 2, name: "CMOS Technology", completed: false },
  { id: 3, name: "Circuit Design", completed: false },
  { id: 4, name: "RTL Design", completed: false },
  { id: 5, name: "Verilog HDL", completed: false },
  { id: 6, name: "ASIC Design Flow", completed: false },
  { id: 7, name: "Synthesis", completed: false },
  { id: 8, name: "Static Timing Analysis", completed: false },
  { id: 9, name: "Physical Design", completed: false },
  { id: 10, name: "DFT & Testing", completed: false },
  { id: 11, name: "Power Analysis", completed: false },
  { id: 12, name: "Verification", completed: false },
];

const description = 'Master VLSI design and semiconductor technology';
const techStack = ['Verilog', 'Cadence', 'Synopsys', 'FPGA'];
const resources = {
  docs: [
    { href: 'https://www.edaplayground.com/', title: 'EDA Playground', subtitle: 'Online HDL Development' },
  ],
  videos: [
    { href: 'https://youtube.com/playlist?list=PL1h5a0eaDD3pimcMlzW15RpW02HPzIziL&si=tJWpWKQCh7j2NL4Q', title: 'Complete VLSI Physical Design Course', thumbnail: 'https://i.ytimg.com/vi/kQYav5eZGeY/hqdefault.jpg' },
  ],
};

const VLSI = () => (
  <DomainPageTemplate
    domainName={domainName}
    defaultTopics={defaultTopics}
    description={description}
    techStack={techStack}
    resources={resources}
    colorKey="zinc"
    domainColor={domainColor}
  />
);

export default VLSI;