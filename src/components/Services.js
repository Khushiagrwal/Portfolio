import React from 'react';
import "./Services.css";
import {BiCheck} from "react-icons/bi";

export const Services = (props) => {
    return (
        <section id="Services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className='services'>
                    <div className="services_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="services_list">
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        
                    </ul>
                </article>

                <article className='services'>
                    <div className="services_head">
                        <h3>Programming</h3>
                    </div>

                    <ul className="services_list">
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        
                        
                    </ul>
                </article>

                <article className='services'>
                    <div className="services_head">
                        <h3>Programming</h3>
                    </div>

                    <ul className="services_list">
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='services_list-icon'/> 
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </li>
            
                    </ul>
                </article>
            </div>
        </section>
    );
};
