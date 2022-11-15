import React, {useState, useEffect} from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import "./NavBar.css";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect( () => {
        handleClose();
    }, [location]);

    let classes = isOpen ? "navbar-linkList-cont open" : "navbar-linkList-cont close";

    function handleOpen(){
        setIsOpen( true );
        document.body.style.overflow = "hidden";
    }

    function handleClose(){
        setIsOpen( false )
        document.body.style.overflow = "visible";
    }

    return (
        <nav className="navbar">
            <div className="bs-type-container">
                <div className={classes}>
                    <button className="navbar__close-btn"
                            onClick={handleClose}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </button>
                    <ul className='navbar-linkList'>
                        <li><NavLink className="navbar__link" to="/" >Home</NavLink></li>
                        <li><NavLink className="navbar__link" to="/projects" >Projects</NavLink></li>
                        <li><NavLink className="navbar__link" to="/experience" >Experience</NavLink></li>
                    </ul>
                </div>
                <button className='navbar__menu-btn'
                        onClick={handleOpen}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    );
}
