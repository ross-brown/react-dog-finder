import DogList from "./DogList";
import { MemoryRouter } from "react-router-dom";
import { render, screen, debug, container } from "@testing-library/react";

describe("DogList", function(){
  const sampleData = [
    {
      "name": "Whiskey",
      "age": 5,
      "src": "whiskey",
      "facts": [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      "name": "Duke",
      "age": 3,
      "src": "duke",
      "facts": [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      "name": "Perry",
      "age": 4,
      "src": "perry",
      "facts": [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]

  test("should render without crashing", function(){
    render(<MemoryRouter>
      <DogList dogData={sampleData}/>
    </MemoryRouter>)
  });

  test("should render a div for each dog", function(){
    const { container } = render(<MemoryRouter>
      <DogList dogData={sampleData}/>
    </MemoryRouter>)

    const dogDivs = container.querySelectorAll(".DogList-dog");
    expect(dogDivs.length).toBe(3);
  });

});