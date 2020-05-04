/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '../assets/styles/SideBar.scss';

const SideBar = () => (
  <div className="sidebar" id="sidebar">
    <div className="content">
      <h3>Email</h3>
      <h5>naguihw@gmail.com</h5>
      <h3>Phone</h3>
      <h5>+507 6657-6486</h5>
      <h3>Find me on</h3>
      <div className="icons-area">
        <a href="https://twitter.com/HackinKalib"><i className="fab fa-twitter" /></a>
        <a href="https://github.com/NaguiHW"><i className="fab fa-github" /></a>
        <a href="https://www.linkedin.com/in/kalib-hackin-wilfred-325b2517a/"><i className="fab fa-linkedin" /></a>
      </div>
    </div>
  </div>
);

export default SideBar;
