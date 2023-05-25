
import { HashLink} from 'react-router-hash-link';
import "../styles/style.css";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
return (
    <div>
      <div
        className="navbar">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
    <input type="checkbox" id="check" />
        <nav >
          <ul className="nav-bar">
            <li>
              <Link to="/" smooth onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/about" smooth onClick={scrollToTop}>About</Link>
            </li>
            <li>
              <Link to="/work" smooth onClick={scrollToTop}>Work</Link>
            </li>
            <li>
              <HashLink to="#contact" smooth onClick={scrollToTop}>Contact</HashLink>
            </li>
          </ul>
        </nav>
 
 <label for="check">  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#fff"
        
          className="bi bi-list toggle-icon"
          viewBox="0 0 16 16"
        
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg></label>
        

        

      </div>
    </div>
  );
}

export default Navbar;
