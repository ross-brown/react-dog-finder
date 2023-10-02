import React from "react";

async function fetchDogs() {
  const res = await fetch("http://localhost:5001/dogs");
  const data = await res.json();
  return data;
}


function DogList({ dogData, getDogs }) {

  async function getDogData() {
    if (!dogData) {
      const dogs = await fetchDogs();
      getDogs(dogs);
    }
  }

  getDogData();

  return (
    <div className="DogList">
      {dogData
        ? dogData.map(({ name, age, facts }) => {
          return (
            <div className="DogList-dog" key={name}>
              <h3>{name}</h3>
              <p>Age: {age}</p>
              <img
                className="DogList-pic"
                src={`/${name.toLowerCase()}.jpg`}
                alt={name} />
              <ul>
                {facts.map(fact => <li key={fact}>{fact}</li>)}
              </ul>
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
