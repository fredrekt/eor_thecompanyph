import React from 'react';
import './Section.scss';
const Fade = require("react-reveal/Fade")

interface SectionProps {
	className: string;
	children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, children }) => {
	return <Fade><section className={`sectionContainer ${className}`}>{children}</section></Fade>;
};

export default Section;
