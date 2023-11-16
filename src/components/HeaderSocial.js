import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa'
import {FaTelegram} from 'react-icons/fa';

export const HeaderSocial = (props) => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://www.github.com" target='_blank'><FaGithub/></a>
            <a href="https://www.Telegram.com" target='_blank'><FaTelegram/></a>
        </div>
    );
};

