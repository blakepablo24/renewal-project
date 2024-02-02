import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Layout.css';
import Toolbar from '../../components/Ui/Toolbar/Toolbar';
import LandingPage from '../../containers/LandingPage/LandingPage';
import Footer from '../../components/Ui/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import SideDrawer from '../../components/Ui/Toolbar/Navigation/SideDrawer/SideDrawer';
// Pages
import RenewalHub from '../../containers/RenewalHub/RenewalHub';
import RenewalTech from '../../containers/RenewalTech/RenewalTech';
import RenewalImpact from '../../containers/RenewalImpact/RenewalImpact';


class Layout extends Component{

    state = {
        showSideDrawer: false,
        menu: false,
        subjects: ["Renewal Hub", "Renewal Tech", "Renewal Impact", "Renewal Building Protocols", "Items To Sell", "Other"],
        subject: "",
    }

    sideDrawerToggleHandler = (nav) => {
        // if(nav === "nav"){
        //     FUNCTIONS.scrollToTop();
        // }
        this.setState({
            showSideDrawer: !this.state.showSideDrawer,
            menu: !this.state.menu
        })
    }

render(){

    let sideDrawer =    <SideDrawer 
                            open={this.state.showSideDrawer} 
                            clicked={this.sideDrawerToggleHandler} 
                        />;

    // Prevent scrolling if menu open
    if(this.state.showSideDrawer){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    return (
        <div className='Layout'>
            <Toolbar    
                menu={this.state.menu} 
                menuToggleHandler={this.sideDrawerToggleHandler} 
                showSideDrawer={this.state.showSideDrawer} 
            />
            {sideDrawer}
            <ParallaxProvider>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path="/renewal-hub" exact element={<RenewalHub subjects={this.state.subjects} subject={this.state.subject}/>} />
                    <Route path="/renewal-tech" exact element={<RenewalTech subjects={this.state.subjects} subject={this.state.subject}/>} />
                    <Route path="/renewal-impact" exact element={<RenewalImpact subjects={this.state.subjects} subject={this.state.subject}/>} />
                </Routes>
            </ParallaxProvider>
            <Footer />
        </div>
      )
}
}

export default Layout