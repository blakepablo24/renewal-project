import React, { useEffect } from 'react';
import classes from './PrivacyPolicy.module.css';
import FUNCTIONS from '../../functions/functions';

export default function PrivacyPolicy(){

    useEffect(() => {
        FUNCTIONS.scrollToTop();
      });

    return(
        <div className={classes.PrivacyPolicy}>
            <div className='pillar-title'>
                <h1>Privacy Policy</h1>
            </div>
            <p className='policy-paragraph'>We take your privacy very seriously and we ask that you read this privacy policy carefully as it contains important information on who we are, how and why we collect, store, use and share personal information, your rights in relation to your personal information and how to contact us and supervisory authorities in the event you have a complaint.</p>
            <h3 className='policy-title'>Who We Are</h3>
            <p className='policy-paragraph'>Renewal Project Limited (“we”, “us”) is the operator of the website www.renewal-project.com. We collect, use and are responsible for certain information about you. When we do so, we are regulated under the General Data Protection Regulation which applies across the European Union (including the United Kingdom) and we are responsible as ‘controller’ of that personal information for the purposes of those laws. The person responsible for how we handle personal information is Jasper Taylor, jasper-taylor@renewal-project.co.uk .</p>
            <h3 className='policy-title'>The Personal Information we Collect and Use</h3>
            <h3 className='policy-title'>Personal information provided by you</h3>
            <p className='policy-paragraph'>In the course of operating our business, we collect personal information when you provide it to us, such as your name, postal address, email address, phone numbers, date of birth, emergency contact details and payment details.
            We also collect personal information from you if you apply for a job with us or work for us for any period of time. In this context, personal information we gather may include: contact details, financial and payment details, details of education, qualifications and skills, marital status, nationality, NI number, job title, and CV.</p>
            <h3 className='policy-title'>Personal information provided by third parties</h3>
            <p className='policy-paragraph'>Occasionally we may receive information about you from other sources (such as credit reference agencies), which we will add to the information we already hold about you in order to help us provide services to you and to improve and personalise our service to you. If you apply for a job with us, we may receive information from the people who provide references.</p>
            <h3 className='policy-title'>Sensitive personal information</h3>
            <p className='policy-paragraph'>We will not usually ask you to provide sensitive personal information. We will only ask you to provide sensitive personal information if we need to for a specific reason, for example, if we believe you are having difficulty dealing with your account due to illness. If we request such information, we will explain why we are requesting it and how we intend to use it.</p>
            <p className='policy-paragraph'>Sensitive personal information includes information relating to your ethnic origin, political opinions, religious beliefs, whether you belong to a trade union, your physical or mental health or condition, sexual life, and whether you have committed a criminal offence. We will only collect your sensitive personal information with your explicit consent.</p>
            <h3 className='policy-title'>Children</h3>
            <p className='policy-paragraph'>We do not knowingly collect personal data relating to children under the age of 16. If you are a parent or guardian of a child under the age of 16 and think that we may have information relating to that child, please contact us. We will ask you to prove your relationship to the child but if you do so you may (subject to applicable law) request access to and deletion of that child’s personal data.</p>
            <h3 className='policy-title'>How and When Do We Collect Information from You?</h3>
            <p className='policy-paragraph'>We gather information directly from you face to face if you come to our site for information or to sign a storage agreement and over the telephone if you ring us to make an enquiry. We collect personal information via our website and mobile applications or ‘Apps’ and other technical systems. We collect this when you use our website or Apps to sign up to, participate in or receive a service from us, such as requesting a quote online or entering a live chat. Our website also uses cookies (see “Use of cookies” section below) and collects IP addresses (which means a number that can uniquely identify a specific computer or other device on the internet). We also collect personal information when you contact us, send us feedback or request a quote.</p>
            <p className='policy-paragraph'>We may monitor and record communications with you (such as telephone conversations and emails). We may do this for a number of reasons, such as to check the quality of our customer service, for training purposes, to prevent fraud or to make sure we are complying with legal requirements.</p>
            <p className='policy-paragraph'>If you visit our storage facility, some personal data may be collected from monitoring devices and systems such as closed circuit TV (CCTV) and door entry systems at the site.</p>
            <h3 className='policy-title'>Use of cookies</h3>
            <p className='policy-paragraph'>A cookie is a small text file which is placed onto your computer (or other electronic device such as a mobile telephone or tablet) when you use our website. We use cookies on our website. We do this to find out things such as the number of visitors to the various parts of the site. This information is only processed in a way which does not identify you individually. We use analysis software to look at IP addresses and cookies to improve your experience as a user of our website. We do not use this information to develop a personal profile of you. If we do collect personally identifiable information, we will be up front about this. We will make it clear when we collect personal information and will explain what we intend to do with it.</p>
            <p className='policy-paragraph'>You can set your browser not to accept cookies and the websites below tell you how to remove cookies from your browser. However, some of our website features may not function as a result..</p>
            <p className='policy-paragraph'>For further information on our use of cookies, please see our Website cookie policy.
            For further information on cookies generally visit www.aboutcookies.org or www.allaboutcookies.org.</p>
        </div>
    )
}