import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import FUNCTIONS from '../../functions/functions';
import ImageUpload from '../../components/Ui/ImageUpload/ImageUpload';

class ContactForm extends Component{

    componentDidMount(){
        FUNCTIONS.scrollToTop();
    }

    render(){

        let contactFormSuccessMessage = "";

        let itemsToSellContainer = "";

        if(this.props.messageSent){
            contactFormSuccessMessage = <p className='success'>Thank you for your message. Renewal Project will get back to you as soon as possible</p>
        }

        let contactFormTextAreaPlaceHolder = 'Enter your enquiry here';

        if(this.props.subject === "Renewal Hub - Items To Sell") {
            let image2File = this.props.image1File ? <ImageUpload imageNumber="image2File" imageError="image2Error" wording="Add 2nd Image?" sendData={this.props.getData} /> : "";
            let image3File = this.props.image2File ? <ImageUpload imageNumber="image3File" imageError="image2Error" wording="Add 3rd Image?" sendData={this.props.getData} /> : "";
            let image4File = this.props.image3File ? <ImageUpload imageNumber="image4File" imageError="image2Error" wording="Add 4th Image?" sendData={this.props.getData} /> : "";
            let image5File = this.props.image4File ? <ImageUpload imageNumber="image5File" imageError="image2Error" wording="Add 5th Image?" sendData={this.props.getData} /> : "";
            let image6File = this.props.image5File ? <ImageUpload imageNumber="image6File" imageError="image2Error" wording="Add 6th Image?" sendData={this.props.getData} /> : "";
            itemsToSellContainer =  <div className={classes.imageContainer}>
                                        <h2>Upload upto 6 Images</h2>
                                        <ImageUpload imageNumber="image1File" imageError="image1Error" wording="Add Image?" sendData={this.props.getData} />
                                        {this.props.image1Error}
                                        {image2File}
                                        {this.props.image2Error}
                                        {image3File}
                                        {this.props.image3Error}
                                        {image4File}
                                        {this.props.image4Error}
                                        {image5File}
                                        {this.props.image5Error}
                                        {image6File}
                                        {this.props.image6Error}
                                    </div>
            contactFormTextAreaPlaceHolder = 'List any details on your items here such as working or broken status';
        }

        let displayedButton = <button onClick={this.props.submitContactFormHandler} className='main-button'>Submit</button>

        if(this.props.loader){
            displayedButton = <button className='main-button'>{this.props.loader}</button>
        }

        return (
            <div className={classes.contactForm}>
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
                {itemsToSellContainer}
                <textarea
                    className={classes.contactFormTextArea}
                    type='text'
                    placeholder={contactFormTextAreaPlaceHolder}
                    name='enquiryData'
                    value={this.props.enquiryData}
                    onChange={this.props.changeHandler}
                />
                {this.props.enquiryDataErrorMessage}
                {displayedButton}
                {contactFormSuccessMessage}
            </div>
        )
    }
}

export default ContactForm