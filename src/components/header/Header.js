import React from 'react';
import logo from "../../images/logo.png"
import classes from "./header.module.scss"
import {Container} from "react-bootstrap";

const Header = () => {
    return (<div className={classes.header}>
            <Container className="bg-white">
                <img src={logo}/>
            </Container>
        </div>);
};

export default Header;