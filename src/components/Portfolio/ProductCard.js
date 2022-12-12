import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'

const ProductCard = ({ project }) => {

    const { _id, title, shortDescription, img, LiveLink } = project;
    console.log(project)

    return (
        <article className='portfolio-item'>
            <div className="portfolio-item-img">
                <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <small>{shortDescription}</small>
            <div className="portfolio-item-cta">
                <Link to={`/projectDetails/${_id}`} className='btn btn-primary' target='blank'>Explore More</Link>
                {/* <a href={project.githubLink} className='btn btn-primary' target='blank'>Github</a> */}
                <a href={project.LiveLink} className='btn' target='blank'>Live Demo</a>
            </div>
        </article>
    );
};

export default ProductCard;