import React from 'react';
import lexusAppointment from '../assets/images/lexus-appointment.png';
import facebookClone from '../assets/images/facebook-clone.png';
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

        </div>
      </div>
      <div className="project">
        <img src={facebookClone} alt="Facebook Clone" />
        <h3>Lexus Appointment</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>Ruby on Rails</h5>
        </div>
        <div className="links">

        </div>
      </div>
      <div className="project">
        <img src={todoApp} alt="To Do App" />
        <h3>Lexus Appointment</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>Javascript</h5>
        </div>
        <div className="links">

        </div>
      </div>
      <div className="project">
        <img src={bookstore} alt="Bookstore" />
        <h3>Lexus Appointment</h3>
        <div className="technologies">
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>React</h5>
        </div>
        <div className="links">

        </div>
      </div>
    </div>
  </div>
);

export default Projects;
