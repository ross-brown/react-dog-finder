import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Nav from './Nav';
import DogDetails from './DogDetails';
import DogList from './DogList';


function App() {
  const [dogData, setDogData] = useState([]);

  function getDogs(dogs) {
    setDogData(dogs);
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav dogs={dogData.map(dog => dog?.name)}/>
        <Routes>
          <Route element={<DogList dogData={dogData} getDogs={getDogs} />} path="/dogs" />
          <Route element={<DogDetails dogData={dogData}/>}  path="/dogs/:name" />
          <Route element={<Navigate to="/dogs" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
