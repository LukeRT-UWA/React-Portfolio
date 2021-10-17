import React, { useState } from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

export default function PortfolioContainer({renderPage}) {


  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}