import React from 'react';
import "./PricingPerks.css";

const PricingChoose = ({pricingName, pricingContent, themeColor, contentColor}) => {

    return (
        <div className="PricingPerksContainer">
            <div className="PricingPerksUnderline" style={{color: themeColor}}/>
            <div className="PricingPerksName" style={{color: themeColor}}>{pricingName}</div>
            <div className="PricingPerksContent" style={{color: contentColor}}>{pricingContent}</div>
        </div>
    );
};



export default PricingChoose;