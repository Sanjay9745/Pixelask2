import React from "react";
import { Link } from "react-router-dom";
import {FaLinkedin,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";
import { animateScroll as scroll } from 'react-scroll';
function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <div className="footer" id="contact">
        <h2>Contact</h2>
        <div className="content">
          <div className="email">
            <p>jsdfhkshf@gmail.com</p>
            <ul>
                <li>
                    <Link href="#"><FaLinkedin/></Link>
                </li>
                <li>
                    <Link href="#"><FaInstagram/></Link>
                </li>
                <li>
                    <Link href="#"><FaYoutube/></Link>
                </li>
                <li>
                    <Link href="#"><FaTwitter/></Link>
                </li>
            </ul>
          </div>
          <div className="features">
            <h3>Features Info</h3>
            <ul>
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
                <Link to="/terms-and-conditions" smooth onClick={scrollToTop}>Terms And Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" smooth onClick={scrollToTop}>Privacy And Policy</Link>
              </li>
            </ul>
          </div>
        </div>
 
    </div>
    </>
  );
}

export default Footer;
