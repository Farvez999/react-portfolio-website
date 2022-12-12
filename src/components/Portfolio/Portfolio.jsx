import React, { useEffect } from 'react';
import './Portfolio.css'
import { useState } from 'react';
import ProductCard from './ProductCard';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('https://react-portfolio-server-pi.vercel.app/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, [])

    console.log(projects);

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {
                    projects.map(project =>
                        <ProductCard
                            key={project.id}
                            project={project}
                        ></ProductCard>
                    )
                }
            </div>

            {/* <div className="container portfolio-container">
                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={'https://images.unsplash.com/photo-1648824572347-517357c9c44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1824&q=80'} alt="" />
                    </div>
                    <h3>PC House</h3>
                    <small>This website is related to selling used
                        (second-hand products) with the ability to advertise a product.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/pc-house-project-reactJs" className='btn' target='blank'>Github</a>
                        <a href="https://used-products-resale-clients.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'} alt="" />
                    </div>
                    <h3>Doctor Portal</h3>
                    <small>Patients can booking the doctor's
                        appointment from the Doctor Portal website.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/doctors-portal-client" className='btn' target='blank'>Github</a>
                        <a href="https://doctors-portal-aef0d.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'} alt="" />
                    </div>
                    <h3>Cute cut Hair Studio</h3>
                    <small>Experience professional hair care from
                        one of the top salons in Dhaka, Bangladesh.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/Hair-Studio-Project" className='btn' target='blank'>Github</a>
                        <a href="https://travel-tips-a4437.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="" />
                    </div>
                    <h3>Shikhbo</h3>
                    <small>Shikhbo is a skill development platform focusing on live learning.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/Shikhbo-Project-ReactJS" className='btn' target='blank'>Github</a>
                        <a href="https://learning-platform-website.web.app/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={'https://images.unsplash.com/photo-1527383418406-f85a3b146499?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="" />
                    </div>
                    <h3>Genius Car</h3>
                    <small>Genius Car is Car parts services Website.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/genius-car-website" className='btn' target='blank'>Github</a>
                        <a href="https://genius-car-25aba.firebaseapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio-item'>
                    <div className="portfolio-item-img">
                        <img src={IMG6} alt="" />
                    </div>
                    <h3>Ema John</h3>
                    <small>Ema John is products sale e-commerces Website.</small>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com/Farvez999/ema-john-resources-project-react" className='btn' target='blank'>Github</a>
                        <a href="https://ema-john-resources-react.firebaseapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
                    </div>
                </article>

            </div> */}
        </section>
    );
};

export default Portfolio;