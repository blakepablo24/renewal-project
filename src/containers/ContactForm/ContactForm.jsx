import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import FUNCTIONS from '../../functions/functions';

class ContactForm extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){

        let contactFormSuccessMessage = "";

        if(this.props.messageSent){
            contactFormSuccessMessage = <p className='success'>Thank you for your message. Renewal Project will get back to you as soon as possible</p>
        }

        let displayedButton = <button onClick={this.props.submitContactFormHandler} className='main-button'>Submit</button>

        if(this.props.loader){
            displayedButton = <button className='main-button'>{this.props.loader}</button>
        }

        return (
            <form className={classes.contactForm}>
                <h2 className={classes.contactFormTitle}>Renewal Project Contact Form</h2>
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
                {contactFormSuccessMessage}
            </form>
        )
    }
}

export default ContactForm