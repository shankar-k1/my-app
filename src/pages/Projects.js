import React from "react";
import "./Projects.css";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // Manually define the project data
  const projectData = [
    {
      project_name: "To Do List",
      description:
        "ARespiratory is developed in collaboration with Faculty Medical & Health Science, UPM. This mobile application has Augmented Reality(AR) features to assist medical students in learning the anatomy and physiology of the respiratory system. \n This application has obtained copyright by MyIPO.",
      tech_stack: ["Unity", "Vuforia", "Blender", "Adobe XD"],
      source_link:
        "https://shankar-k1.github.io/JS-PRJ/todo%20list/https://shankar-k1.github.io/JS-PRJ/todo%20list/p",
    },
    {
      project_name: "EV",
      description:
        "The EV Mobile Application is a solution developed for Educity Village (EV) to address the growing demand for a reliable booking system. Traditional booking methods proved fragile and prone to errors, leading to the development of this user-friendly mobile application for space booking. The app caters to the needs of EV residents and guests, offering efficient booking for sports courts, spaces, pool tables, and BBQ pits.",
      tech_stack: ["Flutter", "Django", "MySQL", "Adobe XD"],
      source_link: "https://shankar-k1.github.io/JS-PRJ/countdown-timer/",
    },

    {
      image_url:
        "https://github.com/shankar-k1/JS-PRJ/blob/main/calculator/Screenshot%202023-12-03%20222423.png",
      project_name: "Calculator",
      description:
        "Cozyshop is an exciting and innovative ecommerce project that aims to redefine the online shopping experience. With a commitment to providing customers with top-quality products, outstanding service, and a seamless user experience.",
      tech_stack: ["HTML", "CSS", "JAVASCRIPT"],
      source_link: "https://shankar-k1.github.io/JS-PRJ/calculator/",
    },

    {
      image_url:
        "https://github.com/shankar-k1/JS-PRJ/blob/main/calculator/Screenshot%202023-12-03%20222423.png",
      project_name: "Calculator",
      description:
        "Cozyshop is an exciting and innovative ecommerce project that aims to redefine the online shopping experience. With a commitment to providing customers with top-quality products, outstanding service, and a seamless user experience.",
      tech_stack: ["HTML", "CSS", "JAVASCRIPT"],
      source_link:
        "https://shankar-k1.github.io/JS-PRJ/videobg%20using%20html/",
    },

    {
      image_url:
        "https://github.com/shankar-k1/JS-PRJ/blob/main/calculator/Screenshot%202023-12-03%20222423.png",
      project_name:
        " Human Disease Detection using Ensemble Learning and Deep Learning Techniques ",
      description:
        "The model built using custom ensemble learning algorithms and Deep Learning to predict the disease with accuracy, classified and deployed website for further contributions to the model by using various classification algorithms such as KNN, Decision Tree, Random Forest, predicted accuracy and classifies whether the image is infected",
      tech_stack: [
        "Machine Learning",
        "Jupyter",
        "Python",
        "Algorithms",
        "HTML",
        "CSS",
        "JAVASCRIPT",
      ],
      source_link: "https://shankar-k1.github.io/JS-PRJ/calculator/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">Featured Projects</h1>
      <p className="projects-para">Featuring my personal projects</p>
      <div className="projects-container">
        {projectData.map((project, id) => (
          <ProjectCard
            key={id}
            image={project.image_url}
            title={project.project_name}
            description={project.description}
            stacks={project.tech_stack}
            source_link={project.source_link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
