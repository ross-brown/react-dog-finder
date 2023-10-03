import React from "react";
import DogDetails from "./DogDetails";
import { useParams } from "react-router-dom";

function FilterDogs({ dogData }) {
  const { name } = useParams();
  const dog = dogData.find(d => d.name === name);

  return (
    <>
      <DogDetails dog={dog} />
    </>
  );
}

export default FilterDogs;
