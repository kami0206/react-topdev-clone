import React from "react";
import NavTop from "./nav-top"; // Import NavTop component
import NavBot from "./nav-bot"; // Import NavBot component

function NavBar() {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <NavTop />
      </div>
      <NavBot />
    </div>
  );
}

export default NavBar;
