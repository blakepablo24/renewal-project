import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const footer = (props) => {
    return(
        <div className='Footer'>
            <p>Find us on Social Media</p>
            <div className='links'>
                <FaFacebookSquare />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <p>Rights reserved renewal project. Aston Villa are the best</p>
        </div>
    )
}

export default footer