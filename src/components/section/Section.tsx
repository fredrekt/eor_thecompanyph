import React from 'react'
import './Section.scss'

interface SectionProps {
    className: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
    className,
    children
}) => {
  return (
    <section className={`sectionContainer ${className}`}>
        {children}
    </section>
  )
}

export default Section