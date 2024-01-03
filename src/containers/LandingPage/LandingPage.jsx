import React, { Component } from 'react';
import './LandingPage.css'
import coconutHusks from '../../assets/coconut-husks.png';
import coconutCoal from '../../assets/coconut-coal.png';
import mainLogo from '../../assets/renewal-project-bulb-logo-portrait.png';
import forest from '../../assets/1.jpg';
import mainLogoWithWording from '../../assets/renewal-project-logo.jpg';
import landfill from '../../assets/Landfill.jpeg';
import cleanWater from '../../assets/clean-water.jpg';
import solarPanels from '../../assets/solar-panels.jpg';
import resourceOptimization from '../../assets/resource-optimization.jpg';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import landfillImage from '../../assets/2.jpg';
import pierImage from '../../assets/3.jpg';
import packageImage from '../../assets/4.jpg';
import { GiMagnifyingGlass } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

class LandingPage extends Component {

    render(){
        return(
            <div className='landingpage' id='home'>
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
                <div className='landing-page-full-screen'>
                    <h1>OUR AIM</h1>
                    <img className='landingPageImage' src={landfillImage} />
                    <p className='landing-page-full-screen-paragraph'>At Renewal Project, our vision is to usher in a new era of sustainability that embraces Individual environmental responsibility, corporate tech innovation, global well-being, and green building practices. We are not just a company; we are a movement dedicated to transforming the way we live and interact with our planet through a holistic approach.</p>
                    <p className='landing-page-full-screen-paragraph'>At our core are four pillars—Renewal Hub, a bustling centre for circular economy;  Renewal Tech, your gateway to sustainable IT solutions;  Renewal Impact, spearheading global climate initiatives, and Renewal Building Protocols setting the standard for green healthy buildings. Each pillar is a distinct facet, yet collectively they shape our commitment to a greener, cleaner, and more equitable world.</p>
                    <p className='landing-page-full-screen-paragraph'>Join us on this journey of renewal, where every action, every trade, every technology, and every building plays a part in shaping a sustainable future.</p>
                </div>
                <div className='landing-page-full-screen'>
                    <h1>THE JOURNEY</h1>
                    <img className='landingPageImage' src={pierImage} />
                    <p className='landing-page-full-screen-paragraph'>From war-torn Sierra Leone to the shores of the UK, my life journey is fueled by a passion for social and environmental equity. As a young boy, I pondered the global impact of individuals, sparking a lifelong curiosity.</p>
                    <p className='landing-page-full-screen-paragraph'>A school text book predicting parts of the world set to be submerged by 2050 due to climate change fueled my commitment to sustainability. Many years were spent navigating the renewable energy sector and orchestrating eco-friendly solutions, until I transitioned into an IT industry inadvertently championing a circular economy via the repurposing of disposed equipment.</p>
                    <p className='landing-page-full-screen-paragraph'>A poignant return to Sierra Leone, a nation minimally contributing to climate change, but suffering from the consequences of its impact fueled my ambition to provide both local and global sustainable solutions through Renewal Project, where community, commercial, charity, and government combine to strive towards a greener, cleaner, more equitable world</p>
                </div>
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
                <div className='landing-page-full-screen' id='renewal-hub'>
                    <h1>RENEWAL HUB</h1>
                    <h2>CHECK OUT OUR RENEWAL HUB STORE</h2>
                    <p className='landing-page-full-screen-paragraph'>At Renewal Hub, we champion a circular economy by recycling and reusing used items. We connect communities through sustainable trade and reward loyalty, creating a network of individuals committed to reducing waste and embracing eco-friendly living. By turning unwanted items into valued resources, we are committed to promoting community engagement and zero waste practices.</p>
                    <p className='landing-page-full-screen-paragraph'>Dispose of your unwanted items of value, purchase pre-loved items, contribute to a circular economy and get rewarded for it in these 4 simple steps:</p>
                    <div className='steps-container'>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>Step 1</h2>
                                <CiHome />
                            </div>
                            <p className='step-paragraph'>Make space in your home or business by letting us know which unused items you want to get off your hands.</p>
                        </div>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>Step 2</h2>
                                <GiMagnifyingGlass />
                            </div>
                            <p className='step-paragraph'>We will assess your item for suitability and receive the item, store it, list it and promote it to be sold.</p>
                        </div>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>Step 3</h2>
                                <TbTruckDelivery />
                            </div>
                            <p className='step-paragraph'>Once your item sells, we will package it and deliver to the buyer and reward you with a percentage of the proceeds and reward you with Renewal Points that can go towards a charitable donation or discount on future purchases.</p>
                        </div>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>Step 4</h2>
                                <FaCoins />
                            </div>
                            <p className='step-paragraph'>Use your Renewal Points to shop for other pre-loved items on Renewal Hub, or donate to one of our charities or Renewal Impact causes.</p>
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <h1>CHECK OUT OUR RENEWAL HUB STORE</h1>
                    <p className='landing-page-full-screen-paragraph'>Get in contact to take your first step towards a zero waste future.</p>
                </div>
                    <img className='landingPageImage' src={packageImage} />
                </div>
                <div className='landing-page-full-screen' id='renewal-tech'>
                    <h1>RENEWAL TECH</h1>
                    <p className='landing-page-full-screen-paragraph'>At Renewal Tech, we redefine business IT through circular services, covering the
                        entire lifecycle, from supplying refurbished hardware to responsible IT disposal and
                        recycling. For businesses seeking eco-friendly alternatives, Renewal Tech is the
                        solution, providing sustainable options that enhance efficiency, productivity, and
                        environmental responsibility. We seamlessly integrate eco-friendly practices into the
                        corporate sphere, proving that technology can be both innovative and
                        environmentally conscious. Let us guide you through the sustainable lifecycle
                        management of your IT assets across four crucial decision-making stages:
                    </p>
                    <h1>REQUESTED DIAGRAM TO BE HERE</h1>
                    <p className='landing-page-full-screen-paragraph'>Ready to transform your business with circular IT solutions? Reach out to Renewal
                        Tech and let&#39;s embark on a sustainable journey together. Whether you&#39;re looking to
                        optimise your IT estate, extend product life, responsibly dispose of assets, or explore
                        refurbished options, our team is here to assist.
                    </p>
                    <div className='landing-page-full-screen'>
                    <h1>CHECK OUT OUR RENEWAL TECH STORE</h1>
                </div>
                </div>
                <div className='landing-page-full-screen' id='renewal-impact'>
                    <h1>RENEWAL Impact</h1>
                    <p className='landing-page-full-screen-paragraph'>Renewal Impact marks our commitment to global climate action. From purifying water to optimising resources and harnessing renewable energy, this pillar transforms charitable initiatives into sustained impact. International projects, powered by partnerships and donations, aim to bring tangible change to vulnerable communities. As we extend our reach, Renewal Impact will solidify Renewal Project's place on the international stage, advocating for a sustainable and resilient future that promotes social, economic, and environmental well-being.
                    </p>
                    <div>
                        <h2>Resource Optimization:</h2>
                        <p className='landing-page-full-screen-paragraph'>
                            Through our resource optimization initiatives we specialise in developing innovative solutions that transform waste into valuable resources, contributing to a circular economy. By harnessing the potential of waste materials, such as coconut husks and other organic matter, we create sustainable energy and produce usable products that benefit both communities and the environment. Redefining waste management, enabling the efficient utilisation of resources while minimising environmental impact.
                        </p>
                        <img className='landingPageImage' src={resourceOptimization} />
                    </div>
                    <Link to='https://www.globalgiving.org/projects/fighting-deforestation-using-coconut-husk-charcoal/'>
                        <h2>See our resource optimisation initiatives</h2>
                    </Link>
                    <div>
                        <h2>Clean Water</h2>
                        <p className='landing-page-full-screen-paragraph'>
                            Access to clean and safe drinking water is a fundamental human right. Renewal Impact is dedicated to tackling water-related challenges and improving water quality. Through the provision of advanced water filtration systems and comprehensive education on hygiene and sanitation practices, we empower communities to lead healthier lives. Our goal is to ensure that everyone has access to clean water, contributing to improved health outcomes and sustainable development.
                        </p>
                        <img className='landingPageImage' src={cleanWater} />
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link to='https://www.globalgiving.org/projects/provision-of-safe-drinking-water-with-water-filter/'>
                        <h2>See our clean water initiatives here</h2>
                    </Link>
                    <div>
                        <h2>Renewable Energy: </h2>
                        <p className='landing-page-full-screen-paragraph'>
                            We believe in harnessing the power of nature to meet the growing energy demands of today and tomorrow. By leveraging renewable energy sources such as solar, wind, and hydroelectric power, we are revolutionising the way communities access and utilise electricity. Our cutting-edge solutions not only reduce dependence on fossil fuels but also create a cleaner and more sustainable energy ecosystem.
                        </p>
                        <img className='landingPageImage' src={solarPanels} />
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link to='https://www.globalgiving.org/projects/energy-access-in-sierra-leone/'>
                        <h2>See our renewable energy initiatives here </h2>
                    </Link>
                    </div>
                </div>
                </div>
                <Link to='https://www.globalgiving.org/projects/energy-access-in-sierra-leone/'>
                    <h2>CONTACT US TO FIND OUT MORE </h2>
                </Link>
                <div className='full-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${mainLogo})`, backgroundSize: 'cover' }}>
                    <p className='image-headings'>Renew and earn. Fair for everyone</p>
                </div>
            </div>
            
        )
    }

}

export default LandingPage