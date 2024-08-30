import { FaBars } from "react-icons/fa";
import styled from "styled-components";

// Estiliza o botão de alternância da barra de navegação.
const CNavBarToggle = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavBarToggle = ({ size, color, isNavBarOpen, setIsNavBarOpen }) => {

    // Alterna a visibilidade da barra de navegação.
    const toggleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
    };

    return(
    <CNavBarToggle onClick={toggleNavBar}>
        <FaBars size={size} color={color} />
    </CNavBarToggle>
    )
}

export default NavBarToggle;