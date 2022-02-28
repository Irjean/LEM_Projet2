import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/logo.png";

function Header() {
    return(
        <header>
            <img src={logo} alt="logo" width="50" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/Favorites"><li>Favorites</li></Link>
            </ul>
        </header>
    )
}

export default Header;