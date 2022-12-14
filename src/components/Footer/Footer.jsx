import React from 'react';
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer-logo'>Farvez Hossen</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div>
                <div className="footer-socials">
                    <a href="https://facebook.com"><FaFacebookF></FaFacebookF></a>
                    <a href="https://instagram.com"><FaInstagram></FaInstagram></a>
                    <a href="https://twitter.com"><FaTwitter></FaTwitter></a>
                </div>
            </div>

            <div className='footer-copyright'>
                <small>@copy: Farvez Hossen. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;