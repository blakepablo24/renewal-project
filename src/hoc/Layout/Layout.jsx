import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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

class Layout extends Component{

    state = {
        showSideDrawer: false,
        menu: false,
        subjects: ["Renewal Hub", "Renewal Tech", "Renewal Impact", "Renewal Building Protocols", "Items To Sell", "Other"],
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
        imageFile: "",
        imageError: "",
        loader: ""
    }

    sideDrawerToggleHandler = (nav) => {
        // if(nav === "nav"){
        //     FUNCTIONS.scrollToTop();
        // }
        this.setState({
            showSideDrawer: !this.state.showSideDrawer,
            menu: !this.state.menu
        })
    }

    changeHandler = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
            enquiryNameErrorMessage: "",
            enquiryEmailErrorMessage: "",
            enquiryDataErrorMessage: "",
            enquiryPillarErrorMessage: "",
            imageError: ""
        });
    }

    submitContactFormHandler = () => {
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
            && !this.state.imageError
            ){
            let fd = new FormData();
            fd.append('enquiryName', this.state.enquiryName);
            fd.append('enquiryEmail', this.state.enquiryEmail);
            fd.append('subject', this.state.subject);
            fd.append('enquiryData', this.state.enquiryData);

            if(this.state.imageFile){
                fd.append('newImage', this.state.imageFile, this.state.imageFile.name);
            }

            this.setState({
                loader: <Loader />
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
                    imageFile: "",
                    loader: "",
                    messageSent: true,
                })
            }).catch(error => {
                if (error) {
                    this.setState({
                        loader: "",
                        imageError: <div className='error'>{error.response.data.errors[Object.keys(error.response.data.errors)]}</div>
                    })
                }
              })
        } else {
            this.setState({
                enquiryNameErrorMessage: enquiryNameErrorMessage,
                enquiryEmailErrorMessage: enquiryEmailErrorMessage,
                enquiryDataErrorMessage: enquiryDataErrorMessage,
                enquirySubjectErrorMessage: enquirySubjectErrorMessage
            })
        }
    }

    getData = (val, imageError) => {
        this.setState({
            imageFile: val,
            imageError: imageError
        })
    }

render(){

    let sideDrawer =    <SideDrawer 
                            open={this.state.showSideDrawer} 
                            clicked={this.sideDrawerToggleHandler} 
                        />;

    // Prevent scrolling if menu open
    if(this.state.showSideDrawer){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    return (
        <div className='Layout'>
            <Toolbar    
                menu={this.state.menu} 
                menuToggleHandler={this.sideDrawerToggleHandler} 
                showSideDrawer={this.state.showSideDrawer} 
            />
            {sideDrawer}
            <ParallaxProvider>
                <Routes>
                    <Route path='/' element={<LandingPage subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-hub" exact element={<RenewalHub subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-tech" exact element={<RenewalTech subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-impact" exact element={<RenewalImpact subjects={this.state.subjects} subject={this.state.subject} />} />
                    <Route path="/renewal-building-protocols" exact element={<RenewalBuildingProtocols subjects={this.state.subjects} subject={this.state.subject} />} />
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
                            imageFile={this.state.imageFile}
                            imageError={this.state.imageError}
                            submitContactFormHandler={this.submitContactFormHandler}
                            changeHandler={this.changeHandler}
                            getData={this.getData}
                            loader={this.state.loader}
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