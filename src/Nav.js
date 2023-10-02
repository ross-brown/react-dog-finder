import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  console.log("dogs is ", dogs);

  return (
    <div className="Nav">
      {dogs.map(dog => <NavLink
                            to={`/dogs/${dog}`}>{dog}</NavLink>)}
    </div>
  );
}

export default Nav;
