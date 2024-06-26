import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {

        let projectsShown = classes.projectNotShown;
        
        if(props.projectsShown){
            projectsShown = classes.projectContainerShown
        }
    
        return(
            <div className={classes.NavigationItems}>
                <div className={classes.topNavItemsContainer}>
                    <NavigationItem clicked={props.clicked} link="/" linkName="Home"/>
                    <NavigationItem clicked={props.clicked} link="/renewal-shop" linkName="Shop"/>
                    {/* <NavigationItem clicked={props.clicked} link="/about-us" linkName="about us"/> */}
                    <div className={classes.projectOverallContainer}>
                        <h5 className={classes.projects} onClick={props.toggleProjectsShownHandler} >Projects</h5>
                        <div className={projectsShown}>
                            <NavigationItem clicked={props.clicked} link="/renewal-hub" linkName="Renewal Hub"/>
                            <NavigationItem clicked={props.clicked} link="/renewal-tech" linkName="Renewal Tech"/>
                            <NavigationItem clicked={props.clicked} link="/renewal-transport" linkName="Renewal Transport"/>
                            <NavigationItem clicked={props.clicked} link="/renewal-impact" linkName="Renewal Impact"/>
                            <NavigationItem clicked={props.clicked} link="/renewal-check" linkName="Renewal Check"/>
                        </div>
                    </div>
                    {/* <NavigationItem clicked={props.clicked} link="/contribute-to-the-cause" linkName="contribute to the cause"/> */}
                    <NavigationItem clicked={props.clicked} link="/contact-form" linkName="Contact Us"/>
                </div>
            </div>           
        )
}

export default navigationItems