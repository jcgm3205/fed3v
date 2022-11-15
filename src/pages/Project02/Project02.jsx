import React from 'react';

import { projectData } from '../../assets/data';
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";

export default function Project02() {

    const data = projectData.find( entry => entry.id === "p002" );

    return (
        <main className="main-container project-cont">
            <ProjectDetails data={data} />
            <div className="project-description-cont p-x-16px p-b-40px">
                <p className='project__properties-desc-par p-l-md-20px'> 
                    In the website <a href='https://www.frontendmentor.io/'>FrontEndMentor.io</a>, it's 
                    proposed to create this project, where it's requested to create a product page 
                    for a fake e-commerce site. The page must be done as close as posible to a 
                    layout given and must show specific user-experience characteristics 
                    (you can check more info about the 
                    challenge <a href='https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6'>here</a>). 
                </p> 
                <p className='project__properties-desc-par p-l-md-20px'> 
                    For the layout, two presentations are indicated: One for desktops and laptops and 
                    a second for smartphones. Tablets and similar devices are not taken into account. 
                </p> 
                <p className='project__properties-desc-par p-l-md-20px'> 
                    The presentations share some settings: A header and a main content section, 
                    without a footer. The header (for the desktop layout) includes a logo, a 
                    non-functional navigation bar, a shopping cart component and a icon image 
                    where it is simulated an user avatar. The links in the navigation bar and 
                    the image icon have 'hover' effects and the shopping cart has some functions. 
                    In the mobile layout, the header only displays the logo, the shopping cart 
                    icon and the fake user avatar icon. The navigation bar has a style similar 
                    to the components known as 'off-canvas', where the link list is hidden 
                    off-screen and a so-called 'burger' button is used to expose and to hide 
                    the navigation menu.
                </p> 
                <p className='project__properties-desc-par p-l-md-20px'>
                    The main content it's divided into two subsections. A gallery with some 
                    pictures of the product (located at the left in the desktop-view and 
                    first shown at the mobile-view) and a box with the product-related 
                    information (located at the right of the desktop-view and shown after 
                    the gallery at the mobile-view).  Meanwhile the product information box 
                    has almost the same layout in both cases, the gallery has a different 
                    work in each presentation. For desktops, the gallery is composed of two
                    parts: One where there is a large, clickable picture that opens a 
                    so-called 'light gallery' - apart from the page - and a set of thumbnails 
                    capable of changing the large image when clicked. The mobile view only 
                    shows the pictures of the 'light gallery' as a carousel where a pair of
                    buttons are used to change the current image. 
                </p> 
                <p className='project__properties-desc-par p-l-md-20px m-b-10px'> 
                    As indicated in the challenge page, it's requested to create the product 
                    page with specific functionalities, which are listed below: 
                </p> 
                <ul className='project__list p-l-60px'> 
                    <li>See the appropiate "hover" states for the indicated interactive elements on the page</li> 
                    <li>The "lightbox" gallery must appear on the screen by clicking on the large product image</li> 
                    <li>Must be possible to switch the large product image by clicking on the small thumbnail images</li> 
                    <li>Must be possible to add items to the cart</li> 
                    <li>To view the cart and remove items from it</li> 
                </ul>
            </div>
        </main>
    );
}
