import React, { Component } from 'react';
import classes from './RenewalTech.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import renewalProjectChartLowSize from '../../assets/renewal-project-chart-low-size.png';
import FUNCTIONS from '../../functions/functions';
import renewalTechImage from '../../assets/renewal-tech-banner.jpg';

class RenewalTech extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){

        return (
            <div className={classes.renewalTech}>
                    <div className='pillar-title' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalTechImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <h1>{this.props.subjects[1]}</h1>
                    </div>
                    <Link className='main-button' to='https://5d164f.myshopify.com/collections/all'>
                        <h4>Check Out Our {this.props.subjects[1]} Store</h4>
                    </Link>
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>At Renewal Tech, we redefine business IT through circular services, covering the
                            entire lifecycle, from supplying refurbished hardware to responsible IT disposal and
                            recycling. For businesses seeking eco-friendly alternatives, Renewal Tech is the
                            solution, providing sustainable options that enhance efficiency, productivity, and
                            environmental responsibility. We seamlessly integrate eco-friendly practices into the
                            corporate sphere, proving that technology can be both innovative and
                            environmentally conscious. Let us guide you through the sustainable lifecycle
                            management of your IT assets across four crucial decision-making stages:
                        </p>
                    </div>
                    <img id={classes.renewalTechImage} src={renewalProjectChartLowSize} />
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>Ready to transform your business with circular IT solutions? Reach out to Renewal
                            Tech and let&#39;s embark on a sustainable journey together. Whether you&#39;re looking to
                            optimise your IT estate, extend product life, responsibly dispose of assets, or explore
                            refurbished options, our team is here to assist.
                        </p>
                    </div>
                    <div className='landing-page-full-screen'>
                        <Link className='main-button' to='https://5d164f.myshopify.com/collections/all'>
                            <h4>Check Out Our {this.props.subjects[1]} Store</h4>
                        </Link>
                    </div>
            </div>
        )
    }
}

export default RenewalTech