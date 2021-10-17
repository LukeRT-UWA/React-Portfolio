import React from "react";
import NavTabs from "./NavTabs"

function Header() {
  return (
<nav class="navbar navbar-expand-lg py-4 navbar-dark bg-dark d-flex justify-content-around">
  <a class="navbar-brand" href="#"><h1>Luke Thompson</h1></a>
    <NavTabs />
</nav>
  );
}


export default Header;