import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo';
import { BiMenu, BiX } from "react-icons/bi";
import MenuDrawerToggle from './MenuDrawerToggle/MenuDrawerToggle';


const toolbar = (props) => {

    return(
        <div className='Toolbar'>
            <Logo />
            <div></div> {/* temporary solution */}
            <MenuDrawerToggle menu={props.menu} menuToggleHandler={props.menuToggleHandler}/>
            {/* <div className='largeScreensOnly'>
                <NavigationItems />
            </div> */}
            {/* <DrawerToggle menu={props.menu} clicked={props.clicked}/> */}
        </div>
    )
}

export default toolbar