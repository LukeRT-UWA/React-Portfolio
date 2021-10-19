import React from 'react';
// import NavTabs from './NavTabs';
// import Home from './pages/Home';
// import About from './pages/About';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';

const styles = {
  pageHeightStyle: {
    minHeight: '600px'
  }
}

export default function PortfolioContainer({renderPage}) {


  return (
    <div style={styles.pageHeightStyle}>
      {renderPage()}
    </div>
  );
}