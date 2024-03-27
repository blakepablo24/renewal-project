import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo';
import { BiMenu, BiX } from "react-icons/bi";
import MenuDrawerToggle from './MenuDrawerToggle/MenuDrawerToggle';
import NavigationItems from '../Toolbar/Navigation/NavigationItems/NavigationItems';


const toolbar = (props) => {

    return(
        <div className='Toolbar'>
            <Logo />
            <MenuDrawerToggle menu={props.menu} menuToggleHandler={props.menuToggleHandler.bind(this, "mobileNav")}/>
            <div className='toolbarLargeScreensOnly'>
                <NavigationItems 
                    toggleProjectsShownHandler={props.toggleProjectsShownHandler}
                    projectsShown={props.projectsShown}
                    clicked={props.clicked.bind(this, "largeScreen")} 
                />
            </div>
        </div>
    )
}

export default toolbar