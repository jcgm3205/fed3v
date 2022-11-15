import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function TimeLineComp() {
    return (
        <>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement    date='2004 - 2009'
                                            iconStyle={{backgroundColor: '#3e497a', 
                                                        color: "#fff",
                                                        boxShadow: "none"}}
                                            icon={ <FontAwesomeIcon icon={faGraduationCap} /> }>
                    <h3 className='vertical-timeline-element-title' >
                        Faculty of Sciences, National Autonomous University of Mexico
                    </h3>
                    <p>Bachelor of Physics</p>                       
                </VerticalTimelineElement>
                <VerticalTimelineElement    date='2015 - 2018'
                                            iconStyle={{backgroundColor: '#3e497a', 
                                                        color: "#fff",
                                                        boxShadow: "none"}}
                                            icon={ <FontAwesomeIcon icon={faGraduationCap} /> }>
                    <h3 className='vertical-timeline-element-title' >
                        Institute of Geophysics, National Autonomous University of Mexico
                    </h3>
                    <p>Master of Earth Sciences</p>                       
                </VerticalTimelineElement>
                <VerticalTimelineElement    date='2018'
                                            iconStyle={{backgroundColor: '#e9d35b', 
                                                        color: "#fff",
                                                        boxShadow: "none"}}
                                            icon={ <FontAwesomeIcon icon={faBriefcase} /> }>
                    <h3 className='vertical-timeline-element-title' >
                        Faculty of Sciences, National Autonomous University of Mexico
                    </h3>
                    <p>Assistant of Dr. Leonardo Javier Sanchez-Peniche</p>                       
                </VerticalTimelineElement>
                <VerticalTimelineElement    date='2019'
                                            iconStyle={{backgroundColor: '#e9d35b', 
                                                        color: "#fff",
                                                        boxShadow: "none"}}
                                            icon={ <FontAwesomeIcon icon={faBriefcase} /> }>
                    <h3 className='vertical-timeline-element-title' >
                        Faculty of Sciences, National Autonomous University of Mexico
                    </h3>
                    <p>Assistant of Dr. Roberto Alejandro Ruelas-Mayorga</p>                       
                </VerticalTimelineElement>                                
            </VerticalTimeline>
        </>
    );
}
