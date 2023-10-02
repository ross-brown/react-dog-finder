import React from "react";
import { useParams } from "react-router-dom";

function DogDetails() {
  const { name } = useParams();



  return (
    <p>DogDetails for {name}</p>
  );
}

export default DogDetails;
