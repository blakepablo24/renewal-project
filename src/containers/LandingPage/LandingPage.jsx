import React, { Component } from 'react';
import './LandingPage.css'
import coconutHusks from '../../assets/coconut-husks.png';
import coconutCoal from '../../assets/coconut-coal.png';
import mainLogo from '../../assets/renewal-project-bulb-logo-portrait.png';
import forest from '../../assets/1.jpg';
import mainLogoWithWording from '../../assets/renewal-project-logo.jpg';
import landfill from '../../assets/Landfill.jpeg';
import cleanWater from '../../assets/clean-water.jpg';
import renewalProjectChartLowSize from '../../assets/renewal-project-chart-low-size.png';
import solarPanels from '../../assets/solar-panels.jpg';
import resourceOptimization from '../../assets/resource-optimization.jpg';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import landfillImage from '../../assets/2.jpg';
import pierImage from '../../assets/3.jpg';
import packageImage from '../../assets/4.jpg';
import buildingProtocols01 from '../../assets/building-protocols-01.jpg';
import buildingProtocols02 from '../../assets/building-protocols-02.jpg';
import { GiMagnifyingGlass } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import bulbLogo from '../../assets/renewal-project-bulb-logo-portrait.png';
import EmailValidator from 'email-validator';
import Axios from 'axios';
import CONST from '../../constants/constants';



class LandingPage extends Component {

    state = {
        subjects: ["Renewal Hub", "Renewal Tech", "Renewal Impact", "Renewal Building Protocols", "Items To Sell", "Other"],
        subject: "",
        enquirySubjectErrorMessage: "",
        enquiryName: "",
        enquiryNameErrorMessage: "",
        enquiryEmail: "",
        enquiryEmailErrorMessage: "",
        enquiryData: "",
        enquiryDataErrorMessage: "",
        messageSent: false
    }

    changeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
            enquiryNameErrorMessage: "",
            enquiryEmailErrorMessage: "",
            enquiryDataErrorMessage: "",
            enquiryPillarErrorMessage: ""
        });
    }

    submitContactFormHandler = () => {
        event.preventDefault();
        
        let enquiryNameErrorMessage = "";
        let enquiryEmailErrorMessage = "";
        let enquiryDataErrorMessage = "";
        let enquirySubjectErrorMessage = "";

        if(!EmailValidator.validate(this.state.enquiryEmail)){
            enquiryEmailErrorMessage = <h4 className="error">Please use a valid email</h4>
        }

        if (!this.state.enquiryName) {
            enquiryNameErrorMessage = <h4 className="error">Please enter your name</h4>
        } else if (this.state.enquiryName.trim().length < 2) {
            enquiryNameErrorMessage = <h4 className="error">Please enter a longer name</h4>
        }

        if (/[^a-zA-Z -]/.test(this.state.name)) {
            enquiryNameErrorMessage  = <h4 className="error">Please enter a valid name</h4>
        }

        if (!this.state.enquiryData) {
            enquiryDataErrorMessage = <h4 className="error">Please enter your enquiry?</h4>
        }

        if (this.state.subject === "" || this.state.subject === "select") {
            enquirySubjectErrorMessage = <h4 className="error">Please enter your contact reason?</h4>
        }

        if(!enquiryNameErrorMessage && !enquiryEmailErrorMessage & !enquiryDataErrorMessage){
            Axios.post(CONST.BASE_URL + '/api/new-enquiry', {
                enquiryName: this.state.enquiryName,
                enquiryEmail: this.state.enquiryEmail,
                subject: this.state.subject,
                enquiryData: this.state.enquiryData
            }).then(response =>{
                this.setState({
                    enquiryName: "",
                    enquiryNameErrorMessage: "",
                    enquiryEmail: "",
                    enquiryEmailErrorMessage: "",
                    subject: "",
                    enquiryData: "",
                    enquiryDataErrorMessage: "",
                    messageSent: true
                })
            }).catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            
              });
        } else {
            this.setState({
                enquiryNameErrorMessage: enquiryNameErrorMessage,
                enquiryEmailErrorMessage: enquiryEmailErrorMessage,
                enquiryDataErrorMessage: enquiryDataErrorMessage,
                enquirySubjectErrorMessage: enquirySubjectErrorMessage
            })
        }
    }

    render(){

        let contactFormSuccessMessage = "";

        let itemsToSellContainer = "";

        if(this.state.messageSent){
            contactFormSuccessMessage = <p className='success'>Thank you for your message. Renewal Project will get back to you as soon as possible</p>
        }

        if(this.state.subject === "Items To Sell") {
            itemsToSellContainer = <p>button to add images to sell will go here</p>
        }

        return(
            <div className='landingpage' id='home'>
                <div id='main-half-screen' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${forest})`, backgroundSize: 'cover' }}>
                    <div className='faded-background'>
                        <h1 className='image-headings'>Renewal Project</h1>
                        <h1 className='image-headings'>rethink, redetermine, renew</h1>
                    </div>
                </div>
                <div className='main-first-half-screen'>
                    <p className='image-headings'>Renewal Project leads the charge for sustainability. Whether you're a community member looking for eco-friendly trade, a business seeking green IT solutions, a climate advocate ready for global impact, or a building owner aiming for improved healthy green structures — we have a space for you. Join us and be part of the change!</p>
                </div>
                <div className='intro-title'>
                    <h1>Our Four Pillars</h1>
                </div>
                <div className='pillars-container'>
                    <div className='first-pillar pillar'>
                        <h2 className='pillar-title'>{this.state.subjects[0]}</h2>
                        <p className='pillar-details'>Discover a vibrant marketplace. Dispose of unused items, buy pre-loved treasures, and earn rewards</p>
                        <Link className='pillar-explore-now' to='/#renewal-hub'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className='second-pillar pillar'>
                        <h2 className='pillar-title'>{this.state.subjects[1]}</h2>
                        <p className='pillar-details'>Explore our eco-friendly IT solutions. Whether you're into refurbished gadgets or exploring green innovations, find your sustainable tech fix here.</p>
                        <Link className='pillar-explore-now' to='/#renewal-tech'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className='third-pillar pillar'>
                        <h2 className='pillar-title'>{this.state.subjects[2]}</h2>
                        <p className='pillar-details'>Global Climate Initiatives: Become a climate champion. Join hands with us in impactful global climate initiatives and innovations.</p>
                        <Link className='pillar-explore-now' to='/#renewal-impact'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                    <div className='fourth-pillar pillar'>
                        <h2 className='pillar-title'>{this.state.subjects[3]}</h2>
                        <p className='pillar-details'>Shape the future of buildings. Learn about our standards for green, healthy structures. From healthy practices to sustainable designs.</p>
                        <Link className='pillar-explore-now' to='/#renewal-building-protocols'>
                            <p>Explore Now</p>
                        </Link>
                    </div>
                </div>
                <div className='landing-page-full-screen'>
                    <h1>OUR AIM</h1>
                    <div className='image-and-paragraphs-container'>
                        <img className='landingPageImage' src={landfillImage} />
                        <div className='paragraphs-container'>
                            <p className='landing-page-full-screen-paragraph'>At Renewal Project, our vision is to usher in a new era of sustainability that embraces Individual environmental responsibility, corporate tech innovation, global well-being, and green building practices. We are not just a company; we are a movement dedicated to transforming the way we live and interact with our planet through a holistic approach.</p>
                            <p className='landing-page-full-screen-paragraph'>At our core are four pillars—Renewal Hub, a bustling centre for circular economy;  Renewal Tech, your gateway to sustainable IT solutions;  Renewal Impact, spearheading global climate initiatives, and Renewal Building Protocols setting the standard for green healthy buildings. Each pillar is a distinct facet, yet collectively they shape our commitment to a greener, cleaner, and more equitable world.</p>
                            <p className='landing-page-full-screen-paragraph'>Join us on this journey of renewal, where every action, every trade, every technology, and every building plays a part in shaping a sustainable future.</p>
                        </div>
                    </div>
                </div>
                <div className='landing-page-full-screen'>
                    <h1>THE JOURNEY</h1>
                    <div className='image-and-paragraphs-container'>
                        <div className='paragraphs-container'>
                            <p className='landing-page-full-screen-paragraph'>From war-torn Sierra Leone to the shores of the UK, my life journey is fueled by a passion for social and environmental equity. As a young boy, I pondered the global impact of individuals, sparking a lifelong curiosity.</p>
                            <p className='landing-page-full-screen-paragraph'>A school text book predicting parts of the world set to be submerged by 2050 due to climate change fueled my commitment to sustainability. Many years were spent navigating the renewable energy sector and orchestrating eco-friendly solutions, until I transitioned into an IT industry inadvertently championing a circular economy via the repurposing of disposed equipment.</p>
                            <p className='landing-page-full-screen-paragraph'>A poignant return to Sierra Leone, a nation minimally contributing to climate change, but suffering from the consequences of its impact fueled my ambition to provide both local and global sustainable solutions through Renewal Project, where community, commercial, charity, and government combine to strive towards a greener, cleaner, more equitable world</p>
                        </div>
                        <img className='landingPageImage' src={pierImage} />
                    </div>
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
                    <div className='intro-title'>
                        <h1>{this.state.subjects[0]}</h1>
                    </div>
                    <Link className='see-our-button' to=''>
                    <h4>Check Out Our {this.state.subjects[0]} Store</h4>
                    </Link>
                    <div className='main-first-half-screen'>
                        <p className='landing-page-full-screen-paragraph'>At Renewal Hub, we champion a circular economy by recycling and reusing used items. We connect communities through sustainable trade and reward loyalty, creating a network of individuals committed to reducing waste and embracing eco-friendly living. By turning unwanted items into valued resources, we are committed to promoting community engagement and zero waste practices.</p>
                    </div>
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
                    <div className='image-and-paragraphs-container'>
                            <div className='paragraphs-container'>
                                <p className='landing-page-full-screen-paragraph'>Get in contact to take your first step towards a zero waste future.</p>
                            </div>
                            <img className='landingPageImage' src={packageImage} />
                        </div>
                    </div>
                    <Link className='see-our-button' to=''>
                        <h4>Check Out Our {this.state.subjects[0]} Store</h4>
                    </Link>
                </div>
                <div className='landing-page-full-screen' id='renewal-tech'>
                    <div className='intro-title'>
                        <h1>{this.state.subjects[1]}</h1>
                    </div>
                    <p className='landing-page-full-screen-paragraph'>At Renewal Tech, we redefine business IT through circular services, covering the
                        entire lifecycle, from supplying refurbished hardware to responsible IT disposal and
                        recycling. For businesses seeking eco-friendly alternatives, Renewal Tech is the
                        solution, providing sustainable options that enhance efficiency, productivity, and
                        environmental responsibility. We seamlessly integrate eco-friendly practices into the
                        corporate sphere, proving that technology can be both innovative and
                        environmentally conscious. Let us guide you through the sustainable lifecycle
                        management of your IT assets across four crucial decision-making stages:
                    </p>
                    <img className='landingPageImage' src={renewalProjectChartLowSize} />
                    <p className='landing-page-full-screen-paragraph'>Ready to transform your business with circular IT solutions? Reach out to Renewal
                        Tech and let&#39;s embark on a sustainable journey together. Whether you&#39;re looking to
                        optimise your IT estate, extend product life, responsibly dispose of assets, or explore
                        refurbished options, our team is here to assist.
                    </p>
                    <div className='landing-page-full-screen'>
                        <Link className='see-our-button' to=''>
                        <h4>Check Out Our {this.state.subjects[1]} Store</h4>
                        </Link>
                    </div>
                </div>
                <div className='landing-page-full-screen' id='renewal-impact'>
                    <div className='intro-title'>
                        <h1>{this.state.subjects[2]}</h1>
                    </div>
                    <div className='main-first-half-screen'>
                        <p className='landing-page-full-screen-paragraph'>Renewal Impact marks our commitment to global climate action. From purifying water to optimising resources and harnessing renewable energy, this pillar transforms charitable initiatives into sustained impact. International projects, powered by partnerships and donations, aim to bring tangible change to vulnerable communities. As we extend our reach, Renewal Impact will solidify Renewal Project's place on the international stage, advocating for a sustainable and resilient future that promotes social, economic, and environmental well-being.
                        </p>
                    </div>
                    <div className='sub-intro-section'>
                        <h2>Resource Optimization</h2>
                        <div className='image-and-paragraphs-container'>
                            <div className='paragraphs-container'>
                                <p className='landing-page-full-screen-paragraph'>
                                    Through our resource optimization initiatives we specialise in developing innovative solutions that transform waste into valuable resources, contributing to a circular economy. By harnessing the potential of waste materials, such as coconut husks and other organic matter, we create sustainable energy and produce usable products that benefit both communities and the environment. Redefining waste management, enabling the efficient utilisation of resources while minimising environmental impact.
                                </p>
                            </div>
                            <img className='landingPageImage' src={resourceOptimization} />
                        </div>
                    </div>
                    <Link className='see-our-button' to='https://www.globalgiving.org/projects/fighting-deforestation-using-coconut-husk-charcoal/'>
                        <h4>see our resource optimisation initiatives</h4>
                    </Link>
                    <div className='sub-intro-section'>
                        <h2>Clean Water</h2>
                        <div className='image-and-paragraphs-container'>
                        <img className='landingPageImage' src={cleanWater} />
                            <p className='landing-page-full-screen-paragraph'>
                                Access to clean and safe drinking water is a fundamental human right. Renewal Impact is dedicated to tackling water-related challenges and improving water quality. Through the provision of advanced water filtration systems and comprehensive education on hygiene and sanitation practices, we empower communities to lead healthier lives. Our goal is to ensure that everyone has access to clean water, contributing to improved health outcomes and sustainable development.
                            </p>    
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link className='see-our-button' to='https://www.globalgiving.org/projects/provision-of-safe-drinking-water-with-water-filter/'>
                        <h4>See our clean water initiatives</h4>
                    </Link>
                    <div className='sub-intro-section'>
                        <h2>Renewable Energy</h2>
                        <div className='image-and-paragraphs-container'>
                            <img className='landingPageImage' src={solarPanels} />
                            <p className='landing-page-full-screen-paragraph'>
                                We believe in harnessing the power of nature to meet the growing energy demands of today and tomorrow. By leveraging renewable energy sources such as solar, wind, and hydroelectric power, we are revolutionising the way communities access and utilise electricity. Our cutting-edge solutions not only reduce dependence on fossil fuels but also create a cleaner and more sustainable energy ecosystem.
                            </p>
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <Link className='see-our-button' to='https://www.globalgiving.org/projects/energy-access-in-sierra-leone/'>
                        <h4>See our renewable energy initiatives</h4>
                    </Link>
                    </div>
                </div>
                </div>
                <div className='landing-page-full-screen' id='renewal-building-protocols'>
                    <div className='intro-title'>
                        <h1>{this.state.subjects[3]}</h1>
                    </div>
                    <div className='sub-intro-section'>
                        <div className='image-and-paragraphs-container'>
                            <div className='paragraphs-container'>
                            <p className='landing-page-full-screen-paragraph'>Introducing Renewal Building Protocols (RBP), the hallmark of a sustainable and
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
                            <img className='landingPageImage' src={buildingProtocols01} />
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2>Why the focus on buildings?</h2>
                        <div className='image-and-paragraphs-container'>
                        <img className='landingPageImage' src={buildingProtocols02} />
                            <p className='landing-page-full-screen-paragraph'>
                                Globally, buildings contribute to approximately 40% of energy and process-related CO2 emissions, utilise 50% of all extracted materials, account for 33% of water consumption, and generate 35% of total waste. These staggering statistics underscore the profound environmental impacts, including resource depletion, air, water, and land pollution, and loss of biodiversity.
                                Looking ahead to 2050, the global population is projected to surge by 27% to reach 9.8 billion. By 2060, the global building floor area is anticipated to double, amplifying the environmental, social, and economic repercussions associated with the built environment.
                                Amid such profound consequences, it becomes imperative for the built environment to actively contribute to the transformative changes necessary to decarbonize our global economy. Sustainable built environments not only emerge as crucial solutions to climate change but also play a pivotal role in fostering resilient, thriving communities and driving economic growth.
                            </p>    
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2>What is included in our protocols?</h2>
                    </div>
                    <div className='steps-container'>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>1</h2>
                            </div>
                            <div>
                                <p className='step-paragraph'>You will receive access to our digital portal where you will have access to a library of educational material and guided by science backed data on the following subjects:</p>
                                <div className='folowing-subjects-container'>
                                    <p>Environmental Sustainability</p>
                                    <p>Air Quality</p>
                                    <p>Hygiene</p>
                                    <p>Occupant Wellbeing</p>
                                    <p>The Building Environment</p>
                                </div>
                            </div>
                        </div>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>2</h2>
                            </div>
                            <p className='step-paragraph'>Our team will support you through the implementation of our guidelines and introduction of technology and processes that will help you towards your specific goals, tailored to your business.</p>
                        </div>
                        <div className='step-container'>
                            <div className='step-heading'>
                                <h2 className='step-number'>3</h2>
                            </div>
                            <p className='step-paragraph'>We work on a points based system based on the steps that you have implemented and how you building is performing within the 5 protocols. Once you reach the desired score your building can receive certification and benefit from our promotion as a green, clean, equitable building.</p>
                        </div>
                    </div>
                </div>
                <div className='contact-Form' id='renewal-project-contact-form'>
                    <h2 className='contact-Form-title'>Renewal Project Contact Form</h2>
                    <input
                        className='contact-Form-input'
                        type='text' 
                        placeholder='Enter Your Name Here'
                        name='enquiryName'
                        value={this.state.enquiryName}
                        onChange={this.changeHandler}
                    />
                    {this.state.enquiryNameErrorMessage}
                    <input
                        className='contact-Form-input'
                        type='email'
                        placeholder='Your Email Address'
                        name='enquiryEmail'
                        value={this.state.enquiryEmail}
                        onChange={this.changeHandler}
                    />
                    {this.state.enquiryEmailErrorMessage}
                    <select
                    className='contact-Form-input'
                        name="subject"
                        value={this.state.subject}
                        onChange={this.changeHandler}
                    >
                        <option value="select">Select Subject</option>
                        {this.state.subjects.map(subject =>
                            <option name={subject} value={subject}>{subject}</option>
                        )}
                    </select>
                    {this.state.enquirySubjectErrorMessage}
                    {itemsToSellContainer}
                    <textarea
                        className='contact-Form-text-area'
                        type='text'
                        placeholder='Enter your enquiry here'
                        name='enquiryData'
                        value={this.state.enquiryData}
                        onChange={this.changeHandler}
                    />
                    {this.state.enquiryDataErrorMessage}
                    <button onClick={this.submitContactFormHandler} className='contact-Form-button'>Submit</button>
                    {contactFormSuccessMessage}
                </div>
            </div>
            
        )
    }

}

export default LandingPage