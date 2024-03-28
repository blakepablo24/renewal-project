import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import FUNCTIONS from '../../functions/functions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlashMessage from '../../components/Ux/FlashMessage/FlashMessage';

class ContactForm extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
        if(this.props.redirectOnChoosingSellToRenewal){
            this.props.redirectRemovalHandler();
        }
    }

    render(){

        let contactFormSuccessMessage = "";

        let shownFormOptions = "";

        if(this.props.messageSent){
            contactFormSuccessMessage = <FlashMessage flashMessageRemoveSavedMessaegHandler={this.props.flashMessageRemoveSavedMessaegHandler} duration={15000} message="Thank you for your message. Renewal Project will get back to you as soon as possible" />;
        }

        let displayedButton = <button onClick={this.props.submitContactFormHandler} className='main-button'>Submit</button>

        if(this.props.loader){
            displayedButton = <button className='main-button'>{this.props.loader}</button>
        }

        // Only select button when first coming to contact form

        if (this.props.subject === "" || this.props.subject === "select") {
            shownFormOptions = <form className={classes.contactForm}>
                                    <h2 className={classes.contactFormTitle}>Renewal Project Contact Form</h2>
                                    <select
                                        className={classes.contactFormInput}
                                        name="subject"
                                        value={this.props.subject}
                                        onChange={this.props.changeHandler}
                                    >
                                        <option value="select">Select Subject</option>
                                        {this.props.subjects.map((subject, i) =>
                                            <option key={i} name={subject} value={subject}>{subject}</option>
                                        )}
                                    </select>
                                    {this.props.enquirySubjectErrorMessage}
                                    {contactFormSuccessMessage}
                                </form>
        }

        if (
            this.props.subject === "Renewal Hub" 
            || 
            this.props.subject === "Renewal Tech"
            || 
            this.props.subject === "Renewal Impact"
            || 
            this.props.subject === "Renewal Building Protocols"
            || 
            this.props.subject === "Shop"
            || 
            this.props.subject === "Other"
            ) {

        shownFormOptions = <form className={classes.contactForm}>
                                <h2 className={classes.contactFormTitle}>{this.props.subject} Contact Form</h2>
                                <select
                                    className={classes.contactFormInput}
                                    name="subject"
                                    value={this.props.subject}
                                    onChange={this.props.changeHandler}
                                >
                                    <option value="select">Select Subject</option>
                                    {this.props.subjects.map((subject, i) =>
                                        <option key={i} name={subject} value={subject}>{subject}</option>
                                    )}
                                </select>
                                {this.props.enquirySubjectErrorMessage}
                                <input
                                    className={classes.contactFormInput}
                                    type='text' 
                                    placeholder='Enter Your Name Here'
                                    name='enquiryName'
                                    value={this.props.enquiryName}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryNameErrorMessage}
                                <input
                                    className={classes.contactFormInput}
                                    type='email'
                                    placeholder='Your Email Address'
                                    name='enquiryEmail'
                                    value={this.props.enquiryEmail}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryEmailErrorMessage}
                                <textarea
                                    className={classes.contactFormTextArea}
                                    type='text'
                                    placeholder='Enter your query here'
                                    name='enquiryData'
                                    value={this.props.enquiryData}
                                    onChange={this.props.changeHandler}
                                />
                                {this.props.enquiryDataErrorMessage}
                                {this.props.sendingMessageAlert}
                                {displayedButton}
                            </form>
            }

            let transportFormInputs = "";

            if (this.props.transportService === "Disposal" || this.props.transportService === "Clearance"){
                transportFormInputs = <div className={classes.conditionalDeliveryAddressContainer}>
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder='Enter Your Name Here'
                                            name='enquiryName'
                                            value={this.props.enquiryName}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryNameErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='email'
                                            placeholder='Your Email Address'
                                            name='enquiryEmail'
                                            value={this.props.enquiryEmail}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryEmailErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder='Collection Address'
                                            name='enquiryCollectionAddress'
                                            value={this.props.enquiryCollectionAddress}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryCollectionAddressErrorMessage}
                                        <div className={classes.selectDateContainer}>
                                            <h3>Select preferred Date</h3>
                                            <DatePicker
                                                showIcon
                                                onChange={this.props.dateChangeHandler}
                                                selected={this.props.enquiryDate}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                            />
                                        </div>
                                        {this.props.enquiryDateErrorMessage}
                                        <textarea
                                            className={classes.contactFormTextArea}
                                            type='text'
                                            placeholder='Enter your enquiry here'
                                            name='enquiryData'
                                            value={this.props.enquiryData}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryDataErrorMessage}
                                        {this.props.sendingMessageAlert}
                                        {displayedButton}
                                    </div>
            }

            if (this.props.transportService === "Move" || this.props.transportService === "Delivery"){
                transportFormInputs = <div className={classes.conditionalDeliveryAddressContainer}>
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder='Enter Your Name Here'
                                            name='enquiryName'
                                            value={this.props.enquiryName}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryNameErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='email'
                                            placeholder='Your Email Address'
                                            name='enquiryEmail'
                                            value={this.props.enquiryEmail}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryEmailErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder='Collection Address'
                                            name='enquiryCollectionAddress'
                                            value={this.props.enquiryCollectionAddress}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryCollectionAddressErrorMessage}
                                        <input
                                            className={classes.contactFormInput}
                                            type='text' 
                                            placeholder='Delivery Address'
                                            name='enquiryDeliveryAddress'
                                            value={this.props.enquiryDeliveryAddress}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryDeliveryAddressErrorMessage}
                                        <div className={classes.selectDateContainer}>
                                            <h3>Select preferred Date</h3>
                                            <DatePicker
                                                onChange={this.props.dateChangeHandler}
                                                selected={this.props.enquiryDate}
                                                dateFormat="dd/MM/yyyy"
                                                minDate={new Date()}
                                                disabledKeyboardNavigation
                                            />
                                        </div>
                                        {this.props.enquiryDateErrorMessage}
                                        <textarea
                                            className={classes.contactFormTextArea}
                                            type='text'
                                            placeholder='List Items here to be collected and deliverred'
                                            name='enquiryData'
                                            value={this.props.enquiryData}
                                            onChange={this.props.changeHandler}
                                        />
                                        {this.props.enquiryDataErrorMessage}
                                        {this.props.sendingMessageAlert}
                                        {displayedButton}
                                    </div>
            }

            if (this.props.subject === "Renewal Transport"){
                shownFormOptions = <form className={classes.contactForm}>
                                <h2 className={classes.contactFormTitle}>{this.props.subject} Contact Form</h2>
                                <select
                                    className={classes.contactFormInput}
                                    name="subject"
                                    value={this.props.subject}
                                    onChange={this.props.changeHandler}
                                >
                                    <option value="select">Select Subject</option>
                                    {this.props.subjects.map((subject, i) =>
                                        <option key={i} name={subject} value={subject}>{subject}</option>
                                    )}
                                </select>
                                {this.props.enquirySubjectErrorMessage}
                                <select
                                    className={classes.contactFormInput}
                                    name="transportService"
                                    value={this.props.transportService}
                                    onChange={this.props.changeHandler}
                                >
                                    <option value="select">Select Transport Service</option>
                                    {this.props.transportServices.map((transportService, i) =>
                                        <option key={i} name={transportService} value={transportService}>{transportService}</option>
                                    )}
                                </select>
                                {transportFormInputs}
                            </form>
            }

        return (
            <div className={classes.contactFormContainer}>
                {shownFormOptions}
            </div>
        )
    }
}

export default ContactForm