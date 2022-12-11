import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsProjects = () => {

    const data = useLoaderData();
    console.log(data);
    const { title, images, description, subTitle } = data;
    console.log(title, images, description, subTitle);

    return (

        <div>
            <h1>Hello : {title}</h1>
        </div>
    );
};

export default DetailsProjects;