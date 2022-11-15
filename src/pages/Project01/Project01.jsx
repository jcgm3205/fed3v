import React from "react";

import { projectData } from '../../assets/data';
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

export default function Project01(){

    const data = projectData.find( entry => entry.id === "p001" );

    return(
        <main className="main-container project-cont">
            <ProjectDetails data={data} />  
            <div className="project-description-cont p-x-16px p-b-40px">
                <p className="project__properties-desc-par p-l-md-20px">
                    <a href="https://www.frontendmentor.io/">FrontEndMentor.io</a> is
                    a website where it can found a collection of projects in order 
                    to practice web development skills at various levels of "difficulty", 
                    from the simplest and less demanding set-ups, to some ones with high 
                    level of complexity and detail. This is a intermediate, special 
                    project from the site, because of their characteristics and of its 
                    context (you can read the challenge 
                    info <a href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3">here</a>). 
                </p> 
                <p className="project__properties-desc-par p-l-md-20px"> 
                    For the project it is requested to create, for a fake space travel 
                    company, a small website made of four main pages: A "Home" page and 
                    three more with different contents. The page must be done as close 
                    as posible to a layout given and must show specific user-experience 
                    characteristics. This project its a special case because it has 
                    included a Figma design. And the possibility of using this files 
                    its a feature only available with the premium version of FrontEndMentor. 
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    All the pages have a navigation bar at the top of each one. This bar 
                    includes the company logo and a link list where, in the desktop and the tablet views, 
                    each link has a "hover" effect. The link list is moved "off-screen" for the 
                    mobile view, and its placed in a so-called "off-canvas" component. It 
                    is showed on the screen, by pressing the "burger" button that appears 
                    at the navigation bar, and it is closed, pressing the "x" button of the 
                    link list, located at the right. 
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    The "Home" page is the simplest of the four, with respect of content and 
                    functionality features. In all the views, includes some introductory text
                    and a big button with a "hover" effect but without, actually, any uses. 
                    The challenge site has no 
                    requirements for this button, therefore, can be taken as a cosmetic element.
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    The next one is the "Destinations" page, where the user can "pick" one of four
                    possible destinations for a hypothetical trip. For the desktop view, 
                    the content is located using a two-columns grid (CSS Grid) and for the 
                    mobile views, using just one column. The destination can be chosen using
                    the buttons located below the planet (or moon). Such buttons have a "hover"
                    effect too, for the desktop view, and this effect becomes an "active"
                    effect for the mobile layouts.
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    The site also includes a "Crew" page, where the user can meet the members of 
                    the crew of the ship, responsible for the travels. The mobile views has the 
                    information of each member arranged in a single column, whereas the desktop 
                    view uses two. As a curious fact with respect of the mobile views, its that 
                    the phone layout locates a image of each crew member before its respective
                    information. But the tablet view has the image after the information.
                    The pages uses a set of small disk buttons to change the information and the 
                    image of each member of the crew.  
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    The last page of the site includes information of the ship and other technologies
                    related with the trips offered by the company. The presentation of this page 
                    is similar to the past two, in the sense of using a column for the mobile views
                    and two for the desktop view, except for the fact that the columns are not 
                    equally sized for this page. Whereas the last two pages has approximately the 
                    same size for each column. Another set of buttons is used to change the 
                    information shown to the user, but in this case, the buttons are bigger and
                    are numbered. 
                </p>
                <p className="project__properties-desc-par p-l-md-20px">
                    As indicated in the challenge page, it's requested to create the site with 
                    specific functionalities, which are listed below:
                </p>
                <ul className='project__list p-l-60px'> 
                    <li>View the optimal layout for each of the website's pages depending on their device's screen size</li> 
                    <li>See the corresponding 'hover' effects for all the interactive elements on the page</li> 
                    <li>View each page and be able to toggle between the tabs (or buttons) to see new information</li> 
                </ul>
            </div>  
        </main>
    );
}