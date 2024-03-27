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
import RenewalBuildingProtocols from '../../containers/RenewalBuildingProtocols/RenewalBuildingProtocols';
import ContactForm from '../../containers/ContactForm/ContactForm';
import EmailValidator from 'email-validator';
import Axios from 'axios';
import CONST from '../../constants/constants';
import Loader from '../../components/Ux/Loader/Loader';
import SellYourItemsThroughRenewalHub from '../../containers/SellYourItemsThroughRenewalHub/SellYourItemsThroughRenewalHub';
import RenewalShop from '../../containers/RenewalShop/RenewalShop';

class Layout extends Component{

    state = {
        showSideDrawer: false,
        menu: false,
        subjects: [
            "Renewal Hub",
            "Renewal Tech",
            "Renewal Impact",
            "Renewal Building Protocols",
            "Sell Items Through Renewal Hub",
            "Other",
            "Shop"
        ],
        subject: "",
        // Contact Form State
        enquirySubjectErrorMessage: "",
        enquiryName: "",
        enquiryNameErrorMessage: "",
        enquiryEmail: "",
        enquiryEmailErrorMessage: "",
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
        projectsShown: false
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
            enquiryDataErrorMessage: "",
            enquiryPillarErrorMessage: "",
            image1Error: "",
            image2Error: "",
            image3Error: "",
            image4Error: "",
            image5Error: "",
            image6Error: ""
        });
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
        let enquiryDataErrorMessage = "";
        let enquirySubjectErrorMessage = "";

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

        if (this.state.subject === "" || this.state.subject === "select") {
            enquirySubjectErrorMessage = <h4 className="error">Please enter your contact reason?</h4>
        }

        if(!enquiryNameErrorMessage 
            && !enquiryEmailErrorMessage 
            && !enquiryDataErrorMessage
            && !this.state.image1Error
            && !this.state.image2Error
            && !this.state.image3Error
            && !this.state.image4Error
            ){
            let fd = new FormData();
            fd.append('enquiryName', this.state.enquiryName);
            fd.append('enquiryEmail', this.state.enquiryEmail);
            fd.append('subject', this.state.subject ? !this.state.subject : subject);
            fd.append('enquiryData', this.state.enquiryData);

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
                sendingMessageAlert: <p>Compressing Images and submitting your enquiry. Please Wait.</p>
            })

            Axios.post(CONST.BASE_URL + '/api/new-enquiry', fd).then(response =>{
                this.setState({
                    enquiryName: "",
                    enquiryNameErrorMessage: "",
                    enquiryEmail: "",
                    enquiryEmailErrorMessage: "",
                    subject: "",
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
            }).catch(function (error) {
                if (error.response) {
                  // Request made and server responded
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            
              });
        } else {
            this.setState({
                enquiryNameErrorMessage: enquiryNameErrorMessage,
                enquiryEmailErrorMessage: enquiryEmailErrorMessage,
                enquiryDataErrorMessage: enquiryDataErrorMessage,
                enquirySubjectErrorMessage: enquirySubjectErrorMessage
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

    return (
        <div className='Layout'>
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
                    <Route path='/' element={<LandingPage subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path='/renewal-shop' element={<RenewalShop subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-hub" exact element={<RenewalHub subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-tech" exact element={<RenewalTech subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-impact" exact element={<RenewalImpact subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-building-protocols" exact element={<RenewalBuildingProtocols subjects={this.state.subjects} subject={this.state.subject} />} />
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
                            enquiryData={this.state.enquiryData}
                            enquiryDataErrorMessage={this.state.enquiryDataErrorMessage}
                            messageSent={this.state.messageSent}
                            sendingMessageAlert={this.state.sendingMessageAlert}
                            flashMessageRemoveSavedMessaegHandler={this.flashMessageRemoveSavedMessaegHandler}
                            redirectRemovalHandler={this.redirectRemovalHandler}
                            redirectOnChoosingSellToRenewal={this.state.redirectOnChoosingSellToRenewal}
                        />} 
                    />
                    <Route path="/contact-form" exact element={
                        <ContactForm 
                            subjects={this.state.subjects} 
                            subject={this.state.subject}
                            enquirySubjectErrorMessage={this.state.enquirySubjectErrorMessage}
                            enquiryName={this.state.enquiryName}
                            enquiryNameErrorMessage={this.state.enquiryNameErrorMessage}
                            enquiryEmail={this.state.enquiryEmail}
                            enquiryEmailErrorMessage={this.state.enquiryEmailErrorMessage}
                            enquiryData={this.state.enquiryData}
                            enquiryDataErrorMessage={this.state.enquiryDataErrorMessage}
                            messageSent={this.state.messageSent}
                            sendingMessageAlert={this.state.sendingMessageAlert}
                            loader={this.state.loader}
                            changeHandler={this.changeHandler}
                            submitContactFormHandler={this.submitContactFormHandler}
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