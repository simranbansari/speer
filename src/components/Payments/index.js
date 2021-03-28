import React from 'react';
import BurgerMenu from "../UI/BurgerMenu";
import "./index.css";

const Payments = () => {

    return (
        <div className="paymentsContainer">
            <div>
                <BurgerMenu />
            </div>
            <div className="paymentTitle">PAYMENT</div>
            <div className="paymentBody">
                <div>
                    <div className="paymentSubtitle">1. Select your plan</div>
                    <ul>
                        <li>BASIC</li>
                        <li>ADVANCE</li>
                        <li>PRO</li>
                    </ul>
                </div>
                <div>
                    <div className="paymentSubtitle">2. Billing Information</div>
                </div>
                <div>
                    <div className="paymentSubtitle">3. Credit Card Information</div>
                </div>
            </div>
            <div>
                <div className="paymentAgreement">By continuing, I acknowledge that I’ve read and agree to the <span className="paymentPurpleWords">Terms of Service</span> &amp; <span className="paymentPurpleWords">Privacy Policy.</span></div>
                <button>DOWNLOAD</button>
            </div>
        </div>
    );
};



export default Payments;