import {puppyList} from './data.js'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  
  const [featPupId, setFeatPupId] = useState(null);

 // function to handle click on a puppy
 const handlePuppyClick = (puppyId) => {
  setFeatPupId(puppyId); // set the featPupId to the clicked puppy's ID
};

return (
  <div>
    {/* Map through the puppies and render each with an onClick handler */}
    {puppies.map((puppy) => (
      <p key={puppy.id} onClick={() => handlePuppyClick(puppy.id)}>
        {puppy.name}
      </p>
    ))}


    {featPupId !== null && <p>Selected Puppy ID: {featPupId}</p>}
  </div>
);
};

export default App;