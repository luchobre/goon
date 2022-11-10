import React from "react";
import { NavbarWrapper } from "./styles/NavbarStyles";
import "./styles.css";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#" className="links">VUELOS</a>
      <a href="#" className="links">HOTELES</a>
      <a href="#" className="links">PAQUETES</a>
      <a href="#" className="links">TRASLADOS</a>
    </NavbarWrapper>
  );
}

export default Navbar;
