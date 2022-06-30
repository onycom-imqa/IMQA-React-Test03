// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

// * import assets
import Logo from "./../../Assets/logo/phone-logo.svg";

// styled custom components
import { ButtonContainer } from "../StyledComponents/Button";
import { NavWrapper } from "../StyledComponents/Navbar";
import {useIMQA} from "imqa-react-sdk";

// export default class Navbar extends Component {
export default function Navbar() {
    const IMQARef = useIMQA();
    // render() {
    return (
        <div ref={IMQARef}>
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                {/* brand logo */}
                <Link to="/">
                    <img src={Logo} alt="phone logo" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li>
                        {/* brand name */}
                        <Link to="/" className="nav-link">
                            MOBILE SHOP / E-COMMERCE
                        </Link>
                    </li>
                </ul>

                {/* shopping cart */}
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        </div>
    );
    // }
}
