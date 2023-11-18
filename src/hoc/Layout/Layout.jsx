import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Layout.css';
import Toolbar from '../../components/Ui/Toolbar/Toolbar';
import LandingPage from '../../containers/LandingPage/LandingPage';
import Footer from '../../components/Ui/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

class Layout extends Component{

    state = {
        menu: false,
    }

    menuToggleHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

render(){
    return (
        <div className='Layout'>
            <Toolbar menu={this.state.menu} menuToggleHandler={this.menuToggleHandler}/>
            <ParallaxProvider>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                </Routes>
            </ParallaxProvider>
            <Footer />
        </div>
      )
}
}

export default Layout