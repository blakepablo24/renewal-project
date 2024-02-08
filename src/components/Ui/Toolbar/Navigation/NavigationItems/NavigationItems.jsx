import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {
    
        return(
            <div className={classes.NavigationItems}>
                <div className={classes.topNavItemsContainer}>
                    <NavigationItem clicked={props.clicked} link="/" linkName="home"/>
                    {/* <NavigationItem clicked={props.clicked} link="/about-us" linkName="about us"/> */}
                    <NavigationItem clicked={props.clicked} link="/renewal-hub" linkName="renewal hub"/>
                    <NavigationItem clicked={props.clicked} link="/renewal-tech" linkName="renewal tech"/>
                    <NavigationItem clicked={props.clicked} link="/renewal-impact" linkName="renewal impact"/>
                    <NavigationItem clicked={props.clicked} link="/renewal-building-protocols" linkName="renewal building protocols"/>
                    {/* <NavigationItem clicked={props.clicked} link="/contribute-to-the-cause" linkName="contribute to the cause"/> */}
                    <NavigationItem clicked={props.clicked} link="/contact-form" linkName="contact us"/>
                </div>
            </div>           
        )
}

export default navigationItems