import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PortfolioContainer from "./Components/PortfolioContainer";
// import NavTabs from './NavTabs';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Blog from './Components/pages/Blog';
import Contact from './Components/pages/Contact';






function App() {

  const [currentPage, setCurrentPage] = useState('Home');

// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'Home') {
    return <Home />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Blog') {
    return <Blog />;
  }
  return <Contact />;
};

const handlePageChange = (page) => setCurrentPage(page);


  return <div>
  <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
  <PortfolioContainer renderPage={renderPage} />
  <Footer />

  </div>


}

export default App;
