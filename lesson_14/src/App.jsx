import React from 'react';
import './App.css';
import Timer from './timer';
import Country from './country'


function App() {
  return (
    <div className="App">
        <Timer />
        <Country 
          maxHeight = '300px'
        />
    </div>
  );
}

export default App;
