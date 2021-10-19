import React from "react";
import NavTabs from "./NavTabs"

function Header({ currentPage, handlePageChange }) {
  return (
<nav className="navbar navbar-expand-lg py-4 navbar-dark bg-dark d-flex justify-content-around">
  <h1>Luke Thompson</h1>
    <NavTabs handlePageChange={handlePageChange} currentPage={currentPage}/>
</nav>
  );
}


export default Header;