import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {

  return (
    <div className="Nav">
      {dogs.map(dog => <NavLink to={`/dogs/${dog}`} key={dog}>{dog}</NavLink>)}
    </div>
  );
}

export default Nav;
