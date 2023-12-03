import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        BREW <br />
        COFFEE
        <br /> CHAT
      </h1>
      <p className="footer-text">&copy; 2023 Shankara Narayanan K</p>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Live Streaming</p>
        <p>Programming</p>
        <p>React</p>
        <p>Springboot</p>
      </div>

      <hr />

      <h3>MINDING A PROJECT?</h3>
      <button className="hire-me">
        <a href="mailto:fiz@fizx.xyz">Contact Me</a>
      </button>
      <p>
        <a href="https://ko-fi.com/criedfizcken">
          {" "}
          <img
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            height="50"
            width="210"
            alt="criedfizcken"
          />
        </a>
      </p>
      <hr></hr>
      <div className="social-icons">
        <a
          href="https://github.com/shankar-k1"
          target="_blank"
          rel="noreferrer"
        >
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

      <hr />
    </div>
  </div>
);

export default Contact;
