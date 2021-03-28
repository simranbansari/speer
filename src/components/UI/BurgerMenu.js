import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./BurgerMenu.css";

const BurgerMenu = ({themeColor, position}) => {
    const [open, setOpen] = useState(false)

    const handleMenuClicked = () => {
        setOpen(true)
    }

    const handleMenuOut = () => {
        setOpen(false)
    }

    return (
        <div>
            <div className={open? "burgerMenuOpen" : "burgerMenuClose"} onClick={handleMenuClicked}>
                <MenuIcon style={{fontSize: 48}}/><span>EXP|CON</span>
            </div>
            <div className={open? "burgerMenuBigOpen" : "burgerMenuBigClose"} onMouseOut={handleMenuOut}>
                <div className="burgerMenuOpenContent">
                    <MenuIcon style={{fontSize: 48, color: themeColor}}/><span style={{color: themeColor}}>EXP|CON</span>
                    <div>
                        <div style={{color: position === 1 ? themeColor : "#ffffff"}}>WHAT IS IT</div>
                        <div style={{color: position === 2 ? themeColor : "#ffffff"}}>PERKS</div>
                        <div style={{color: position === 3 ? themeColor : "#ffffff"}}>PRICING</div>
                    </div>
                </div>
                
            </div>
        </div>

        
    );
};



export default BurgerMenu;