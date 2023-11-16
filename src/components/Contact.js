import React ,{useRef} from 'react';
import "./Contact.css"
import {AiOutlineMail} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "@emailjs/browser";

export const Contact = (props) => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_b0rk8lh', 'template_a4gqfth', form.current, 'v0giLA_LyDbWp8_bB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
        };
      

    return (
        <section id="Contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>Khushiagarwal7821@gmail.com</h5>
                        <a href="mailto:khushiagarwal7821@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact_option">
                        <BsLinkedin className='contact_option-icon'/>
                        <h4>Linkedin</h4>
                        <h5>Khushi Agarwal</h5>
                        <a href="https://www.linkedin.com/in/khushi-agarwal-b819a0220/" target='_blank'>Send a message</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+8193820321</h5>
                        <a href="https://api.whatsapp.com/send?phone=8193820321" target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message"   rows="7" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

