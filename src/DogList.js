import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"

async function fetchDogs() {
  const res = await fetch("http://localhost:5001/dogs");
  const data = await res.json();
  return data;
}


function DogList({ dogData, getDogs }) {

  async function getDogData() {
    if (dogData.length === 0) {
      const dogs = await fetchDogs();
      getDogs(dogs);
    }
  }

  getDogData();

  return (
    <div className="DogList">
      {dogData.length !== 0
        ? dogData.map(({ name, age, src }) => {
          return (
            <div className="DogList-dog" key={name}>
              <Link to={`/dogs/${name}`}><h3 className="DogList-dog-name">{name}</h3></Link>
              <p>Age: {age}</p>
              <Link to={`/dogs/${name}`}>
              <img
                className="DogList-pic"
                src={`/${src}.jpg`}
                alt={name} />
                </Link>
              <hr></hr>
            </div >
          );
        })
        : "Loading..."
      }
    </div>
  );
}

export default DogList;
