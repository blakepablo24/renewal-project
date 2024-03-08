import React, { Component } from 'react';
import classes from './RenewalBuildingProtocols.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import buildingProtocols01 from '../../assets/building-protocols-01.jpg';
import buildingProtocols02 from '../../assets/building-protocols-02.jpg';
import FUNCTIONS from '../../functions/functions';

class RenewalBuildingProtocols extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){

        return (
            <div className={classes.renewalBuildingProtocols}>
                    <div className='pillar-title'>
                        <h1>{this.props.subjects[3]}</h1>
                    </div>
                    <div className='intro-paragraph'>
                        <div className='image-and-paragraphs-container'>
                            <div className='paragraph-container'>
                                <p className='pillar-paragraph'>Introducing Renewal Building Protocols (RBP), the hallmark of a sustainable and
                                    healthy built environment. Our data driven guidelines, technology
                                    recommendations and certification standard, establishes a new paradigm for green
                                    structures and the people and processes within those structures. From educational
                                    material, to consultation services that guide you through the implementation of
                                    active measures, Renewal Building Protocols is dedicated to fostering spaces that
                                    prioritise well-being, environmental impact, and sustainability. Make tangible steps
                                    towards net zero and learn how to impact your ESG rating with RBP, setting the
                                    gold standard for a cleaner, greener, and more equitable world.
                                </p>
                            </div>
                            <img className='main-image' src={buildingProtocols01} />
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2 className='intro-title'>Why the focus on buildings?</h2>
                        <div className='image-and-paragraphs-container'>
                        <img className='main-image' src={buildingProtocols02} />
                        <div className='paragraph-container'>
                            <p className='pillar-paragraph'>
                                Globally, buildings contribute to approximately 40% of energy and process-related CO2 emissions, utilise 50% of all extracted materials, account for 33% of water consumption, and generate 35% of total waste. These staggering statistics underscore the profound environmental impacts, including resource depletion, air, water, and land pollution, and loss of biodiversity.
                                Looking ahead to 2050, the global population is projected to surge by 27% to reach 9.8 billion. By 2060, the global building floor area is anticipated to double, amplifying the environmental, social, and economic repercussions associated with the built environment.
                                Amid such profound consequences, it becomes imperative for the built environment to actively contribute to the transformative changes necessary to decarbonize our global economy. Sustainable built environments not only emerge as crucial solutions to climate change but also play a pivotal role in fostering resilient, thriving communities and driving economic growth.
                            </p>
                        </div>  
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2 className='intro-title'>What is included in our protocols?</h2>
                    </div>
                    <div className={classes.stepsContainer}>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>1</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <p className='pillar-paragraph'>You will receive access to our digital portal where you will have access to a library of educational material and guided by science backed data on the following subjects:</p>
                                <div className={classes.folowingSubjectsContainer}>
                                    <p>Environmental Sustainability</p>
                                    <p>Air Quality</p>
                                    <p>Hygiene</p>
                                    <p>Occupant Wellbeing</p>
                                    <p>The Building Environment</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>2</h2>
                            </div>
                            <p className='pillar-paragraph'>Our team will support you through the implementation of our guidelines and introduction of technology and processes that will help you towards your specific goals, tailored to your business.</p>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>3</h2>
                            </div>
                            <p className='pillar-paragraph'>We work on a points based system based on the steps that you have implemented and how you building is performing within the 5 protocols. Once you reach the desired score your building can receive certification and benefit from our promotion as a green, clean, equitable building.</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default RenewalBuildingProtocols