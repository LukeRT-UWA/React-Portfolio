import React from "react";

function Header() {
  return (
<nav class="navbar navbar-expand-lg py-4 navbar-dark bg-dark d-flex justify-content-around">
  <a class="navbar-brand" href="#"><h1>Luke Thompson</h1></a>

  <div id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><h2>About me</h2></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h2>Portfolio</h2></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h2>Contact</h2></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><h2>Resume</h2></a>
      </li>
    </ul>
  </div>
</nav>
  );
}


export default Header;