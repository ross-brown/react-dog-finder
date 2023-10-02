import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {



  return (
    <div>
      {dogs.map(dog => <Link to={`/dogs/${dog}`}>{dog}</Link>)}
    </div>
  );
}

export default Nav;
