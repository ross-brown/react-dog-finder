import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dog }) {
  const { name } = useParams();

  if (!dog) {
    return <Navigate to="/"/>
  }

  const { age, facts, src } = dog

  return (
    <div className="DogDetails" key={name}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <img
        className="DogDetails-pic"
        src={`/${src}.jpg`}
        alt={name} />
      <h4>Fun Facts about {name}!</h4>
      <ul className="DogDetails-facts">
        {facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
      <hr></hr>
    </div >
  );
}

export default DogDetails;
