import React, { useEffect } from 'react';
import classes from './RenewalTransport.module.css';
import { Link } from 'react-router-dom';
import assetDisposal from '../../assets/asset-disposal.jpg'
import clearance from '../../assets/clearance.jpg';
import moves from '../../assets/moves.jpg';
import collectionDelivery from '../../assets/collection-delivery.jpg';
import FUNCTIONS from '../../functions/functions';

export default function RenewalTransport(props){

    useEffect(() => {
        FUNCTIONS.scrollToTop();
      });

    return(
        <div className={classes.renewalTransport}>
            <div className='pillar-title'>
                <h1>{props.subjects[7]}</h1>
            </div>
            <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Transport")}>
                <h4>Book your transport now</h4>
            </button>
            <div className='paragraph-container'>
                <p className='pillar-paragraph'>At Renewal Transport, we're redefining the way we move, emphasising sustainability, efficiency, and community well-being. Our comprehensive transportation services encompass a range of eco-friendly solutions designed to meet the diverse needs of individuals and businesses, all while minimising environmental impact and maximising social value.</p>
            </div>
            <div className='sub-intro-section'>
                <h2 className='intro-title'>Asset Disposal and Value Recovery</h2>
                <div className='image-and-paragraphs-container'>
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>
                        With Renewal Transport, disposing of unwanted assets is not just about discarding them; it's about unlocking their potential and recovering their value. Our sustainable disposal methods ensure that items are ethically and responsibly managed, with a focus on recycling, repurposing, and rehoming whenever possible. By choosing Renewal Transport, customers contribute to a circular economy and help reduce waste while recouping value from their assets. 
                        </p>
                    </div>
                    <img className='main-image' src={assetDisposal} />
                </div>
            </div>
            <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Transport")}>
                <h4>Book your transport now</h4>
            </button>
            <div className='sub-intro-section'>
                <h2 className='intro-title'>Home and Office Clearances</h2>
                <div className='image-and-paragraphs-container'>
                    <img className='main-image' src={clearance} />
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>
                        Whether you're decluttering your home or streamlining your office space, Renewal Transport offers hassle-free clearance services that prioritise sustainability and convenience. Our trained professionals handle the entire clearance process, from packing and removal to disposal and recycling. We go beyond mere disposal by salvaging usable items, donating them to local charities, and diverting waste from landfills. With Renewal Transport, clearing out your space becomes a sustainable endeavour that benefits both you and the community. 
                        </p>
                    </div>
                </div>
            </div>
            <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Transport")}>
                <h4>Book your transport now</h4>
            </button>
            <div className='sub-intro-section'>
                <h2 className='intro-title'>House and Office Moves</h2>
                <div className='image-and-paragraphs-container'>
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>
                            Moving to a new home or office? Let Renewal Transport make the transition smooth, efficient, and eco-conscious. Our expert movers specialise in sustainable moving practices, using environmentally friendly packaging materials, optimising transport routes to minimise emissions, and ensuring the safe and secure transportation of your belongings. By choosing Renewal Transport for your move, you reduce your carbon footprint and support sustainable transport initiatives.
                        </p>
                    </div>
                    <img className='main-image' src={moves} />
                </div>
            </div>
            <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Transport")}>
                <h4>Book your transport now</h4>
            </button>
            <div className='sub-intro-section'>
                <h2 className='intro-title'>Item Collection and Delivery</h2>
                <div className='image-and-paragraphs-container'>
                    <img className='main-image' src={collectionDelivery} />
                    <div className='paragraph-container'>
                        <p className='pillar-paragraph'>
                            Need to transport items from one location to another? Renewal Transport provides reliable collection and delivery services that prioritise sustainability and reliability. Whether it's a single item or a bulk shipment, our eco-friendly transport solutions ensure that goods are transported safely and efficiently. From picking up trade-in items at your doorstep to delivering purchases to customers, Renewal Transport facilitates seamless transactions while promoting environmental responsibility.
                        </p>
                    </div>
                </div>
            </div>
            <button className='main-button' onClick={props.changeSubjectHandler.bind(this, "Renewal Transport")}>
                <h4>Book your transport now</h4>
            </button>
        </div>
    )
}