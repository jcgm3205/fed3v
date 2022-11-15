import React from 'react'

export default function ProjectDetails({data}) {
    return (
        <>
            <h1 className='custom-title bs-type-container'>{data.title}</h1>
            <section className='bs-type-container project p-t-20px' >
                    <div className="project-img-panel m-b-40px">
                        <div className='project-img-cont m-b-20px'>
                            <img src={`../${data.source}`} alt="Project screen-shot"/>
                        </div>
                        <div className='project-btn-container'>
                            <a href={data.demolink} className='project__button bs-type-btn m-b-20px m-b-md-0' >View Live Demo</a>
                            <a href={data.codelink} className='project__button bs-type-btn' >View Source Code</a>
                        </div>
                    </div>

                    <div className='project-info-panel p-x-lg-24px'>
                        <h3 className='project__properties-title-libraries m-b-20px text-grayish-blue-dark'>Technologies used for this project:</h3>
                        <p className='project__properties-list-libraries m-b-20px p-l-md-20px'>{data.techs}</p>
                        <h3 className='project__properties-title-languages m-b-20px text-grayish-blue-dark'>Languages involved in this project:</h3>
                        <p className='project__properties-list-languages m-b-20px p-l-md-20px' >{data.languages}</p>
                        <h3 className='project__properties-title-desc m-b-20px text-grayish-blue-dark' >Description of the project:</h3>
                    </div>
            </section>
        </>
    );
}
