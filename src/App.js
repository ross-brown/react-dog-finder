import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Nav from './Nav';
import DogList from './DogList';
import FilterDogs from './FilterDogs';


function App() {
  const [dogData, setDogData] = useState([]);

  function getDogs(dogs) {
    setDogData(dogs);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/"><h1>Dog Finder</h1></Link>
        <Nav dogs={dogData.map(dog => dog?.name)} />
        <Routes>
          <Route element={
            <DogList
              dogData={dogData}
              getDogs={getDogs}
            />}
            path="/dogs" />
          <Route element={<FilterDogs dogData={dogData} />} path="/dogs/:name" />
          <Route element={<Navigate to="/dogs" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
