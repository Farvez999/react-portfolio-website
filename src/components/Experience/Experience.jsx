import React from 'react';
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>React.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Next.js</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Express.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Node.js</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>API</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>JWT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill className='experience-details-icon' />
                            <div>
                                <h4>Stripe</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;