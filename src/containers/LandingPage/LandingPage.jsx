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
import renewalBuildProtocolsImage from '../../assets/building-protocols-01.jpg';
import renewalTechImage from '../../assets/solar-panels.jpg';
import renewalHubImage from '../../assets/4.jpg';
import renewalImpactImage from '../../assets/2.jpg';
import renewalShopImage from '../../assets/shop-banner-image.png';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

class LandingPage extends Component {

    state = {
        bannerItems: [
            <div className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Project</h1>
                    <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                </div>
            </div>,
            <Link to='/renewal-shop' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalShopImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Shop</h1>
                    <h1 className={classes.imageHeadings}></h1>
                </div>
            </Link>,
            <Link to='/renewal-hub' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalHubImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Hub</h1>
                    <h1 className={classes.imageHeadings}>Sell Your Items</h1>
                </div>
            </Link>,
            <Link to='/renewal-tech' className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalTechImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Tech</h1>
                    <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                </div>
            </Link>,
            <Link to='/renewal-impact' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalImpactImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Impact</h1>
                    <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                </div>
            </Link>,
            <Link to='/renewal-building-protocols' className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalBuildProtocolsImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Building Protocols</h1>
                    <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                </div>
            </Link>
        ],
        bannerItem: 0
    }

    componentDidMount(){
        FUNCTIONS.scrollToTop();
        setInterval(() => this.changeBackgroundImage(), 10000);
    }

    changeBackgroundImage = () => {
        if(this.state.bannerItem === this.state.bannerItems.length - 1){
            this.setState({
                bannerItem: 0
            });
        } else {
            this.setState({
                bannerItem: this.state.bannerItem + 1
            })
        }
      }

    changeToNextImageHandler = () => {
        this.setState({
            bannerItem: this.state.bannerItem + 1
        })
    }

    changeToPreviousImageHandler = () => {
        this.setState({
            bannerItem: this.state.bannerItem - 1
        })
    }

    render(){

        let shownNextButton = classes.next;
        let shownPreviousButton = classes.previous;

        if(this.state.bannerItem === 0) {
            shownPreviousButton = classes.hidden;
        }

        if(this.state.bannerItem === this.state.bannerItems.length - 1){
            shownNextButton = classes.hidden;
        }

        return(
            <div className={classes.landingPage}>
                <div className={classes.bannerContainer}>
                    <GrFormPrevious className={shownPreviousButton} onClick={this.changeToPreviousImageHandler} />
                    <GrFormNext className={shownNextButton} onClick={this.changeToNextImageHandler} />
                    {this.state.bannerItems[this.state.bannerItem]}
                </div>
                <div className='paragraph-container'>
                    <p className='pillar-paragraph'>Renewal Project leads the charge for sustainability. Whether you're a community member looking for eco-friendly trade, a business seeking green IT solutions, a climate advocate ready for global impact, or a building owner aiming for improved healthy green structures — we have a space for you. Join us and be part of the change!</p>
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
                    <div className='image-and-paragraphs-container'>
                        <img className='main-image' src={landfillImage} />
                        <div className='paragraph-container'>
                            <p className='pillar-paragraph'>At Renewal Project, our vision is to usher in a new era of sustainability that embraces Individual environmental responsibility, corporate tech innovation, global well-being, and green building practices. We are not just a company; we are a movement dedicated to transforming the way we live and interact with our planet through a holistic approach.</p>
                            <p className='pillar-paragraph'>At our core are four pillars—Renewal Hub, a bustling centre for circular economy;  Renewal Tech, your gateway to sustainable IT solutions;  Renewal Impact, spearheading global climate initiatives, and Renewal Building Protocols setting the standard for green healthy buildings. Each pillar is a distinct facet, yet collectively they shape our commitment to a greener, cleaner, and more equitable world.</p>
                            <p className='pillar-paragraph'>Join us on this journey of renewal, where every action, every trade, every technology, and every building plays a part in shaping a sustainable future.</p>
                        </div>
                    </div>
                </div>
                <div className={classes.landingPageFullScreen}>
                    <h1 className='intro-title'>THE JOURNEY</h1>
                    <div className='image-and-paragraphs-container'>
                    <div className='paragraph-container'>
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