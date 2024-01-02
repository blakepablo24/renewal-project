import React from 'react';
import classes from './MenuDrawerToggle.css?inline';
import { BiMenu, BiX } from "react-icons/bi";

const menuDrawerToggle = (props) => {

    let menuIcon = <BiMenu onClick={props.menuToggleHandler} />;

    if(props.menu){
        menuIcon = <BiX onClick={props.menuToggleHandler} />
    }

    return (
        <div onClick={props.menuToggleHandler} className='DrawerToggle'>
            {menuIcon}
        </div>
    )
}

export default menuDrawerToggle