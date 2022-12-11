import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;