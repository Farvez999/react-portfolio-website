import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const projects = useLoaderData();
    console.log(projects);

    const navigate = useNavigate();



    const { _id, title, img, src, shortDescription, fullDescription, githubLink, LiveLink } = projects;
    // console.log(_id, title, img, src, fullDescription, githubLink, LiveLink);
    const [mainImage, setMainImage] = useState(src[0])

    const handleTab = i => {
        alert(i)
    }

    // const { products, index } = this.state;

    return (

        <div projects-container>

            <div className="details" key={_id}>

                <div className="big">

                    <div className="big-img">
                        <img src={mainImage} alt="" />
                    </div>

                    <div className='thumb'>
                        {
                            src.map((img, i) => (
                                <img src={img} alt="" key={i}
                                    onClick={() => setMainImage(img)} />
                            ))
                        }
                    </div>
                </div>



                <div className="box">

                    <div className="row">
                        <h1>{title}</h1>
                        {/* <span>1299</span> */}
                    </div>
                    <h3>-{shortDescription}</h3>

                    <div className="portfolio-item-cta">
                        <a href={githubLink} className='btn btn-primary' target='blank'>Github</a>
                        <a href={LiveLink} className='btn' target='blank'>Live Demo</a>
                    </div>

                    <p>{fullDescription[0]}</p>

                    <h2>{fullDescription[1]?.split(':')[0]}</h2>
                    <p>{fullDescription[1]?.split(':')[1]}</p>

                    <h2>{fullDescription[2]?.split(':')[0]}</h2>
                    <p>{fullDescription[2]?.split(':')[1]}</p>

                    <h2>{fullDescription[3]?.split(':')[0]}</h2>
                    <p>{fullDescription[3]?.split(':')[1]}</p>

                    {/* <div className='thumb'>
                        {
                            src.map((img, i) => (
                                <img src={img} alt="" key={i}
                                    onClick={() => setMainImage(img)} />
                            ))
                        }
                    </div> */}
                    <div className="portfolio-item-cta">
                        {/* <Link to={'#portfolio'} className='btn' target='blank'>Go To All Project</Link> */}
                        <Link className='btn' onClick={() => navigate(-1)}>Go To All Project</Link>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ProjectDetails;