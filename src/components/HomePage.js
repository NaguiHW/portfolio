import React from 'react';
import image from '../assets/images/profile.jpg';
import '../assets/styles/HomePage.scss';

const HomePage = () => (
  <div className="home-page">
    <div className="image-container">
      <img src={image} alt="Kalib Hackin" />
    </div>
    <div className="bio">
      <h1>
        Kalib
        {' '}
        <span>Hackin</span>
      </h1>
      <div className="line" />
      <h3>Fullstack Developer</h3>
      <p>
        I am Kalb Hackin and I am a fullstack developer that use HTML,
        CSS, JavaScript, React, Redux, Ruby, Ruby on Rails.
      </p>
    </div>
  </div>
);

export default HomePage;
