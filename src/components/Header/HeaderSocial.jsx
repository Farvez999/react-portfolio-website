import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs'

const HeaderSocial = () => {
    return (
        <div className='header-social'>
            <a href="https/github.com" target='-blank'><BsGithub></BsGithub></a>
            <a href="https/linkedin.com" target='-blank'><BsLinkedin></BsLinkedin></a>
            <a href="https/dribble.com" target='-blank'><BsDribbble></BsDribbble></a>
        </div>
    );
};

export default HeaderSocial;