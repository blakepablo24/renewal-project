import React, { Component } from 'react';
import './LandingPage.css'
import forest from '../../assets/1.jpg';
import landfill from '../../assets/Landfill.jpeg';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import landfillImage from '../../assets/2.jpg';
import pierImage from '../../assets/3.jpg';
import buildingProtocols01 from '../../assets/building-protocols-01.jpg';
import buildingProtocols02 from '../../assets/building-protocols-02.jpg';
import { Link } from 'react-router-dom';
import EmailValidator from 'email-validator';
import Axios from 'axios';
import CONST from '../../constants/constants';
import ImageUpload from '../../components/Ui/ImageUpload/ImageUpload';



class LandingPage extends Component {

    state = {
        enquirySubjectErrorMessage: "",
        enquiryName: "",
        enquiryNameErrorMessage: "",
        enquiryEmail: "",
        enquiryEmailErrorMessage: "",
        enquiryData: "",
        enquiryDataErrorMessage: "",
        messageSent: false,
        imageFile: ""
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
            let fd = new FormData();
            fd.append('enquiryName', this.state.enquiryName);
            fd.append('enquiryEmail', this.state.enquiryEmail);
            fd.append('subject', this.state.subject);
            fd.append('enquiryData', this.state.enquiryData);

            if(this.state.imageFile){
                fd.append('newImage', this.state.imageFile, this.state.imageFile.name);
            }
            Axios.post(CONST.BASE_URL + '/api/new-enquiry', fd).then(response =>{
                this.setState({
                    enquiryName: "",
                    enquiryNameErrorMessage: "",
                    enquiryEmail: "",
                    enquiryEmailErrorMessage: "",
                    subject: "",
                    enquiryData: "",
                    enquiryDataErrorMessage: "",
                    imageFile: "",
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
            itemsToSellContainer =  <div className='imageContainer'>
                                        <h2>Add upto 6 images</h2>
                                        <ImageUpload wording="Add Image 1?" />
                                        <ImageUpload wording="Add Image 2?" />
                                        <ImageUpload wording="Add Image 3?" />
                                        <ImageUpload wording="Add Image 4?" />
                                        <ImageUpload wording="Add Image 5?" />
                                        <ImageUpload wording="Add Image 6?" />
                                    </div>
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