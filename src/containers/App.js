import React, { useEffect } from 'react';
import HomePage from '../components/HomePage';
import SideBar from '../components/SideBar';
import Projects from '../components/Projects';

const App = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const height = window.pageYOffset;
      const sidebar = document.getElementById('sidebar');
      if (height >= 250) {
        sidebar.classList.add('sidebar-scroll');
      } else {
        sidebar.classList.remove('sidebar-scroll');
      }
    });
  });

  return (
    <>
      <SideBar />
      <HomePage />
      <Projects />
    </>
  );
};

export default App;
