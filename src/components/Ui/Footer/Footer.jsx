import React from 'react';
import classes from './Footer.module.css';
import { FaTwitter, FaLinkedin, FaFacebookSquare, FaPhone, FaAt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const footer = (props) => {
    return(
        <div className={classes.Footer}>
            <div className={classes.policyContainer}>
                <div className={classes.contactInformation}>
                    <FaPhone />
                    <p>+44 117 239 5614</p>
                </div>
                <div className={classes.contactInformation}>
                    <FaAt />
                    <p>info@renewal-project.com</p>
                </div>
            </div>
            <div className={classes.footerLinks}>
                <Link className={classes.footerLink} target="_blank" to="https://web.facebook.com/renewalprojectofficial"><FaFacebookSquare /></Link>
                <Link className={classes.footerLink} target="_blank"to="https://x.com/renewalpuk"><FaTwitter /></Link>
                <Link className={classes.footerLink} target="_blank"to="https://www.linkedin.com/company/renewal-project-official"><FaLinkedin /></Link>
            </div>
            <div className={classes.policyContainer}>
                <Link to="/cookie-policy" ><p>Cookie Policy</p></Link>
                <Link to="/privacy-policy" ><p>Privacy Policy</p></Link>
            </div>
            <p className={classes.footerHeader}>Rights reserved renewal project.</p>
        </div>
    )
}

export default footer