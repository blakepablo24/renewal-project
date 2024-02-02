import React, { Component } from 'react';
import classes from './RenewalImpact.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import cleanWater from '../../assets/clean-water.jpg';
import solarPanels from '../../assets/solar-panels.jpg';
import resourceOptimization from '../../assets/resource-optimization.jpg';

class RenewalImpact extends Component{

    render(){

        return (
            <div className={classes.renewalImpact}>
                    <div className='pillar-title'>
                        <h1>{this.props.subjects[2]}</h1>
                    </div>
                    <div className='main-first-half-screen'>
                        <p className='landing-page-full-screen-paragraph'>Renewal Impact marks our commitment to global climate action. From purifying water to optimising resources and harnessing renewable energy, this pillar transforms charitable initiatives into sustained impact. International projects, powered by partnerships and donations, aim to bring tangible change to vulnerable communities. As we extend our reach, Renewal Impact will solidify Renewal Project's place on the international stage, advocating for a sustainable and resilient future that promotes social, economic, and environmental well-being.</p>
                    </div>
                    <div className='sub-intro-section'>
                        <h2 className={classes.renewalImpactSubTitle}>Resource Optimization</h2>
                        <div className='image-and-paragraphs-container'>
                            <div className='paragraphs-container'>
                                <p className='pillar-paragraph'>
                                    Through our resource optimization initiatives we specialise in developing innovative solutions that transform waste into valuable resources, contributing to a circular economy. By harnessing the potential of waste materials, such as coconut husks and other organic matter, we create sustainable energy and produce usable products that benefit both communities and the environment. Redefining waste management, enabling the efficient utilisation of resources while minimising environmental impact.
                                </p>
                            </div>
                            <img className='landingPageImage' src={resourceOptimization} />
                        </div>
                    </div>
                    <Link className='main-button' to='https://www.globalgiving.org/projects/fighting-deforestation-using-coconut-husk-charcoal/'>
                        <h4>see our resource optimisation initiatives</h4>
                    </Link>
                    <div className='sub-intro-section'>
                        <h2 className={classes.renewalImpactSubTitle}>Clean Water</h2>
                        <div className='image-and-paragraphs-container'>
                        <img className='landingPageImage' src={cleanWater} />
                            <p className='pillar-paragraph'>
                                Access to clean and safe drinking water is a fundamental human right. Renewal Impact is dedicated to tackling water-related challenges and improving water quality. Through the provision of advanced water filtration systems and comprehensive education on hygiene and sanitation practices, we empower communities to lead healthier lives. Our goal is to ensure that everyone has access to clean water, contributing to improved health outcomes and sustainable development.
                            </p>    
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link className='main-button' to='https://www.globalgiving.org/projects/provision-of-safe-drinking-water-with-water-filter/'>
                        <h4>See our clean water initiatives</h4>
                    </Link>
                    <div className='sub-intro-section'>
                        <h2 className={classes.renewalImpactSubTitle}>Renewable Energy</h2>
                        <div className='image-and-paragraphs-container'>
                            <img className='landingPageImage' src={solarPanels} />
                            <p className='pillar-paragraph'>
                                We believe in harnessing the power of nature to meet the growing energy demands of today and tomorrow. By leveraging renewable energy sources such as solar, wind, and hydroelectric power, we are revolutionising the way communities access and utilise electricity. Our cutting-edge solutions not only reduce dependence on fossil fuels but also create a cleaner and more sustainable energy ecosystem.
                            </p>
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link className='main-button' to='https://www.globalgiving.org/projects/energy-access-in-sierra-leone/'>
                        <h4>See our renewable energy initiatives</h4>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default RenewalImpact