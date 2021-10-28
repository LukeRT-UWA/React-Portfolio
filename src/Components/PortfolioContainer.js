import React from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

const styles = {
  pageHeightStyle: {
    backgroundColor: "#f0f8ff"
  }
}

export default function PortfolioContainer({renderPage}) {


  return (
    <div className="vh-100" style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}