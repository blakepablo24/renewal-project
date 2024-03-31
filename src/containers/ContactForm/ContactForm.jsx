import React, { useEffect } from 'react';
import classes from './ContactForm.module.css';
import FUNCTIONS from '../../functions/functions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlashMessage from '../../components/Ux/FlashMessage/FlashMessage';

export default function ContactForm(props){

    useEffect(() => {
        FUNCTIONS.scrollToTop();
        if(props.redirectOnChoosingSellToRenewal){
            props.redirectRemovalHandler();
        }
      });

      let contactFormSuccessMessage = "";

        let shownFormOptions = "";

        let sortedSubjects = props.subjects.sort();

        let sortedTransportServices = props.transportServices.sort();

        if(props.messageSent){
            contactFormSuccessMessage = <FlashMessage flashMessageRemoveSavedMessaegHandler={props.flashMessageRemoveSavedMessaegHandler} duration={15000} message="Thank you for your message. Renewal Project will get back to you as soon as possible" />;
        }

        let displayedButton = <button onClick={props.submitContactFormHandler} className='main-button'>Submit</button>

        if(props.loader){
            displayedButton = <button className='main-button'>{props.loader}</button>
        }

        // Only select button when first coming to contact form

        if (props.subject === "" || props.subject === "select") {
            shownFormOptions = <form className={classes.contactForm}>
                                    <h2 className={classes.contactFormTitle}>Renewal Project Contact Form</h2>
                                    <select
                                        className={classes.contactFormInput}
                                        name="subject"
                                        value={props.subject}
                                        onChange={props.changeHandler}
                                    >
                                        <option value="select">Select Subject</option>
                                        {
                                        
                                        sortedSubjects.map((sortedSubject, i) =>
                                            <option key={i} name={sortedSubject} value={sortedSubject}>{sortedSubject}</option>
                                        )}
                                    </select>
                                    {props.enquirySubjectErrorMessage}
                                    {contactFormSuccessMessage}
                                </form>
        }

        if (
            props.subject === "Renewal Hub" 
            || 
            props.subject === "Renewal Tech"
            || 
            props.subject === "Renewal Impact"
            || 
            props.subject === "Renewal Building Protocols"
            || 
            props.subject === "Shop"
            || 
            props.subject === "Other"
            ) {

        shownFormOptions = <form className={classes.contactForm}>
                                <h2 className={classes.contactFormTitle}>{props.subject} Contact Form</h2>
                                <select
                                    className={classes.contactFormInput}
                                    name="subject"
                                    value={props.subject}
                                    onChange={props.changeHandler}
                                >
                                    <option value="select">Select Subject</option>
                                    {sortedSubjects.map((sortedSubject, i) =>
                                            <option key={i} name={sortedSubject} value={sortedSubject}>{sortedSubject}</option>
                                        )}
                                </select>
                                {props.enquirySubjectErrorMessage}
                                <input
                                    className={classes.contactFormInput}
                                    type='text' 
                                    placeholder={props.placeHolderName}
                                    name='enquiryName'
                                    value={props.enquiryName}
                                    onChange={props.changeHandler}
                                />
                                {props.enquiryNameErrorMessage}
                                <input
                                    className={classes.contactFormInput}
                                    type='email'
                                    placeholder={props.placeHolderEmail}
                                    name='enquiryEmail'
                                    value={props.enquiryEmail}
                                    onChange={props.changeHandler}
                                />
                                {props.enquiryEmailErrorMessage}
                                <input
                                    className={classes.contactFormInput}
                                    type='number'
                                    placeholder={props.placeHolderPhone}
                                    name='enquiryPhone'
                                    value={props.enquiryPhone}
                                    onChange={props.changeHandler}
                                />
                                {props.enquiryPhoneErrorMessage}
                                <textarea
                                    className={classes.contactFormTextArea}
                                    type='text'
                                    placeholder={props.placeHolderQuery}
                                    name='enquiryData'
                                    value={props.enquiryData}
                                    onChange={props.changeHandler}
                                />
                                {props.enquiryDataErrorMessage}
                                {props.sendingMessageAlert}
                                {displayedButton}
                            </form>
            }

            let transportFormInputs = "";

            if (props.transportService === "Disposal" || props.transportService === "Clearance"){
                transportFormInputs = <div className={classes.conditionalDeliveryAddressContainer}>
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder={props.placeHolderName}
                                            name='enquiryName'
                                            value={props.enquiryName}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryNameErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='email'
                                            placeholder={props.placeHolderEmail}
                                            name='enquiryEmail'
                                            value={props.enquiryEmail}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryEmailErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='number'
                                            placeholder={props.placeHolderPhone}
                                            name='enquiryPhone'
                                            value={props.enquiryPhone}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryPhoneErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder={props.placeHolderCollectionAddress}
                                            name='enquiryCollectionAddress'
                                            value={props.enquiryCollectionAddress}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryCollectionAddressErrorMessage}
                                        <div className={classes.selectDateContainer}>
                                            <h3>Select preferred Date</h3>
                                            <DatePicker
                                                showIcon
                                                onChange={props.dateChangeHandler}
                                                selected={props.enquiryDate}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                            />
                                        </div>
                                        {props.enquiryDateErrorMessage}
                                        <textarea
                                            className={classes.contactFormTextArea}
                                            type='text'
                                            placeholder={props.placeHolderTransportQuery}
                                            name='enquiryData'
                                            value={props.enquiryData}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryDataErrorMessage}
                                        {props.sendingMessageAlert}
                                        {displayedButton}
                                    </div>
            }

            if (props.transportService === "Move" || props.transportService === "Delivery"){
                transportFormInputs = <div className={classes.conditionalDeliveryAddressContainer}>
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder={props.placeHolderName}
                                            name='enquiryName'
                                            value={props.enquiryName}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryNameErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='email'
                                            placeholder={props.placeHolderEmail}
                                            name='enquiryEmail'
                                            value={props.enquiryEmail}
                                            onChange={props.changeHandler}
                                        />
                                        <input
                                            className={classes.contactFormInput}
                                            type='number'
                                            placeholder={props.placeHolderPhone}
                                            name='enquiryPhone'
                                            value={props.enquiryPhone}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryPhoneErrorMessage}
                                        {props.enquiryEmailErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder={props.placeHolderCollectionAddress}
                                            name='enquiryCollectionAddress'
                                            value={props.enquiryCollectionAddress}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryCollectionAddressErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder={props.placeHolderDeliveryAddress}
                                            name='enquiryDeliveryAddress'
                                            value={props.enquiryDeliveryAddress}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryDeliveryAddressErrorMessage}
                                        <div className={classes.selectDateContainer}>
                                            <h3>Select preferred Date</h3>
                                            <DatePicker
                                                onChange={props.dateChangeHandler}
                                                selected={props.enquiryDate}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                disabledKeyboardNavigation
                                            />
                                        </div>
                                        {props.enquiryDateErrorMessage}
                                        <textarea
                                            className={classes.contactFormTextArea}
                                            type='text'
                                            placeholder={props.placeHolderCollectionAndDeliveryItems}
                                            name='enquiryData'
                                            value={props.enquiryData}
                                            onChange={props.changeHandler}
                                        />
                                        {props.enquiryDataErrorMessage}
                                        {props.sendingMessageAlert}
                                        {displayedButton}
                                    </div>
            }

            if (props.subject === "Renewal Transport"){
                shownFormOptions = <form className={classes.contactForm}>
                                <h2 className={classes.contactFormTitle}>{props.subject} Contact Form</h2>
                                <select
                                    className={classes.contactFormInput}
                                    name="subject"
                                    value={props.subject}
                                    onChange={props.changeHandler}
                                >
                                    <option value="select">Select Subject</option>
                                    {sortedSubjects.map((sortedSubject, i) =>
                                        <option key={i} name={sortedSubject} value={sortedSubject}>{sortedSubject}</option>
                                    )}
                                </select>
                                {props.enquirySubjectErrorMessage}
                                <select
                                    className={classes.contactFormInput}
                                    name="transportService"
                                    value={props.transportService}
                                    onChange={props.changeHandler}
                                >
                                    <option value="select">Select Transport Service</option>
                                    {sortedTransportServices.map((sortedTransportService, i) =>
                                        <option key={i} name={sortedTransportService} value={sortedTransportService}>{sortedTransportService}</option>
                                    )}
                                </select>
                                {transportFormInputs}
                            </form>
            }

    return(
        <div className={classes.contactFormContainer}>
            {shownFormOptions}
        </div>
    )
}