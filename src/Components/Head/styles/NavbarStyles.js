import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 50vh;  


  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: 50%;
    justify-content: center;
    // border-radius: 15px;
    }

  a {
    color: white;
    text-decoration: none;
    font-size: 120%;
  }

  @media only screen and (max-width: 624px) {
      color: white;
      backdrop-filter: blur(10px); 
  }
`;