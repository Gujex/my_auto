import React from 'react';
import logo from "../images/logo.png"
import classes from "./header.module.scss"
const Header = () => {
    return (
        <div className={classes.header} >
            <img src={logo}/>
        </div>
    );
};

export default Header;