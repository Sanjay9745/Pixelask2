import React from "react";
import { Link } from "react-router-dom";
import {FaLinkedin,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";

function Footer() {
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions">Terms And Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy And Policy</Link>
              </li>
            </ul>
          </div>
        </div>
 
    </div>
    </>
  );
}

export default Footer;
