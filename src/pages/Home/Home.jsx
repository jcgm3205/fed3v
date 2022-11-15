import React from 'react';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <main className='main-container home'>
            <section className='home-welc' >
                <div className="bs-type-container">
                    <h1 className='home__title m-b-20px'>
                        Welcome to <span className='text-grayish-blue-dark'>FED3v</span>
                    </h1>
                    <h2 className='home__subtitle m-b-20px'>
                        I'm <span className='text-grayish-blue-dark' >Juan Carlos Gonzalez-Marin</span>
                        <br />
                        Future Front-End Developer 
                    </h2>
                    <div className="home-welc-cont">
                        <p className='home-welc-cont-text m-r-20px'>Find Me Here: </p>
                        <a href='https://www.linkedin.com/in/juan-carlos-gonz%C3%A1lez-mar%C3%ADn-b96b2964/' className='m-r-20px'>
                            <FontAwesomeIcon icon={faLinkedin} className="home-welc-icon"/>
                        </a>
                        <a href='https://github.com/jcgm3205' className='m-r-20px'>
                            <FontAwesomeIcon icon={faGithub} className="home-welc-icon" />
                        </a>
                        <a href='mailto:jcglezmarin@gmail.com' className='m-r-20px' >
                            <FontAwesomeIcon icon={faEnvelope} className="home-welc-icon" />
                        </a>
                    </div>
                </div>                    
            </section>
            <section className='home-skills' >

            </section>
        </main>
    );
}
