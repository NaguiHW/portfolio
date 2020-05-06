import React from 'react';
import lexusAppointment from '../assets/images/lexus-appointment.png';
import bookstore from '../assets/images/bookstore.png';
import todoApp from '../assets/images/todo-app.png';
import '../assets/styles/Projects.scss';

const Projects = () => (
  <div className="projects-container">
    <h1>My Projects</h1>
    <div className="projects-area">
      <div className="project">
        <img src={lexusAppointment} alt="Lexus Appointment" />
        <h3>Lexus Appointment</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>React</h5>
          <h5>Ruby on Rails</h5>
        </div>
        <div className="links">
          <a href="https://try-lexus.web.app/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe" />
            Demo
          </a>
          <a href="https://github.com/NaguiHW/try-lexus" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
            Code
          </a>
        </div>
      </div>
      <div className="project">
        <img src={bookstore} alt="Bookstore" />
        <h3>Bookstore</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>React</h5>
          <h5>Jest</h5>
        </div>
        <div className="links">
          <a href="https://bookstore-467b1.web.app/" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe" />
            Demo
          </a>
          <a href="https://github.com/NaguiHW/bookstore" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
            Code
          </a>
        </div>
      </div>
      <div className="project">
        <img src={todoApp} alt="To Do App" />
        <h3>Todo App</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>Javascript</h5>
        </div>
        <div className="links">
          <a href="https://raw.githack.com/NaguiHW/to-do-list/release/dist/index.html" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe" />
            Demo
          </a>
          <a href="https://github.com/NaguiHW/to-do-list" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
            Code
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
