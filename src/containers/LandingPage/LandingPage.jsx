import React, { Component } from 'react';
import classes from './LandingPage.module.css'
import forest from '../../assets/1.jpg';
import landfill from '../../assets/Landfill.jpeg';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import landfillImage from '../../assets/2.jpg';
import pierImage from '../../assets/3.jpg';
import { Link } from 'react-router-dom';
import FUNCTIONS from '../../functions/functions';

class LandingPage extends Component {

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){
        return(
            <div className={classes.landingPage}>
                <div className={classes.mainHalfScreen} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: 'cover' }}>
                    <div className={classes.fadedBackground}>
                        <h1 className={classes.imageHeadings}>Renewal Project</h1>
                        <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                    </div>
                </div>
                <div className={classes.mainFirstHalfScreen}>
                    <p className={classes.imageHeadings}>Renewal Project leads the charge for sustainability. Whether you're a community member looking for eco-friendly trade, a business seeking green IT solutions, a climate advocate ready for global impact, or a building owner aiming for improved healthy green structures — we have a space for you. Join us and be part of the change!</p>
                </div>
                <div className={classes.introTitle}>
                    <h1 className='intro-title'>Our Four Pillars</h1>
                </div>
                <div className={classes.pillarsContainer}>
                    <div className={classes.pillar}>
                        <h2 className={classes.pillarTitle}>{this.props.subjects[0]}</h2>
                        <p className={classes.pillarDetails}>Discover a vibrant marketplace. Dispose of unused items, buy pre-loved treasures, and earn rewards</p>
                        <Link className={classes.pillarExploreNow} to='/renewal-hub'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className={classes.pillar}>
                        <h2 className={classes.pillarTitle}>{this.props.subjects[1]}</h2>
                        <p className={classes.pillarDetails}>Explore our eco-friendly IT solutions. Whether you're into refurbished gadgets or exploring green innovations, find your sustainable tech fix here.</p>
                        <Link className={classes.pillarExploreNow} to='/renewal-tech'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className={classes.pillar}>
                        <h2 className={classes.pillarTitle}>{this.props.subjects[2]}</h2>
                        <p className={classes.pillarDetails}>Global Climate Initiatives: Become a climate champion. Join hands with us in impactful global climate initiatives and innovations.</p>
                        <Link className={classes.pillarExploreNow} to='/renewal-impact'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className={classes.pillar}>
                        <h2 className={classes.pillarTitle}>{this.props.subjects[3]}</h2>
                        <p className={classes.pillarDetails}>Shape the future of buildings. Learn about our standards for green, healthy structures. From healthy practices to sustainable designs.</p>
                        <Link className={classes.pillarExploreNow} to='/renewal-building-protocols'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                </div>
                <div className={classes.landingPageFullScreen}>
                    <h1 className='intro-title'>OUR AIM</h1>
                    <div className={classes.imageAndParagraphsContainer}>
                        <img className='main-image' src={landfillImage} />
                        <div className={classes.paragraphsContainer}>
                            <p className='pillar-paragraph'>At Renewal Project, our vision is to usher in a new era of sustainability that embraces Individual environmental responsibility, corporate tech innovation, global well-being, and green building practices. We are not just a company; we are a movement dedicated to transforming the way we live and interact with our planet through a holistic approach.</p>
                            <p className='pillar-paragraph'>At our core are four pillars—Renewal Hub, a bustling centre for circular economy;  Renewal Tech, your gateway to sustainable IT solutions;  Renewal Impact, spearheading global climate initiatives, and Renewal Building Protocols setting the standard for green healthy buildings. Each pillar is a distinct facet, yet collectively they shape our commitment to a greener, cleaner, and more equitable world.</p>
                            <p className='pillar-paragraph'>Join us on this journey of renewal, where every action, every trade, every technology, and every building plays a part in shaping a sustainable future.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.landingPageFullScreen}>
                    <h1 className='intro-title'>THE JOURNEY</h1>
                    <div className={classes.imageAndParagraphsContainer}>
                        <div className={classes.paragraphsContainer}>
                            <p className='pillar-paragraph'>From war-torn Sierra Leone to the shores of the UK, my life journey is fueled by a passion for social and environmental equity. As a young boy, I pondered the global impact of individuals, sparking a lifelong curiosity.</p>
                            <p className='pillar-paragraph'>A school text book predicting parts of the world set to be submerged by 2050 due to climate change fueled my commitment to sustainability. Many years were spent navigating the renewable energy sector and orchestrating eco-friendly solutions, until I transitioned into an IT industry inadvertently championing a circular economy via the repurposing of disposed equipment.</p>
                            <p className='pillar-paragraph'>A poignant return to Sierra Leone, a nation minimally contributing to climate change, but suffering from the consequences of its impact fueled my ambition to provide both local and global sustainable solutions through Renewal Project, where community, commercial, charity, and government combine to strive towards a greener, cleaner, more equitable world</p>
                        </div>
                        <img className='main-image' src={pierImage} />
                    </div>
                </div>
                <div className={classes.HalfScreen}>
                    <ParallaxBanner
                        layers={[
                            { image: landfill, speed: -25 },
                            { image: forest, speed: -20 },
                        ]}
                        style={{height: '100%'}}
                        className="aspect-[3/1]"
                    />
                </div>
            </div>
            
        )
    }

}

export default LandingPage