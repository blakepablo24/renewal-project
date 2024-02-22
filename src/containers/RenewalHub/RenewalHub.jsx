import React, { Component } from 'react';
import classes from './RenewalHub.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { GiMagnifyingGlass } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import packageImage from '../../assets/4.jpg';
import FUNCTIONS from '../../functions/functions';

class RenewalHub extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){

        return (
            <div className={classes.renewalHub}>
                    <div className='pillar-title'>
                        <h1>{this.props.subjects[0]}</h1>
                    </div>
                    <Link className='main-button' to='/sell-your-items-through-renewal-hub'>
                        <h4>Sell Items Your Through {this.props.subjects[0]}</h4>
                    </Link>
                    <div className='intro-paragraph'>
                        <p className='pillar-paragraph'>At Renewal Hub, we champion a circular economy by recycling and reusing used items. We connect communities through sustainable trade and reward loyalty, creating a network of individuals committed to reducing waste and embracing eco-friendly living. By turning unwanted items into valued resources, we are committed to promoting community engagement and zero waste practices.</p>
                    </div>
                    <Link className='main-button' to=''>
                        <h4>Check Out Our {this.props.subjects[0]} Store</h4>
                    </Link>
                    <p className='pillar-paragraph'>Dispose of your unwanted items of value, purchase pre-loved items, contribute to a circular economy and get rewarded for it in these 4 simple steps:</p>
                    <div className={classes.stepsContainer}>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className='step-number'>Step 1</h2>
                                <CiHome />
                            </div>
                            <p className={classes.stepParagraph}>Make space in your home or business by letting us know which unused items you want to get off your hands.</p>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>Step 2</h2>
                                <GiMagnifyingGlass />
                            </div>
                            <p className={classes.stepParagraph}>We will assess your item for suitability and receive the item, store it, list it and promote it to be sold.</p>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>Step 3</h2>
                                <TbTruckDelivery />
                            </div>
                            <p className={classes.stepParagraph}>Once your item sells, we will package it and deliver to the buyer and reward you with a percentage of the proceeds and reward you with Renewal Points that can go towards a charitable donation or discount on future purchases.</p>
                        </div>
                        <div className={classes.stepContainer}>
                            <div className={classes.stepHeading}>
                                <h2 className={classes.stepNumber}>Step 4</h2>
                                <FaCoins />
                            </div>
                            <p className={classes.stepParagraph}>Use your Renewal Points to shop for other pre-loved items on Renewal Hub, or donate to one of our charities or Renewal Impact causes.</p>
                        </div>
                    </div>
                    <div className='landing-page-full-screen'>
                    <div className='image-and-paragraphs-container'>
                            <div className='paragraphs-container'>
                                <p className='landing-page-full-screen-paragraph'>Get in contact to take your first step towards a zero waste future.</p>
                            </div>
                            <img className='main-image' src={packageImage} />
                        </div>
                    </div>
                    <Link className='main-button' to=''>
                        <h4>Check Out Our {this.props.subjects[0]} Store</h4>
                    </Link>
            </div>
        )
    }
}

export default RenewalHub