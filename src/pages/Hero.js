import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import Imu from "../assets/IMG_8556.jpg";

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">hELLO. i am K, Shankara Narayanan </h2>

        <h3 className="tagline">
          I do AR, Fast Learner, Ui/Ux, Photography and Full stack dev.
        </h3>
        <p className="paragraph">
          I'm passionate about Computer science , Organised, Self-Motivated and
          Hard working candidate with 1.5 years of experience in production
          support.
        </p>
        <div className="hero-btns">
          <button className="hire-me">
            <a
              href="https://drive.google.com/file/d/1jUhLyp8Ww0NMzZK4gPTCoL_KMuQfd8eC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Get My CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              Say Hello
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="Fiz" className="hero-image" />
    </div>
    <div>
      <p align="left">
        {" "}
        <img
          src="https://komarev.com/ghpvc/?username=itsfiz&label=Profile%20views&color=ce3636&style=flat"
          alt="itsfiz"
        />{" "}
      </p>
    </div>
    <div className="social-icons">
      <a href="https://github.com/shankar-k1" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/shankara-narayanan-k-986667167/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        href="https://www.twitter.com/criedfizcken"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-twitter" />
      </a>
      <a
        href="https://www.youtube.com/@justexplorewithme8401"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube" />
      </a>
    </div>
  </div>
);

export default Hero;
