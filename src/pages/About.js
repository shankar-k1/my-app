import React from "react";
import "./About.css";
import ReduxIcon from "../assets/redux.png";
import HTML from "../assets/html.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import PostMan from "../assets/postman.png";
import MySql from "../assets/mysqll.png";
import SpringBoot from "../assets/springboot.png";
import Teams from "../assets/TEAMS.png";
import Bitbucket from "../assets/bitbucket.png";
import Discord from "../assets/discord.png";

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">About Me</h2>
      <p className="paragraph about-para">
        Experience in solving business users issues. Willingness to take on
        added responsibilities to meet team goals. Enthusiastic, and looking
        forward to contribute to team success through hard work, time management
        and team work..
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/1mG33AtNixGqdnQYOsyyfct2SnF1BacGa/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>

        <div className="skill">
          <img src={BootStrap} alt="" />
          <p>Bootstrap</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={SpringBoot} alt="" />
          <p>SpringBoot</p>
        </div>
        <div className="skill">
          <img src={MySql} alt="" />
          <p>MySQL</p>
        </div>
      </div>
      <h2 className="skill-title">Git</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={Bitbucket} alt="" />
          <p>Bitbucket</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>

        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Discord} alt="" />
          <p>Discord</p>
        </div>
        <div className="skill">
          <img src={Teams} alt="" />
          <p>Teams</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Critical Thinking</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Teamwork</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Creativity</p>

        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Emotional Intelligence</p>
        <p className="soft-skill">Adaptability</p>
      </div>
    </div>
  </section>
);

export default About;
