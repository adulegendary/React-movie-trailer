import { Link } from "react-router-dom";
import "../css/Navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-brand">Movie App</h1>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">
                        <button className="nav-button">Home</button>
                    </Link>
                    <Link to="/favorite" className="nav-link">
                        <button className="nav-button">Favorites</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
