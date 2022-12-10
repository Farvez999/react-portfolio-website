import React from 'react';
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/me1.png'
import HeaderSocial from './HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className='container header-container'>
                <h5>Hello I'm</h5>
                <h1>Farvez Hossen</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA></CTA>
                <HeaderSocial />

                <div className="me-img">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll-down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;