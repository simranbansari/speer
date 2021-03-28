import React from 'react';
import BurgerMenu from "../UI/BurgerMenu";
import PricingChoose from "./PricingChoose";
import PricingPerks from "./PricingPerks";
import "./index.css";

const Pricing = () => {

    const PricingChooseData = [
        {
            pricingName: "BASIC", 
            pricingPeriod: "MONTHLY", 
            pricingCost: "9", 
            pricingAdvs: ["Very good", "Amazing", "Perfect job", "Love this", "It's so good", "Features"],
            themeColor: "#D24848"
        },{
            pricingName: "ADVANCED", 
            pricingPeriod: "YEARLY", 
            pricingCost: "9", 
            pricingAdvs: ["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so so good", "More features"],
            themeColor: "#FFB33F"
        },{
            pricingName: "PRO", 
            pricingPeriod: "YEARLY", 
            pricingCost: "9", 
            pricingAdvs: ["Very very good", "Even Amazing", "Perfect job", "Love this more", "It's so so good", "More features"],
            themeColor: "#1FE1E9"
        }
    ]

    const PricingPerksData = [
        {
            pricingName: "Subscription Payment Model", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#ffffff",
            contentColor: "#0B0B0B",
        },{
            pricingName: "No Fee Cancelation Policy", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#ffffff",
            contentColor: "#0B0B0B",
        },{
            pricingName: "Subscription Payment Model", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#ffffff",
            contentColor: "#0B0B0B",
        }
    ]

    return (
        <div>
            <section className="pricingBlackSection">
                <div>
                    <BurgerMenu themeColor="#ffffff" position={2}/>
                </div>
                <div className="pricingTitle">PRICING</div>
                <div className="pricingSubtitle">Test out our app today! Choose from three subscription Based payment models.</div>
                <div className="pricingChoosesContainer">
                    {PricingChooseData?.map((data, i) =>{
                        return(
                            <PricingChoose key={i}
                                        pricingName={data.pricingName}
                                        pricingPeriod={data.pricingPeriod}
                                        pricingCost={data.pricingCost}
                                        pricingAdvs={data.pricingAdvs}
                                        themeColor={data.themeColor}
                            />
                        )
                    }
                        
                        
                    )}
                    
                </div>
            </section>
            <section className="pricingRedSection">
                <div>
                    <BurgerMenu  themeColor="#D34848" position={2}/>
                </div>
                <div className="perksTitle">PERKS</div>
                <div className="perksContainer">
                    {PricingPerksData?.map((data, i) =>{
                        return(
                            <PricingPerks key={i}
                                        pricingName={data.pricingName}
                                        pricingContent={data.pricingContent}
                                        themeColor={data.themeColor}
                                        contentColor={data.contentColor}
                            />
                        )
                    }
                        
                        
                    )}
                    
                </div>
            </section>
        </div>
        
    );
};



export default Pricing;