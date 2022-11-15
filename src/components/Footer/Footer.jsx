import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faUnsplash } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import "./Footer.css";

export default function Footer() {
    return (
        <footer className='footer p-t-40px p-t-md-20px'>
            <div className='bs-type-container footer-main-content m-b-20px'>
                <section className='footer-credit-links m-b-40px m-b-md-0'>
                    <p className='footer__text m-b-20px text-align-md-left'>Image credits to:</p>
                    <ul className='footer-linkList flex-dir-col text-align-md-left'>
                        <li className='m-b-10px'>
                            <FontAwesomeIcon icon={faUnsplash} className="footer-socialMedia-icon m-r-20px"/>
                            <a href='https://unsplash.com/@clark_fransa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                               className='footer__link'>
                                Arnold Francisca (Unsplash)
                            </a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUnsplash} className="footer-socialMedia-icon m-r-20px"/>
                            <a href='https://unsplash.com/@altumcode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
                               className='footer__link'>
                                AltumCode (Unsplash)
                            </a>
                        </li>
                    </ul>
                </section>
                <section className='footer-socialMediaContainer'> 
                    <p className='footer__text m-b-20px text-align-md-left' >
                            You can find me at:
                    </p>
                    <ul className='footer-linkList'>
                        <li className='m-b-md-10px'>
                            <a href='https://github.com/jcgm3205' className='footer__link'>
                                <FontAwesomeIcon icon={faGithub} className="footer-socialMedia-icon m-r-md-20px"/>
                                <span className='d-md-inline'>Github</span>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/juan-carlos-gonz%C3%A1lez-mar%C3%ADn-b96b2964/' className='footer__link'>
                                <FontAwesomeIcon icon={faLinkedin} className="footer-socialMedia-icon m-r-md-20px"/>
                                <span className='d-md-inline'>LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="bs-type-container footer-copy-cont">
                <p className='footer__text'>&copy; 2022 FED3v</p>
            </div>
        </footer>
    );
}
