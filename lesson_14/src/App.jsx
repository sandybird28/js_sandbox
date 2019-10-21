import React from 'react';
import './App.css';
import Timer from './timer';
import Country from './country2'


function App() {
  return (
    <div className="App">
        <Timer />
        <Country 
          maxHeight = '150px'
          disabled = {false}
        />
        <Country 
          maxHeight = '200px'
          disabled = {true}
        />

    </div>
  );
}

export default App;
