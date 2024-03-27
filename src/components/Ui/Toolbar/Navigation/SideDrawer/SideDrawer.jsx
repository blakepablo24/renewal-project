import React, { Component } from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../../../hoc/Auxilary/Auxilary';
import Backdrop from '../../../../Ux/Backdrop/Backdrop';

class SideDrawer extends Component {

    getData = (val) => {
        this.props.sendData(val);
    }

    render(){
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (this.props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop clicked={this.props.clicked.bind(this, "mobileNav")} open={this.props.open} />
            <div className={attachedClasses.join(' ')}>
                <NavigationItems 
                    toggleProjectsShownHandler={this.props.toggleProjectsShownHandler}
                    projectsShown={this.props.projectsShown}
                    clicked={this.props.clicked.bind(this, "mobileNav")} 
                    sendData={this.getData}
                />
            </div>
        </Aux>
    )
}
}

export default SideDrawer