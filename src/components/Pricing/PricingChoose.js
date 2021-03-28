import React from 'react';
import "./PricingChoose.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

const PricingChoose = ({pricingName, pricingPeriod, pricingCost, pricingAdvs, themeColor}) => {

    return (
        <div className="PricingChooseContainer">
            <div className="PricingChooseName" style={{color: themeColor}}>{pricingName}</div>
            <div className="PricingChooseUnderline" style={{borderTopColor: themeColor}}/>
            <div className="PricingChoosePeriod" style={{color: themeColor}}>{pricingPeriod}</div>
            <div className="PricingChooseCost" style={{color: themeColor}}>${pricingCost}</div>
            {pricingAdvs?.map((advs, i)=>
                <div className="PricingChooseAdv" key={i}><MusicNoteIcon style={{fontSize: 30}}/>{advs}</div>
            )}
            <div><button  className="PricingChooseButton" style={{backgroundColor: themeColor}}>SELECT</button></div>
        </div>
    );
};



export default PricingChoose;