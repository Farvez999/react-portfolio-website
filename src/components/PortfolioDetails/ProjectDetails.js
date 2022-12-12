import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetails = () => {
    const projects = useLoaderData();
    console.log(projects);



    const { _id, title, img, src, fullDescription, githubLink, LiveLink } = projects;
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
                        <h2>{title}</h2>
                        {/* <span>1299</span> */}
                    </div>


                    <p>{fullDescription}</p>

                    <div className="portfolio-item-cta">
                        <a href={githubLink} className='btn btn-primary' target='blank'>Github</a>
                        <a href={LiveLink} className='btn' target='blank'>Live Demo</a>
                    </div>

                    {/* <div className='thumb'>
                        {
                            src.map((img, i) => (
                                <img src={img} alt="" key={i}
                                    onClick={() => setMainImage(img)} />
                            ))
                        }
                    </div> */}


                </div>
            </div>


        </div>
    );
};

export default ProjectDetails;