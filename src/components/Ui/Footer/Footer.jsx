import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footer = (props) => {
    return(
        <div className='Footer'>
            <p>Find us on Social Media</p>
            <div className='links'>
                <FaFacebookSquare />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <div className="policy-container">
                <Link to="/cookie-policy" ><p>Cookie Policy</p></Link>
                <Link to="/privacy-policy" ><p>Privacy Policy</p></Link>
            </div>
            <p>Rights reserved renewal project.</p>
        </div>
    )
}

export default footer