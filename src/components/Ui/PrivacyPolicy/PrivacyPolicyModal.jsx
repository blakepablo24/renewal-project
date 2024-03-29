import React from 'react';
import classes from './PrivacyPolicyModal.module.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

export default function PrivacyPolicyModal(props){



    return(
        <Aux>
            <div className={classes.PrivacyPolicyModal}>
                <p>By using this website, you are agreeing to our <Link to={"/cookie-policy"}>cookie policy.</Link></p>
                <RxCross1 onClick={props.toggleCookiePolicyModal} />
            </div>
        </Aux>
    )
}