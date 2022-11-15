import React from 'react';
import {Link} from "react-router-dom";

import "./ProjectCard.css";

export default function ProjectCard({pathID, source, title, desc, demolink, codelink}) {
    return (
        <article className='projectcard' >
            <div className="projectcard-img-container">
                <Link to={`/projects/${pathID}`} >
                    <img src={source} alt="Project preview image" className='projectcard-img' />    
                </Link>                
            </div>
            <section className="projectcard-card-body">
                <h2 className="projectcard__card-title">{title}</h2>
                <p className='projectcard__card-text'>{desc}</p>
                <div className="card-button-container">
                    <a href={demolink} className='projectcard__card-button bs-type-btn' >View Demo</a>
                    <a href={codelink} className='projectcard__card-button bs-type-btn' >View Code</a> 
                </div>
            </section>   
        </article>        
    );
}