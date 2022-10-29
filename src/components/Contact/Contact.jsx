import React from 'react';
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fcsxvv8', 'template_e9phruc', form.current, '1TrzC8P2Pp4OfkCcl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <article className='contact-option'>
                        <MdEmail className='contact-option-icon'></MdEmail>
                        <h4>Email</h4>
                        <h5>farvezhossen101@gmail.com</h5>
                        <a href="mailto:farvezhossen101@gmail.com" target='blank'>Send Message</a>
                    </article>

                    <article className='contact-option'>
                        <RiMessengerFill className='contact-option-icon'></RiMessengerFill>
                        <h4>Messenger</h4>
                        <h5>পারভেজ আব্দুল্লাহ</h5>
                        <a href="https://m.me/farvez101" target='blank'>Send Message</a>
                    </article>

                    <article className='contact-option'>
                        <BsWhatsapp className='contact-option-icon'></BsWhatsapp>
                        <h4>WhatsApp</h4>
                        <h5>+88 01776711862</h5>
                        <a href="https://web.whatsapp.com/" target='blank'>Send Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" cols="7" rows="10" placeholder='Your Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;