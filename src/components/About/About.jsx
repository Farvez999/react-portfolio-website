import React from 'react';
import './About.css'
import ME from '../../assets/me-about1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    {/* <div className="about-me-image"> */}
                    <img className='about-me-image' src={ME} alt="AboutImage" />
                    {/* </div> */}
                </div>

                <div className="about-content">
                    <div className="about-cards">
                        <article className="about-card">
                            <FaAward className='about-icon'></FaAward>
                            <h5>Experience</h5>
                            <small>6+ Months Working</small>
                        </article>
                        <article className="about-card">
                            <FiUsers className='about-icon'></FiUsers>
                            <h5>Clients</h5>
                            <small>20+ WorldWide</small>
                        </article>
                        <article className="about-card">
                            <VscFolderLibrary className='about-icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>I'm Farvez Hossen, an aspiring MERN Stack Developer with strong knowledge of JavaScript, Es6, React , Express, MongoDB. I always love to learn new technologies.
                        Pursuing Bachelor degree in Computer science and engineering from European University Of Bangladesh.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;