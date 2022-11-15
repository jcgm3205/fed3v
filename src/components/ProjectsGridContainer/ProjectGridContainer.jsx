import React from 'react';

import { projectData } from '../../assets/data';
import ProjectCard from '../ProjectCard/ProjectCard';
import "./ProjectGridContainer.css";

export default function ProjectGridContainer() {
    return (
        <section className='projects-grid-container bs-type-container'>
            {
                projectData.map( entry => (
                <ProjectCard    key={entry.id}
                                pathID={entry.id}
                                source={entry.source}
                                title={entry.title}
                                desc={entry.desc}
                                demolink={entry.demolink}
                                codelink={entry.codelink}  />    
            ))}                
        </section>
    );
}
