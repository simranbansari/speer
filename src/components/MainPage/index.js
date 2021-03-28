import React from 'react';
import BurgerMenu from "../UI/BurgerMenu";
import PricingPerks from "../Pricing/PricingPerks";
import "./index.css";

const Pricing = () => {

    const PricingPerksData = [
        {
            pricingName: "Subscription Payment Model", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#D34848",
            contentColor: "#FFFFFF",
        },{
            pricingName: "No Fee Cancelation Policy", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#1FE1E9",
            contentColor: "#FFFFFF",
        },{
            pricingName: "Subscription Payment Model", 
            pricingContent: "No commitment, cancel anytime. Never worry about forgetting a payment again!", 
            themeColor: "#FFB33F",
            contentColor: "#FFFFFF",
        }
    ]

    return (
        <div>
            <section>
                
            </section>
            <section className="pricingPerksSection">
                <div>
                    <BurgerMenu themeColor={"#333333"} position={1}/>
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