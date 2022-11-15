import React from 'react';

import ProjectGridContainer from '../../components/ProjectsGridContainer/ProjectGridContainer';
import "./Projects.css";

export default function Projects() {
    return (
        <main className='main-container projects'>
            <h1 className='custom-title bs-type-container text-grayish-blue-dark'>My Personal Projects</h1>
            <ProjectGridContainer />
        </main>
    );
}
