import React from 'react';
import "./Footer.css";
import {FiInstagram} from  "react-icons/fi";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaTelegram} from 'react-icons/fa';

export const Footer = (props) => {
    return (
      <footer>
        <a href="#" className='footer_logo'>Khushi Agarwal</a>
        <ul className='permalinks'>
          <li> <a href="#">Home</a></li>
          <li> <a href="#About">About</a></li>
          <li> <a href="#Experience">Experience</a></li>
          <li> <a href="#Services">Services</a></li>
          <li> <a href="#Portfolio">Portfolio</a></li>
          <li> <a href="#Testimonials">Testimonial</a></li>
          <li> <a href="#Contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
          <a href="#"><AiOutlineTwitter/></a>
          <a href="#"><FiInstagram/></a>
          <a href="#"><FaTelegram/></a>
        </div>

        <div className="footer_copyright">
          <small>&copy; khushiagarwal_  . All rights reserved.</small>
        </div>
      </footer>

    );
};
