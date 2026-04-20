import React from 'react';
import Navbar from '../Componant/Shared/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componant/Shared/Footer/Footer';

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;