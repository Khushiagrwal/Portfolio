import React from 'react';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
import "./About.css";

export const About = (props) => {
    return (
    <section id="About">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
           <div className="about_me">
                <div className="about_me-image">
                    {/* <img src={Me} alt="" className="about_me-image"/> */}
                </div>
            </div>
        
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className='about_icon'/>
                        <h5>Experience</h5>
                        <small>Fresher</small>
                    </article>

                    <article className="about_card">
                        <FiUsers className='about_icon'/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>

                    <article className="about_card">
                        <VscFolderLibrary className='about_icon'/>
                        <h5>Projects</h5>
                        <small>7+</small>
                    </article>
                </div>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, fugit consequatur aspernatur debitis, velit aperiam ipsa atque pariatur quia sapiente facere amet voluptatibus magnam similique sit eum et illo. Nesciunt.
                </p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>

    </section>   
    );

}
