import React, { useEffect } from 'react';
import classes from './SellYourItemsThroughRenewalHub.module.css';
import ImageUpload from '../../components/Ui/ImageUpload/ImageUpload';
import FlashMessage from '../../components/Ux/FlashMessage/FlashMessage';
import FUNCTIONS from '../../functions/functions';

export default function SellYourItemsThroughRenewalHub(props){

    useEffect(() => {
        FUNCTIONS.scrollToTop();
        if(props.redirectOnChoosingSellToRenewal){
            props.redirectRemovalHandler();
        }
      });

    let successMessage = <h2 className={classes.SellYourItemsThroughRenewalHubTitle}>Sell Your Items Through Renewal Hub</h2>;

    if(props.messageSent){
        successMessage = <FlashMessage flashMessageRemoveSavedMessaegHandler={props.flashMessageRemoveSavedMessaegHandler} duration={15000} message="Thank you for your message. Renewal Project will review your items and let you know as soon as possible if the items will be accepted." />;
    }

    let finalDisplayedButton =  <div className={classes.buttonsContainer}>
                                    <button onClick={props.uploadImagePageHandler} className='main-button'>Back</button>
                                    <button onClick={props.checkIfSellThroughRenewlHubHandler} className='main-button'>Submit</button>
                                </div>

    if(props.loader){
        finalDisplayedButton = <button className='main-button'>{props.loader}</button>
    }

    let shownNextButton = props.image1File && !props.image1Error && !props.image2Error && !props.image3Error && !props.image4Error ? <button onClick={props.uploadImagePageHandler} className='main-button'>Next</button> : <div className={classes.buttonsContainer}></div>;
    let image2File = props.image1File &&  !props.image1Error ? <ImageUpload imageNumber="image2File" imageNumberError="image2Error" imagePreview="image2Preview" imagePopulatedPreview={props.image2Preview} imageError={props.image2Error} wording="Add 2nd Image?" sendData={props.getData} /> : "";
    let image3File = props.image2File &&  !props.image2Error ? <ImageUpload imageNumber="image3File" imageNumberError="image3Error" imagePreview="image3Preview" imagePopulatedPreview={props.image3Preview} imageError={props.image3Error} wording="Add 3rd Image?" sendData={props.getData} /> : "";
    let image4File = props.image3File &&  !props.image3Error ? <ImageUpload imageNumber="image4File" imageNumberError="image4Error" imagePreview="image4Preview" imagePopulatedPreview={props.image4Preview} imageError={props.image4Error} wording="Add 4th Image?" sendData={props.getData} /> : "";
    let itemsToSellContainer =  <div className={classes.imageContainer}>
                                    <ImageUpload imageNumber="image1File" imageNumberError="image1Error" imagePreview="image1Preview" imagePopulatedPreview={props.image1Preview} imageError={props.image1Error} wording="Add First Image?" sendData={props.getData} />
                                    {image2File}
                                    {image3File}
                                    {image4File}
                                </div>
    let shownPage =     <div className={classes.SellYourItemsThroughRenewalHubContainer}>
                            <h2 className={classes.contactFormTitle} >Upload upto 4 Images of your items</h2>
                            {itemsToSellContainer}
                            {shownNextButton}
                        </div>
    if(!props.uploadImagePage){
        shownPage = <div className={classes.SellYourItemsThroughRenewalHubContainerContactDetails}>
                        <textarea
                            className={classes.SellYourItemsThroughRenewalHubTextArea}
                            type='text'
                            placeholder={props.placeHolderSellQuery}
                            name='enquiryData'
                            value={props.enquiryData}
                            onChange={props.changeHandler}
                        />
                        {props.enquiryDataErrorMessage}
                        <input
                            className={classes.SellYourItemsThroughRenewalHubInput}
                            type='text' 
                            placeholder={props.placeHolderName}
                            name='enquiryName'
                            value={props.enquiryName}
                            onChange={props.changeHandler}
                        />
                        {props.enquiryNameErrorMessage}
                        <input
                            className={classes.SellYourItemsThroughRenewalHubInput}
                            type='email'
                            placeholder={props.placeHolderEmail}
                            name='enquiryEmail'
                            value={props.enquiryEmail}
                            onChange={props.changeHandler}
                        />
                        {props.enquiryEmailErrorMessage}
                        <input
                            className={classes.SellYourItemsThroughRenewalHubInput}
                            type='number'
                            placeholder={props.placeHolderPhone}
                            name='enquiryPhone'
                            value={props.enquiryPhone}
                            onChange={props.changeHandler}
                        />
                        {props.enquiryPhoneErrorMessage}
                        {finalDisplayedButton}
                    </div>
    }

    return(
        <div className={classes.SellYourItemsThroughRenewalHub} >
            {successMessage}
            {shownPage}
        </div>
    )
}