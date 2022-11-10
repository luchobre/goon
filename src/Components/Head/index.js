import React, { useState } from "react";
import { HeaderWrapper } from "./styles/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import logo from ".//img/logo1.png";
import carrito from ".//img/carrito.png";
import "./styles.css";

function Header({ setShowCart }) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="containerNavbar">
            <HeaderWrapper>
                <img src={logo} alt="logo" width="100" height="100" />
                <Navbar open={open} />
                <button
                    onClick={() => {
                        setShowCart(true);
                        if (typeof window != "undefined" && window.document) {
                            document.body.style.overflow = "hidden";
                        }
                    }}>
                    <img src={carrito} alt="logo" width="80" height="70" />
                </button>
                <MenuButton open={open} handleClick={handleClick} />
            </HeaderWrapper>
        </div>
    );
}

export default Header;
