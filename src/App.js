import React, {useEffect, useState} from 'react';
import './App.css';
import { Cards } from './components/Cards/Cards.js';



function App() {

  const [character, setCharacter]= useState([])

  const fetchCharacter = () => {
    fetch('https://superheroapi.com/api/10225163068251204/697')
      .then(response => response.json())
      .then(data => setCharacter(data.results))
      .catch(error => console.log(error))
  }
useEffect(() => {
  fetchCharacter();
}, [])
  return (
    <>
      
     
      { /* <ul>
        
        { !apis ? 'Cargando...' :
        'cargado'
        }
        
      </ul> 
        */}
      <div className='d-flex justify-content-around m-3'>
        <div className='container'>
        <Cards character={character} />
        </div>
        <Cards />
        <Cards />
      </div>
      <div className='d-flex justify-content-around m-3'>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
