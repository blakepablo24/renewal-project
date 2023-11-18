import React, { Component } from 'react';
import './LandingPage.css'
import coconutHusks from '../../assets/coconut-husks.png';
import coconutCoal from '../../assets/coconut-coal.png';
import mainLogo from '../../assets/renewal-project-bulb-logo-portrait.png';
import forest from '../../assets/forest.png';
import mainLogoWithWording from '../../assets/renewal-project-logo.jpg';
import landfill from '../../assets/Landfill.jpeg'
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';

class LandingPage extends Component {

    render(){
        return(
            <div className='landingpage'>
                <div id='main-half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: 'cover' }}>
                    <p className='image-headings'></p>
                    <img id='main-half-screen-cover-image' src={mainLogoWithWording} />
                </div>
                <Parallax translateY={[-15, 10]}>
                <div id='main-first-quarter-screen'>
                    <p className='image-headings'>Renewable and Sustainable Ideas</p>
                </div>
                <div id='main-second-quarter-screen'>
                    <p className='image-headings'>Make Money on unwanted items.</p>
                </div>
                </Parallax>
                    <div className='half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),url(${coconutHusks})`, backgroundSize: 'cover' }}>
                        <p className='image-headings'>Reuse these coconut husks</p>
                    </div>
                <Parallax translateX={['300px', '-600px']}>
                    <div className='half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)),url(${coconutCoal})`, backgroundSize: 'cover' }}>
                        <p className='image-headings  white-contrast'>Sustainable Coconut Coal</p>
                    </div>
                </Parallax>
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