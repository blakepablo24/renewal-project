import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logoImage from '../../../assets/renewal-project-logo-zoomed.jpg';

const logo = (props) => {

    return (
        <div className='Logo'>
            <Link to="/">
                <img src={logoImage} alt="" />
            </Link>
        </div>
    )
}

export default logo