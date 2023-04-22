import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          Made with <span class="heart">&#10084;</span> by Ben
        </p>
        <ul className="socials">
          
          {/* <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li> */}
          <li>
            <a href="https://github.com/BenBasilTomy">
              <FaGithub size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/ben-basil-tomy-5533b9218">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      
    </footer>
  );
};

export default footer;
