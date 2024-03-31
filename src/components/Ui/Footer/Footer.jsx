import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPhone, FaAt } from "react-icons/fa";

const footer = (props) => {
    return(
        <div className='Footer'>
            <div className="policy-container">
                <div className='contact-information'>
                    <FaPhone />
                    <p>07795304633</p>
                </div>
                <div className='contact-information'>
                    <FaAt />
                    <p>info@renewal-project.com</p>
                </div>
            </div>
            <div className='links'>
                <FaFacebookSquare />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <div className="policy-container">
                <Link to="/cookie-policy" ><p>Cookie Policy</p></Link>
                <Link to="/privacy-policy" ><p>Privacy Policy</p></Link>
            </div>
            <p className='footer-header'>Rights reserved renewal project.</p>
        </div>
    )
}

export default footer