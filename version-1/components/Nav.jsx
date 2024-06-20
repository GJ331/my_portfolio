import React from "react";
import NavLink from "./NavLink";

const Nav = () => (
  <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
    <div className="container mx-auto">
      <NavLink />
    </div>
  </nav>
);

export default Nav;
