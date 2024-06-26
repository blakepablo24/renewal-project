import React, { Component } from 'react';
import classes from './LandingPage.module.css'
import forest from '../../assets/1.jpg';
import landfill from '../../assets/Landfill.jpeg';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import landfillImage from '../../assets/2.jpg';
import five from '../../assets/5.jpg';
import pierImage from '../../assets/3.jpg';
import { Link } from 'react-router-dom';
import FUNCTIONS from '../../functions/functions';
import renewalCheck from '../../assets/renewal-check-01.jpg';
import renewalTechImage from '../../assets/renewal-tech-banner.jpg';
import renewalHubImage from '../../assets/renewal-hub-banner.png';
import renewalImpactImage from '../../assets/renewal-impact-banner.jpg';
import renewalShopImage from '../../assets/shop-banner-image.png';
import renewalTransport from '../../assets/renewal-transport-banner.jpg';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

class LandingPage extends Component {

    state = {
        bannerItems: [
            <Link to="" className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Project</h1>
                    <h1 className={classes.imageHeadings}>rethink, redetermine, renew</h1>
                </div>
            </Link>,
            <Link to='/renewal-shop' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalShopImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Shop</h1>
                    <h1 className={classes.imageHeadings}></h1>
                </div>
            </Link>,
            <Link to='/renewal-hub' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalHubImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Hub</h1>
                    <h1 className={classes.imageHeadings}>Trade In Your Unwanted Items</h1>
                </div>
            </Link>,
            <Link to='/renewal-tech' className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalTechImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Tech</h1>
                    <h1 className={classes.imageHeadings}>Sustainable IT Solutions</h1>
                </div>
            </Link>,
            <Link to='/renewal-transport' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalTransport})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Transport</h1>
                    <h1 className={classes.imageHeadings}>Sustainable Transport Solutions</h1>
                </div>
            </Link>,
            <Link to='/renewal-impact' className={classes.mainHalfScreen + ' ' + classes.fadeImage1} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalImpactImage})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Impact</h1>
                    <h1 className={classes.imageHeadings}>Climate Change Initiatives</h1>
                </div>
            </Link>,
            <Link to='/renewal-check' className={classes.mainHalfScreen + ' ' + classes.fadeImage} style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalCheck})`, backgroundSize: '100% 100%' }}>
                <div className={classes.fadedBackground}>
                    <h1 className={classes.imageHeadings}>Renewal Check</h1>
                    <h1 className={classes.imageHeadings}>Improve Your Green Building Standards</h1>
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
                    <p className='pillar-paragraph'><b>Renewal Project</b> is your partner in sustainability, dedicated to transforming homes and businesses through eco-friendly practices and products. We offer comprehensive solutions to help you reduce your environmental footprint, save on energy costs, and contribute to a greener future. Join our community and earn ‘’Renewal Points’’ whenever you take on our solutions, trade in an item, purchase our products, or donate to one of our environmental causes!</p>
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
                        <p className={classes.pillarDetails}>Assess your sustainability. Our free assessment helps homes and businesses identify areas to improve their environmental responsibility, from recycling habits to power consumption and beyond.</p>
                        <Link className={classes.pillarExploreNow} to='/renewal-check'>
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
                            <p className='pillar-paragraph'>We are your go-to company for sustainable practices, assessments, and solutions. Our flagship service, Renewal Check, offers free, comprehensive assessments for homes and businesses, identifying opportunities for recycling improvements, energy savings, and the adoption of eco-friendly products that help with power consumption, energy, and Lighting. Through our Renewal Hub, you can trade unwanted items and find pre-loved treasures. Renewal Tech provides innovative, green IT solutions, and Renewal Impact drives global climate initiatives. Together, we make sustainability accessible and actionable, ensuring a greener future for all.</p>
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
                <div className={classes.landingPageFullScreen}>
                    <div className='image-and-paragraphs-container'>
                    <div className='paragraph-container'>
                            <button className='main-button' onClick={this.props.changeSubjectHandler}>
                                <h4>Contact Us</h4>
                            </button>
                            <p className='pillar-paragraph'>At Renewal Project, we're committed to helping you make a positive impact on the environment while earning points and rewards. Whether you're interested in our Renewal Hub for sustainable trade, Renewal Tech for eco-friendly IT solutions, Renewal Impact for global climate initiatives, or Renewal Check for a comprehensive sustainability assessment, we have the expertise and resources to support you.</p>
                            <h3 className='intro-paragraph-title'>Take the First Step Towards a Greener Future</h3>
                            <p className='pillar-paragraph'>Ready to join the movement towards sustainability? Contact us today to learn more about our services or to book your free Renewal Check. Let us help you discover practical solutions and eco-friendly products that can transform your home or business.</p>
                            <h3 className='intro-paragraph-title'>Book Your Free Renewal Check Now</h3>
                            <p className='pillar-paragraph'>Schedule a free mini-assessment to evaluate your energy usage and sustainability practices. This assessment can be done online, over the phone or in person. Our experts will provide tailored advice and recommend products and solutions to help you achieve your sustainability goals.</p>
                            <h3 className='intro-paragraph-title'>Join the Renewal Project Community</h3>
                            <p className='pillar-paragraph'>Be part of a growing network of individuals and businesses committed to a sustainable future. Together, we can make a significant impact on our planet and create a cleaner, greener world for generations to come.</p>
                        </div>
                        <img className='main-image' src={five} />
                    </div>
                </div>
                <button className='main-button' onClick={this.props.changeSubjectHandler}>
                    <h4>Contact Us</h4>
                </button>
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