import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './Layout.css';
import Toolbar from '../../components/Ui/Toolbar/Toolbar';
import Footer from '../../components/Ui/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import SideDrawer from '../../components/Ui/Toolbar/Navigation/SideDrawer/SideDrawer';
// Pages
import LandingPage from '../../containers/LandingPage/LandingPage';
import RenewalHub from '../../containers/RenewalHub/RenewalHub';
import RenewalTech from '../../containers/RenewalTech/RenewalTech';
import RenewalImpact from '../../containers/RenewalImpact/RenewalImpact';
import RenewalCheck from '../../containers/RenewalCheck/RenewalCheck';
import ContactForm from '../../containers/ContactForm/ContactForm';
import EmailValidator from 'email-validator';
import Axios from 'axios';
import CONST from '../../constants/constants';
import Loader from '../../components/Ux/Loader/Loader';
import SellYourItemsThroughRenewalHub from '../../containers/SellYourItemsThroughRenewalHub/SellYourItemsThroughRenewalHub';
import RenewalShop from '../../containers/RenewalShop/RenewalShop';
import RenewalTransport from '../../containers/RenewalTransport/RenewalTransport';
import PrivacyPolicyModal from '../../components/Ui/PrivacyPolicy/PrivacyPolicyModal';
import CookiesPolicy from '../../containers/CookiesPolicy/CookiesPolicy';
import PrivacyPolicy from '../../containers/PrivacyPolicy/PrivacyPolicy';

class Layout extends Component{

    state = {
        showSideDrawer: false,
        menu: false,
        subjects: [
            "Renewal Hub",
            "Renewal Tech",
            "Renewal Impact",
            "Renewal Check",
            "Sell Items Through Renewal Hub",
            "Other",
            "Shop",
            "Renewal Transport"
        ],
        subject: "",
        transportServices: [
            "Disposal",
            "Clearance",
            "Move",
            "Delivery"
        ],
        transportService: "",
        // Contact Form State
        enquirySubjectErrorMessage: "",
        enquiryName: "",
        enquiryNameErrorMessage: "",
        enquiryEmail: "",
        enquiryEmailErrorMessage: "",
        enquiryPhone: "",
        enquiryPhoneErrorMessage: "",
        enquiryCollectionAddress: "",
        enquiryCollectionAddressErrorMessage: "",
        enquiryDeliveryAddress: "",
        enquiryDeliveryAddressErrorMessage: "",
        startDate: new Date(),
        enquiryDate: "",
        enquiryDateErrorMessage: "",
        enquiryData: "",
        enquiryDataErrorMessage: "",
        messageSent: false,
        image1File: "",
        image1Preview: "",
        image1Error: "",
        image2File: "",
        image2Preview: "",
        image2Error: "",
        image3File: "",
        image3Preview: "",
        image3Error: "",
        image4File: "",
        image4Preview: "",
        image4Error: "",
        loader: "",
        sendingMessageAlert: "",
        uploadImagePage: true,
        redirectOnChoosingSellToRenewal: "",
        projectsShown: false,
        showPrivacyPolicyModal: false,
        placeHolderName: "Enter Your Name",
        placeHolderEmail: "Enter Your Email",
        placeHolderPhone: "Enter Your Contact Number",
        placeHolderCollectionAddress: "Enter Your Collection address",
        placeHolderDeliveryAddress: "Enter Your Delivery address",
        placeHolderCollectionAndDeliveryItems: "Please list items to be collected and delivered",
        placeHolderQuery: "Please Enter Your Query Here",
        placeHolderTransportQuery: "Please list items to be collected",
        placeHolderSellQuery: "Please list details on the items to sell along with their status such as working or broken"
    }

    componentDidMount = () => { 
        if(!this.getCookie("visitedBefore")) {
            this.setState({
                showPrivacyPolicyModal: true,
            })
        }
    }

    setCookie = (cname, cvalue, exdays) => {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 1000 * 60 * 60 * 24 * 365));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    getCookie = (cname) => {
        let allCookies = document.cookie.split(';');
        let cookieExists = false;
        allCookies.forEach(cookie => {
            if(cookie.trim() === cname+"="+true){
                cookieExists = true
            }
        });
        return cookieExists;
    }

    toggleCookiePolicyModal = () => {
        this.setState({
            showPrivacyPolicyModal: !this.state.showPrivacyPolicyModal
        })
        if(!this.getCookie("visitedBefore")) {
            this.setCookie("visitedBefore", true, 30)
        }
    }

    sideDrawerToggleHandler = (nav) => {
        // if(nav === "nav"){
        //     FUNCTIONS.scrollToTop();
        // }
        if(nav === "mobileNav"){
            this.setState({
                showSideDrawer: !this.state.showSideDrawer,
                menu: !this.state.menu
            })
            if(this.state.projectsShown){
                this.toggleProjectsShownHandler();
            }
        } else if(nav === "largeScreen" && this.state.projectsShown) {
            this.toggleProjectsShownHandler();
        }
    }

    dateChangeHandler = (date) => {
        this.setState({
            enquiryDate: date,
            enquiryDateErrorMessage: ""
        })
    }

    changeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;

        if (value === "Sell Items Through Renewal Hub") {
            value = "";
            this.setState({
                subject: "",
                redirectOnChoosingSellToRenewal: <Navigate to="/sell-your-items-through-renewal-hub" />
            })
        }

        this.setState({
            [name]: value,
            enquiryNameErrorMessage: "",
            enquiryEmailErrorMessage: "",
            enquiryPhoneErrorMessage: "",
            enquiryDataErrorMessage: "",
            enquiryPillarErrorMessage: "",
            enquiryCollectionAddressErrorMessage: "",
            enquiryDeliveryAddressErrorMessage: "",
            enquirySubjectErrorMessage: "",
            image1Error: "",
            image2Error: "",
            image3Error: "",
            image4Error: "",
            image5Error: "",
            image6Error: ""
        });
    }

    changeSubjectHandler = (subject) => {
        this.setState({
            subject: subject,
            redirectOnChoosingSellToRenewal: <Navigate to="/contact-form" />
        })
    }

    redirectRemovalHandler = () => {
        if(this.state.redirectOnChoosingSellToRenewal){
            this.setState({
                redirectOnChoosingSellToRenewal: ""
            })
        }
    }

    checkIfSellThroughRenewlHubHandler = () => {
        
        let subject = "Renewal Hub - Sell Your Items";
        
        this.submitContactFormHandler(subject);
    }

    submitContactFormHandler = (subject) => {
        event.preventDefault();
        
        let enquiryNameErrorMessage = "";
        let enquiryEmailErrorMessage = "";
        let enquiryPhoneErrorMessage = "";
        let enquiryDataErrorMessage = "";
        let enquirySubjectErrorMessage = "";
        let enquiryCollectionAddressErrorMessage = "";
        let enquiryDeliveryAddressErrorMessage = "";
        let enquiryDateErrorMessage = "";

        if(!EmailValidator.validate(this.state.enquiryEmail)){
            enquiryEmailErrorMessage = <h4 className="error">Please use a valid email</h4>
        }

        if (!this.state.enquiryName) {
            enquiryNameErrorMessage = <h4 className="error">Please enter your name</h4>
        } else if (this.state.enquiryName.trim().length < 2) {
            enquiryNameErrorMessage = <h4 className="error">Please enter a longer name</h4>
        }

        if (/[^a-zA-Z -]/.test(this.state.name)) {
            enquiryNameErrorMessage  = <h4 className="error">Please enter a valid name</h4>
        }

        if (!this.state.enquiryData) {
            enquiryDataErrorMessage = <h4 className="error">Please enter your enquiry?</h4>
        }

        if (!this.state.enquiryPhone) {
            enquiryPhoneErrorMessage = <h4 className="error">Please enter a contact number</h4>
        }

        if (this.state.subject === "" || this.state.subject === "select") {
            enquirySubjectErrorMessage = <h4 className="error">Please enter your contact reason?</h4>
        }

        if (this.state.subject === "" || this.state.subject === "select") {
            enquirySubjectErrorMessage = <h4 className="error">Please enter your contact reason?</h4>
        }

        if (this.state.transportService === "Move" 
            || 
            this.state.transportService === "Delivery"
            || 
            this.state.transportService === "Disposal"
            || 
            this.state.transportService === "Clearance"
            ) 
        {
            if(this.state.enquiryCollectionAddress === ""){
                enquiryCollectionAddressErrorMessage = 
                <h4 className="error">
                    Please enter your collection Address?
                </h4>
            }
        }

        if (this.state.transportService === "Move" 
            || this.state.transportService === "Delivery"
            )
        {
            if(this.state.enquiryDeliveryAddress === ""){
                enquiryDeliveryAddressErrorMessage = 
                <h4 className="error">
                    Please enter your delivery Address?
                </h4>
            }
        }

        if (this.state.enquiryDate === "") {
            enquiryDateErrorMessage = <h4 className="error">Please select a date?</h4>
        }

        if(!enquiryNameErrorMessage 
            && !enquiryEmailErrorMessage 
            && !enquiryPhoneErrorMessage
            && !enquiryDataErrorMessage
            && !this.state.image1Error
            && !this.state.image2Error
            && !this.state.image3Error
            && !this.state.image4Error
            && !this.state.enquiryCollectionAddressErrorMessage
            && !this.state.enquiryDeliveryAddressErrorMessage
            && !this.state.enquiryDateErrorMessage
            ){
            
            let fd = new FormData();
            fd.append('enquiryName', this.state.enquiryName);
            fd.append('enquiryEmail', this.state.enquiryEmail);
            fd.append('enquiryPhone', this.state.enquiryPhone);
            fd.append('subject', this.state.subject ? this.state.subject : subject);
            fd.append('enquiryData', this.state.enquiryData);
            fd.append('transportService', this.state.transportService);
            fd.append('enquiryCollectionAddress', this.state.enquiryCollectionAddress);
            fd.append('enquiryDeliveryAddress', this.state.enquiryDeliveryAddress);
            fd.append('enquiryDate', this.state.enquiryDate ? this.state.enquiryDate.toLocaleDateString() : "");

            if(this.state.image1File){
                fd.append('newImage1', this.state.image1File, this.state.image1File.name);
            }
            if(this.state.image2File){
                fd.append('newImage2', this.state.image2File, this.state.image2File.name);
            }

            if(this.state.image3File){
                fd.append('newImage3', this.state.image3File, this.state.image3File.name);
            }

            if(this.state.image4File){
                fd.append('newImage4', this.state.image4File, this.state.image4File.name);
            }

            this.setState({
                loader: <Loader />,
                sendingMessageAlert: <p>Submitting your enquiry. Please Wait.</p>
            })

            Axios.post(CONST.BASE_URL + '/api/new-enquiry', fd).then(response =>{
                this.setState({
                    enquiryName: "",
                    enquiryNameErrorMessage: "",
                    enquiryEmail: "",
                    enquiryEmailErrorMessage: "",
                    enquiryPhone: "",
                    enquiryPhoneErrorMessage: "",
                    subject: "",
                    enquiryCollectionAddress: "",
                    enquiryCollectionAddressErrorMessage: "",
                    enquiryDeliveryAddress: "",
                    enquiryDeliveryAddressErrorMessage: "",
                    enquiryDate: "",
                    enquiryDateErrorMessage: "",
                    enquiryData: "",
                    enquiryDataErrorMessage: "",
                    image1File: "",
                    image1Preview: "",
                    image1Error: "",
                    image2File: "",
                    image2Preview: "",
                    image2Error: "",
                    image3File: "",
                    image3Preview: "",
                    image3Error: "",
                    image4File: "",
                    image4Preview: "",
                    image4Error: "",
                    loader: "",
                    sendingMessageAlert: "",
                    uploadImagePage: true,
                    messageSent: true,
                })
            })
        } else {
            this.setState({
                enquiryNameErrorMessage: enquiryNameErrorMessage,
                enquiryEmailErrorMessage: enquiryEmailErrorMessage,
                enquiryPhoneErrorMessage: enquiryPhoneErrorMessage,
                enquiryDataErrorMessage: enquiryDataErrorMessage,
                enquirySubjectErrorMessage: enquirySubjectErrorMessage,
                enquiryCollectionAddressErrorMessage: enquiryCollectionAddressErrorMessage,
                enquiryDeliveryAddressErrorMessage: enquiryDeliveryAddressErrorMessage,
                enquiryDateErrorMessage: enquiryDateErrorMessage
            })
        }
    }

    getData = (imageNumber, val, imageNumberPreviewUrl, imagePreviewUrl ,imageNumberError, imageError) => {
        this.setState({
            [imageNumber]: val,
            [imageNumberError]: imageError,
            [imageNumberPreviewUrl]: imagePreviewUrl,
        })
    }

    uploadImagePageHandler = () => {
        this.setState({
            uploadImagePage: !this.state.uploadImagePage
        })
    }

    flashMessageRemoveSavedMessaegHandler = () => {
        this.setState({
            messageSent: false
        })
    }

    toggleProjectsShownHandler = () => {
        this.setState({
            projectsShown: !this.state.projectsShown
        })
    }

render(){

    let privacyPolicyModal = "";

    let sideDrawer =    <SideDrawer 
                            open={this.state.showSideDrawer} 
                            clicked={this.sideDrawerToggleHandler}
                            toggleProjectsShownHandler={this.toggleProjectsShownHandler}
                            projectsShown={this.state.projectsShown}
                        />;

    // Prevent scrolling if menu open
    if(this.state.showSideDrawer){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    if(this.state.showPrivacyPolicyModal){
        privacyPolicyModal =    <PrivacyPolicyModal
                                    toggleCookiePolicyModal={this.toggleCookiePolicyModal}
                                />;
    }
    
    return (
        <div className='Layout'>
            {privacyPolicyModal}
            {this.state.redirectOnChoosingSellToRenewal}
            <Toolbar    
                menu={this.state.menu} 
                menuToggleHandler={this.sideDrawerToggleHandler} 
                showSideDrawer={this.state.showSideDrawer}
                clicked={this.sideDrawerToggleHandler}
                toggleProjectsShownHandler={this.toggleProjectsShownHandler}
                projectsShown={this.state.projectsShown}
            />
            {sideDrawer}
            <ParallaxProvider>
                <Routes>
                    <Route path='/' element={<LandingPage changeSubjectHandler={this.changeSubjectHandler} subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path='/renewal-shop' element={<RenewalShop subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-hub" exact element={<RenewalHub subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-tech" exact element={<RenewalTech subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-transport" exact element={<RenewalTransport changeSubjectHandler={this.changeSubjectHandler} subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-impact" exact element={<RenewalImpact subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-check" exact element={<RenewalCheck changeSubjectHandler={this.changeSubjectHandler} subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/cookie-policy" exact element={<CookiesPolicy />} />
                    <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
                    <Route path="/sell-your-items-through-renewal-hub" exact element={
                        <SellYourItemsThroughRenewalHub 
                            image1File={this.state.image1File}
                            image1Preview={this.state.image1Preview}
                            image1Error={this.state.image1Error}
                            image2File={this.state.image2File}
                            image2Preview={this.state.image2Preview}
                            image2Error={this.state.image2Error}
                            image3File={this.state.image3File}
                            image3Preview={this.state.image3Preview}
                            image3Error={this.state.image3Error}
                            image4File={this.state.image4File}
                            image4Preview={this.state.image4Preview}
                            image4Error={this.state.image4Error}
                            checkIfSellThroughRenewlHubHandler={this.checkIfSellThroughRenewlHubHandler}
                            changeHandler={this.changeHandler}
                            getData={this.getData}
                            loader={this.state.loader}
                            uploadImagePageHandler={this.uploadImagePageHandler}
                            uploadImagePage={this.state.uploadImagePage}
                            uploadedImagesValidationHandler={this.uploadedImagesValidationHandler}
                            enquiryName={this.state.enquiryName}
                            enquiryNameErrorMessage={this.state.enquiryNameErrorMessage}
                            enquiryEmail={this.state.enquiryEmail}
                            enquiryEmailErrorMessage={this.state.enquiryEmailErrorMessage}
                            enquiryPhone={this.state.enquiryPhone}
                            enquiryPhoneErrorMessage={this.state.enquiryPhoneErrorMessage}
                            enquiryData={this.state.enquiryData}
                            enquiryDataErrorMessage={this.state.enquiryDataErrorMessage}
                            messageSent={this.state.messageSent}
                            sendingMessageAlert={this.state.sendingMessageAlert}
                            flashMessageRemoveSavedMessaegHandler={this.flashMessageRemoveSavedMessaegHandler}
                            redirectRemovalHandler={this.redirectRemovalHandler}
                            redirectOnChoosingSellToRenewal={this.state.redirectOnChoosingSellToRenewal}
                            placeHolderName={this.state.placeHolderName}
                            placeHolderEmail={this.state.placeHolderEmail}
                            placeHolderPhone={this.state.placeHolderPhone}
                            placeHolderSellQuery={this.state.placeHolderSellQuery}
                        />} 
                    />
                    <Route path="/contact-form" exact element={
                        <ContactForm 
                            subjects={this.state.subjects} 
                            subject={this.state.subject}
                            enquirySubjectErrorMessage={this.state.enquirySubjectErrorMessage}
                            transportServices={this.state.transportServices}
                            transportService={this.state.transportService}
                            enquiryCollectionAddress={this.state.enquiryCollectionAddress}
                            enquiryCollectionAddressErrorMessage={this.state.enquiryCollectionAddressErrorMessage}
                            enquiryDeliveryAddress={this.state.enquiryDeliveryAddress}
                            enquiryDeliveryAddressErrorMessage={this.state.enquiryDeliveryAddressErrorMessage}
                            startDate={this.state.startDate}
                            enquiryDate={this.state.enquiryDate}
                            enquiryDateErrorMessage={this.state.enquiryDateErrorMessage}
                            enquiryName={this.state.enquiryName}
                            enquiryNameErrorMessage={this.state.enquiryNameErrorMessage}
                            enquiryEmail={this.state.enquiryEmail}
                            enquiryEmailErrorMessage={this.state.enquiryEmailErrorMessage}
                            enquiryPhone={this.state.enquiryPhone}
                            enquiryPhoneErrorMessage={this.state.enquiryPhoneErrorMessage}
                            enquiryData={this.state.enquiryData}
                            enquiryDataErrorMessage={this.state.enquiryDataErrorMessage}
                            messageSent={this.state.messageSent}
                            sendingMessageAlert={this.state.sendingMessageAlert}
                            loader={this.state.loader}
                            changeHandler={this.changeHandler}
                            dateChangeHandler={this.dateChangeHandler}
                            submitContactFormHandler={this.submitContactFormHandler}
                            flashMessageRemoveSavedMessaegHandler={this.flashMessageRemoveSavedMessaegHandler}
                            redirectRemovalHandler={this.redirectRemovalHandler}
                            redirectOnChoosingSellToRenewal={this.state.redirectOnChoosingSellToRenewal}
                            placeHolderName={this.state.placeHolderName}
                            placeHolderEmail={this.state.placeHolderEmail}
                            placeHolderPhone={this.state.placeHolderPhone}
                            placeHolderCollectionAddress={this.state.placeHolderCollectionAddress}
                            placeHolderDeliveryAddress={this.state.placeHolderDeliveryAddress}
                            placeHolderCollectionAndDeliveryItems={this.state.placeHolderCollectionAndDeliveryItems}
                            placeHolderQuery={this.state.placeHolderQuery}
                            placeHolderTransportQuery={this.state.placeHolderTransportQuery}
                        />} 
                    />
                </Routes>
            </ParallaxProvider>
            <Footer />
        </div>
      )
}
}

export default Layout