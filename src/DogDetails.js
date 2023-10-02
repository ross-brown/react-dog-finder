import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogData }) {
  console.log("dogData is", dogData);
  const { name } = useParams();
  const { age, facts, src } = dogData.find(dog => dog.name === name);


  return (
    <div className="DogDetails" key={name}>
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <img
                className="DogDetails-pic"
                src={`/${src}.jpg`}
                alt={name} />
              <ul>
                {facts.map(fact => <li key={fact}>{fact}</li>)}
              </ul>
              <hr></hr>
            </div >
  );
}

export default DogDetails;
