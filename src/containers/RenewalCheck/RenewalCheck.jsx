import { useEffect } from 'react';
import classes from './RenewalCheck.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import renewalCheck01 from '../../assets/renewal-check-01.jpg';
import renewalCheck02 from '../../assets/renewal-check-02.jpg';
import FUNCTIONS from '../../functions/functions';
import renewalCheckImage from '../../assets/renewal-check-01.jpg';
import { FaCheckSquare } from "react-icons/fa";

export default function RenewalCheck(props){

    // useEffect(() => {
    //     FUNCTIONS.scrollToTop();
    //   });

        return (
            <div className={classes.renewalCheck}>
                    <div className='pillar-title' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalCheckImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                        <h1>{props.subjects[3]}</h1>
                    </div>
                    <div className='intro-paragraph'>
                    <h2 className='intro-title'>Renewal Check: Your Path to Sustainability and Savings</h2>
                    <h3 className='sub-intro-title'>Welcome to Renewal Check</h3>
                        <div className='image-and-paragraphs-container'>
                            <div className='paragraph-container'>
                                <p className='pillar-paragraph'>At Renewal Project, we understand the importance of sustainability and energy efficiency for small businesses and homes. That’s why we’ve created Renewal Check—a comprehensive service designed to help you reduce your environmental footprint and save on energy costs. Our goal is to make your journey towards a greener future as simple and impactful as possible.
                                </p>
                            </div>
                            <img className='main-image' src={renewalCheck01} />
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2 className='intro-title'>Why Choose Renewal Check?</h2>
                        <div className='image-and-paragraphs-container'>
                        <img className='main-image' src={renewalCheck02} />
                        <div className='paragraph-container'>
                            <p className='pillar-paragraph'>
                                Renewal Check offers a free, mini-assessment that evaluates five key areas of your energy usage and sustainability practices. Our team of experts will provide tailored advice and recommend practical solutions that are easy to implement and bring immediate benefits.
                            </p>
                        </div>  
                        </div>
                    </div>
                    <div className='sub-intro-section'>
                        <h2 className='intro-title'>Benefits of Renewal Check</h2>
                        <ul className={classes.listContainer}>
                            <li className={classes.listItemContainer}>
                                <FaCheckSquare />
                                <div  className={classes.listItemSubContainer}>
                                    <h3>Cost Savings:</h3>
                                    <p>Identify opportunities to lower your energy bills and reduce waste.</p>
                                </div>
                            </li>
                            <li className={classes.listItemContainer}>
                                <FaCheckSquare />
                                <div  className={classes.listItemSubContainer}>
                                    <h3>Sustainability:</h3>
                                    <p>Make informed choices that contribute to a healthier planet.</p>
                                </div>
                            </li>
                            <li className={classes.listItemContainer}>
                                <FaCheckSquare />
                                <div  className={classes.listItemSubContainer}>
                                    <h3>Convenience:</h3>
                                    <p>Enjoy a hassle-free assessment and expert recommendations without disrupting your routine.</p>
                                </div>
                            </li>
                            <li className={classes.listItemContainer}>
                                <FaCheckSquare />
                                <div  className={classes.listItemSubContainer}>
                                    <h3>Expert Guidance:</h3>
                                    <p>Benefit from personalized advice from our knowledgeable consultants.</p>
                                </div>
                            </li>
                            <li className={classes.listItemContainer}>
                                <FaCheckSquare />
                                <div  className={classes.listItemSubContainer}>
                                    <h3>Future-Proofing:</h3>
                                    <p>Implement changes that prepare your business or home for a sustainable future.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h2 className='intro-title'>What We Assess</h2>
                    <h3 className='sub-intro-title'>During our free mini-assessment, we evaluate the following five areas:</h3>
                    <div className={classes.stepsContainer}>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>1</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Power Consumption</h3>
                                <ul className={classes.listContainer}>
                                    <p>We analyze your energy usage patterns to identify potential savings.</p>
                                    <div  className={classes.listItemSubContainer}>
                                        <h4>Benefits: </h4>
                                        <p>Lower electricity bills, reduced carbon footprint.</p>
                                    </div>
                                    <p>We supply power consumption products to assist you in this area.</p>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>2</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Lighting</h3>
                                <ul className={classes.listContainer}>
                                    <p>We assess your current lighting solutions and suggest energy-efficient LED alternatives.</p>
                                    <div  className={classes.listItemSubContainer}>
                                        <h4>Benefits:</h4>
                                        <p>Reduced energy usage, longer-lasting bulbs, better lighting quality.</p>
                                    </div>
                                    <p>We supply bespoke LED products to assist you in this area.</p>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>3</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Energy Monitoring</h3>
                                <ul className={classes.listContainer}>
                                    <p>We evaluate your current energy monitoring systems and recommend upgrades like smart power strips.</p>
                                    <div  className={classes.listItemSubContainer}>
                                        <h4>Benefits:</h4>
                                        <p>Real-time tracking of energy consumption, automatic energy-saving actions.</p>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>4</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Circular Habits</h3>
                                <ul className={classes.listContainer}>
                                    <p>We review your practices around recycling, upcycling, and reusing items.</p>
                                    <div  className={classes.listItemSubContainer}>
                                        <h4>Benefits:</h4>
                                        <p>Reduced waste, cost savings, support for a circular economy.</p>
                                    </div>
                                    <p>We recommend unwanted items you can recycle and trade-in as well as good second user purchase options.</p>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>5</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Sustainable Items</h3>
                                <ul className={classes.listContainer}>
                                    <p>We identify opportunities to replace unsustainable consumable items with eco-friendly alternatives.</p>
                                    <div  className={classes.listItemSubContainer}>
                                        <h4>Benefits:</h4>
                                        <p>Reduced environmental impact, improved sustainability credentials.</p>
                                    </div>
                                    <p>We supply eco-friendly products to assist you in this area.</p>
                                </ul>
                            </div>
                        </div>   
                    </div>
                    <h2 className='intro-title'>Our Core Products</h2>
                    <h3 className='sub-intro-title'>Renewal Check not only provides you with actionable insights but also offers a range of products to help you implement our recommendations effectively:</h3>
                    <div className={classes.stepsContainer}>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>1</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>TP-Link Kasa Smart Power Strip</h3>
                                <ul className={classes.listContainer}>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Features:</h4>
                                    <p>Lower electricity bills, reduced carbon footprint.</p>
                                </div>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Benefits:</h4>
                                    <p>Efficient energy management, protection of your devices, ease of use.</p>
                                </div>
                                </ul>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>2</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Google Nest Learning Thermostat</h3>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Features:</h4>
                                    <p>Remote control, energy monitoring, surge protection.</p>
                                </div>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Benefits:</h4>
                                    <p>Significant energy savings, improved comfort, easy integration with smart home systems.</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>3</h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Philips LED Lightbulbs</h3>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Features:</h4>
                                    <p>Various types (E27, GU10, E14), long-lasting, energy-efficient.</p>
                                </div>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Benefits:</h4>
                                    <p>Lower energy consumption, reduced replacement costs, better lighting quality.</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <h2 className='intro-title'>Book Your Free Mini-Assessment Today!</h2>
                    <h3 className='sub-intro-title'>Take the first step towards a more sustainable and energy-efficient future with Renewal Check. Our free mini-assessment provides valuable insights and practical solutions tailored to your unique needs.</h3>
                    <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}></h2>
                            </div>
                            <div className={classes.folowingSubjectsAndParagraphContainer}>
                                <h3 className='sub-intro-title'>Schedule Your Free Assessment</h3>
                                <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Check")}>
                                    <h4>Book Now</h4>
                                </button>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Contact Us:</h4>
                                    <p>Get in touch with our team</p>
                                    <p>info@renewal-project.com</p>
                                    <p>0117 239 5614</p>
                                </div>
                                <div  className={classes.listItemSubContainer}>
                                    <h4>Learn More: </h4>
                                    <p>Explore our website to discover more about our services and products.</p>
                                </div>
                            </div>
                        </div>
                    <h3 className='intro-title'>Join the growing number of businesses and homeowners who are making a positive impact on the environment while saving money. Let Renewal Check guide you on your journey to sustainability.</h3>
                </div>
        )
    }