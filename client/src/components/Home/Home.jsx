import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade direction="right" triggerOnce>
          <h1>Hi I'm Vaman Kumar Tamarana</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "SAP SD Consultant | S/4HANA & ECC 6.0",
                  "Order-to-Cash & LE-TRA Specialist",
                  "RICEFW · IDoc/EDI · OData Integrations",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="button-for-action">
            <Link
              to="contactsection"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>
            
            {/* FIX: Points directly to the file inside the public directory root */}
            <div className="get-resume-button">
              <a href="/Vaman_SAP_SD_Resume.pdf" download="Vaman_SAP_SD_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
