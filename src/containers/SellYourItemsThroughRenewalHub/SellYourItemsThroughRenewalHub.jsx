import React, { Component } from 'react';
import classes from './SellYourItemsThroughRenewalHub.module.css';
import ImageUpload from '../../components/Ui/ImageUpload/ImageUpload';

class SellYourItemsThroughRenewalHub extends Component{

    componentDidMount = () => {
        if(this.props.redirectOnChoosingSellToRenewal){
            this.props.redirectRemovalHandler();
        }
    }

    render(){

            let contactFormSuccessMessage = "";

            if(this.props.messageSent){
                contactFormSuccessMessage = <p className='success'>Thank you for your message. Renewal Project will get back to you as soon as possible</p>
            }

            let finalDisplayedButton =  <div className={classes.buttonsContainer}>
                                            <button onClick={this.props.uploadImagePageHandler} className='main-button'>Back</button>
                                            <button onClick={this.props.checkIfSellThroughRenewlHubHandler} className='main-button'>Submit</button>
                                        </div>

            if(this.props.loader){
                finalDisplayedButton = <button className='main-button'>{this.props.loader}</button>
            }

            let shownNextButton = this.props.image1File && !this.props.image1Error && !this.props.image2Error && !this.props.image3Error && !this.props.image4Error ? <button onClick={this.props.uploadImagePageHandler} className='main-button'>Next</button> : <div className={classes.buttonsContainer}></div>;
            let image2File = this.props.image1File ? <ImageUpload imageNumber="image2File" imageNumberError="image2Error" imagePreview="image2Preview" imagePopulatedPreview={this.props.image2Preview} imageError={this.props.image2Error} wording="Add 2nd Image?" sendData={this.props.getData} /> : "";
            let image3File = this.props.image2File ? <ImageUpload imageNumber="image3File" imageNumberError="image3Error" imagePreview="image3Preview" imagePopulatedPreview={this.props.image3Preview} imageError={this.props.image3Error} wording="Add 3rd Image?" sendData={this.props.getData} /> : "";
            let image4File = this.props.image3File ? <ImageUpload imageNumber="image4File" imageNumberError="image4Error" imagePreview="image4Preview" imagePopulatedPreview={this.props.image4Preview} imageError={this.props.image4Error} wording="Add 4th Image?" sendData={this.props.getData} /> : "";
            let itemsToSellContainer =  <div className={classes.imageContainer}>
                                            <ImageUpload imageNumber="image1File" imageNumberError="image1Error" imagePreview="image1Preview" imagePopulatedPreview={this.props.image1Preview} imageError={this.props.image1Error} wording="Add First Image?" sendData={this.props.getData} />
                                            {image2File}
                                            {image3File}
                                            {image4File}
                                        </div>
            let shownPage =     <div className={classes.SellYourItemsThroughRenewalHubContainer}>
                                    <h2 className={classes.contactFormTitle} >Upload upto 4 Images</h2>
                                    {itemsToSellContainer}
                                    {shownNextButton}
                                    {contactFormSuccessMessage}
                                </div>
            if(!this.props.uploadImagePage){
                shownPage = <div className={classes.SellYourItemsThroughRenewalHubContainer}>
                                <textarea
                                    className={classes.SellYourItemsThroughRenewalHubTextArea}
                                    type='text'
                                    placeholder='List any details on your items here such as working or broken status'
                                    name='enquiryData'
                                    value={this.props.enquiryData}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryDataErrorMessage}
                                <input
                                    className={classes.SellYourItemsThroughRenewalHubInput}
                                    type='text' 
                                    placeholder='Enter Your Name Here'
                                    name='enquiryName'
                                    value={this.props.enquiryName}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryNameErrorMessage}
                                <input
                                    className={classes.SellYourItemsThroughRenewalHubInput}
                                    type='email'
                                    placeholder='Your Email Address'
                                    name='enquiryEmail'
                                    value={this.props.enquiryEmail}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryEmailErrorMessage}
                                {finalDisplayedButton}
                            </div>
            }

        return(
            <div className={classes.SellYourItemsThroughRenewalHub} >
                <h2 className={classes.SellYourItemsThroughRenewalHubTitle}>Sell Items Through Renewal Hub</h2>
                {shownPage}
            </div>
        )
    }
}

export default SellYourItemsThroughRenewalHub