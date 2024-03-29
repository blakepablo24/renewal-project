import React, { useEffect } from 'react';
import classes from './CookiesPolicy.module.css';
import FUNCTIONS from '../../functions/functions';

export default function CookiesPolicy(){

    useEffect(() => {
        FUNCTIONS.scrollToTop();
      });

    return(
        <div className={classes.CookiesPolicy}>
            <div className='pillar-title'>
                <h1>Cookie Policy</h1>
            </div>
            <h3 className='policy-title'>Cookies</h3>
            <p className='policy-paragraph'>By using the website of renewal-project you consent to the usage of data captured by the use of cookies. Cookies allow us to do multiple things to enhance and improve your browsing experience on our website. If you wish to turn off cookies, please adjust your browser settings. Our website will continue to function without cookies.</p>
            <p className='policy-paragraph'>We use cookies to track visitors to our website; these details are in no way personal or identifiable details and will never be shared. Our cookies are for the sole purpose of improving the performance of our website for you, the user; this includes allowing us to geo-target our users, to make websites more personal and relevant to you.</p>
            <h3 className='policy-title'>Google AdWords</h3>
            <p className='policy-paragraph'>We use Google AdWords to see which pages led to our users submitting contact forms to us, which allows us to create a more effective marketing campaign, and make better use of our paid search budget.</p>
            <h3 className='policy-title'>Website Optimiser</h3>
            <p className='policy-paragraph'>Our website optimiser uses cookies to remember your search history. The information collected is anonymous and not personally identifiable, and allows us to generate more relevant results for your searches in the future.</p>
            <h3 className='policy-title'>Call Tracking</h3>
            <p className='policy-paragraph'>We use Call Tracking to set dynamic phone numbers on our site. These help us identify how you found the website when you call us and allows us to identify the source that you used to find the website. It gives a better idea of our users’ requirements and lets us tailor our advertising methods in the future. If you phone us, your call may be recorded for training and quality purposes.</p>
            <h3 className='policy-title'>Visitor Tracking</h3>
            <p className='policy-paragraph'>We often record and monitor user’s behaviour around a website to analyse how we can improve its performance.</p>
        </div>
    )
}