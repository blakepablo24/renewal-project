import React, { Component } from 'react';
import './LandingPage.css'
import coconutHusks from '../../assets/coconut-husks.png';
import coconutCoal from '../../assets/coconut-coal.png';
import mainLogo from '../../assets/renewal-project-bulb-logo-portrait.png';
import forest from '../../assets/1.jpg';
import mainLogoWithWording from '../../assets/renewal-project-logo.jpg';
import landfill from '../../assets/Landfill.jpeg'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

class LandingPage extends Component {

    render(){
        return(
            <div className='landingpage'>
                <div id='main-half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: 'cover' }}>
                    <div className='faded-background'>
                        <h1 className='image-headings'>Renewal Project rethink, redetermine, renew</h1>
                    </div>
                </div>
                <div id='main-first-half-screen'>
                    <p className='image-headings'>Renewal Project leads the charge for sustainability. Whether you're a community member looking for eco-friendly trade, a business seeking green IT solutions, a climate advocate ready for global impact, or a building owner aiming for improved healthy green structures — we have a space for you. Join us and be part of the change!</p>
                </div>
                <div className='intro-title'>
                    <p>Our Four Pillars</p>
                </div>
                <div className='pillars-container'>
                    <div className='first-pillar'>
                        <h2>Renewal Hub</h2>
                        <p>Discover a vibrant marketplace. Dispose of unused items, buy pre-loved treasures, and earn rewards</p>
                        <p>Explore Now</p>
                    </div>
                    <div className='second-pillar'>
                        <h2>Renewal Tech</h2>
                        <p>Explore our eco-friendly IT solutions. Whether you're into refurbished gadgets or exploring green innovations, find your sustainable tech fix here.</p>
                        <p>Explore Now</p>
                    </div>
                    <div className='third-pillar'>
                        <h2>Renewal Impact</h2>
                        <p>Global Climate Initiatives: Become a climate champion. Join hands with us in impactful global climate initiatives and innovations.</p>
                        <p>Explore Now</p>
                    </div>
                    <div className='fourth-pillar'>
                        <h2>Renewal Building Protocols</h2>
                        <p>Shape the future of buildings. Learn about our standards for green, healthy structures. From healthy practices to sustainable designs.</p>
                        <p>Explore Now</p>
                    </div>
                </div>
                    {/* <div className='half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),url(${coconutHusks})`, backgroundSize: 'cover' }}>
                        <p className='image-headings'>Reuse these coconut husks</p>
                    </div> */}
                {/* <Parallax translateX={['300px', '-600px']}>
                    <div className='half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)),url(${coconutCoal})`, backgroundSize: 'cover' }}>
                        <p className='image-headings  white-contrast'>Sustainable Coconut Coal</p>
                    </div>
                </Parallax> */}
                <div className='half-screen'>
                    <ParallaxBanner
                        layers={[
                            { image: landfill, speed: -25 },
                            { image: forest, speed: -20 },
                        ]}
                        style={{height: '100%'}}
                        className="aspect-[3/1]"
                    />
                </div>
                <div className='full-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${mainLogo})`, backgroundSize: 'cover' }}>
                    <p className='image-headings'>Renew and earn. Fair for everyone</p>
                </div>
            </div>
        )
    }

}

export default LandingPage