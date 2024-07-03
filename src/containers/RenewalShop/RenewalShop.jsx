import React from 'react';
import classes from './RenewalShop.module.css';
import { Link } from 'react-router-dom';
import CONST from '../../constants/constants';

import renewalShopImage from '../../assets/shop-banner-image.png';

export default function RenewalShop(props) {
    
    // const shoppingCategories = [
    //     [image => diyPowerTools, title = ""],
    //     [image = fashionAccessories, title = "Fashion Accessories"],
    // ]

    

    return(
        <div className={classes.renewalShop}>
            <div className='pillar-title' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)),url(${renewalShopImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h1>{props.subjects[6]}</h1>
            </div>
            <div className='paragraph-container'>
                <p className='pillar-paragraph'>Welcome to the Renewal Project Shop, your destination for sustainable living essentials and eco-friendly solutions. Browse through our curated collection of products designed to support a greener, cleaner future. From recycled home decor to energy-efficient gadgets, each item is handpicked to align with our mission of promoting environmental stewardship and social responsibility. Shop with purpose and join us in building a more sustainable world, one purchase at a time.</p>
            </div>
            <div className={classes.shoppingLinkContainer}>
                <Link className='main-button' to='https://www.ebay.co.uk/str/renewalproject'>
                    {/* <div className={classes.shopLinkContainer}> */}
                        <h4>CHECK OUT OUR EBAY</h4>
                        {/* <img className={classes.linkImage} src={ebay}/> */}
                    {/* </div> */}
                </Link>
                <Link className='main-button' to='https://5d164f.myshopify.com/collections/all'>
                    {/* <div className={classes.shopLinkContainer}> */}
                        <h4>CHECK OUT OUR SHOPIFY</h4>
                        {/* <img className={classes.linkImage} src={shopify}/> */}
                    {/* </div> */}
                </Link>
            </div>
            <h2 className={classes.renewalImpactSubTitle}>Browse through our wide range of products</h2>
            <div className={classes.shoppingCategoriesContainer}>
                {CONST.shoppingCategories.map((category, i) => 
                <Link to={category.link} key={i} className={classes.shoppingCategoryContainer}>
                    <img className={classes.shoppingCategoryImage} src={category.image} />
                    <div className={classes.shoppingCategoryHeadingContainer}>
                        <h3 className={classes.shoppingCategoryHeading}>{category.title}</h3>
                    </div>
                </Link>
                )}
            </div>
            
            <Link className='main-button' to='/contact-form'>
                <h4>Contact Us</h4>
            </Link>
        </div>
    )

}