import React from 'react';
import CV from "../Assets/CV.pdf";
import "./Header.css";

export const Cta= (props) => {
    return (
    <>
        <div className="cta">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="./Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    </>
    );
};

