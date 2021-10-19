import React from "react";
import NavTabs from "./NavTabs"

function Header({ currentPage, handlePageChange }) {
  return (
<nav className="navbar py-4 navbar-dark bg-dark d-flex justify-content-around">
  <a className="navbar-brand" href="#"><h1>Luke Thompson</h1></a>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}


export default Header;