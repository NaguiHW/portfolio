import React, { useEffect } from 'react';
import HomePage from '../components/HomePage';
import SideBar from '../components/SideBar';

const App = () => {
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const height = window.pageYOffset;
      const sidebar = document.getElementById('sidebar');
      sidebar.className = height >= 250 ? 'sidebar-scroll' : 'sidebar';
      console.log(height);
      console.log(sidebar);
    });
  });

  return (
    <>
      <SideBar />
      <HomePage />
      <HomePage />
      <HomePage />
    </>
  );
};

export default App;
