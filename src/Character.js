import React, {useState} from 'react';

const API ="http://localhost:8001/singles"

const headers = {
    Accepts: 'application/json',
    'Content-Type': 'application/json'}

function Character({character, removeCharacter}) {

  const [showBio, setShowBio] = useState(true)
  const [match, setMatch] = useState(true)

  const toggleBio = () => {
    setShowBio(!showBio)
  };

  function handleDelete(id) {
    removeCharacter(id)
    fetch(`${API}/${id}`, {
      method: "DELETE",
      headers,
    })
  }

  
  const wealthStatus = character.wealth ? "Rich" : "Poor"
  const heightStatus = (character.height > "1.73") ? "Tall" : "Short"
  
    return (
        <div className='cardContainer'>
                <ul className="character-item">
           <div className="card">
              <img src={character.image} 
              alt={character.name} 
              className="card_image" 
              onClick = {toggleBio}/> 
              <div className="card-content">
                <h4 className="card-text">
                  {showBio ? <div>{character.name}</div>
                :  <div>
                    <h4>{character.title}</h4>
                    <p>Gender:{character.gender}</p>
                    <p>Height: {heightStatus}</p>
                    <p>Wealth Status: {wealthStatus}</p>
                    <p>{character.bio}</p>
                   </div>}  
              </h4>
             </div>
           </div>
          

    
      
       
          
        {match ? (
             <button onClick = {() => setMatch(false)} className="emoji-button favorite active">🖤</button>
           ) : (
             <button onClick = {() => setMatch(true)} className="emoji-button favorite">❤️‍🔥</button>
           )} 
         <button onClick={() => handleDelete(character.id)}>⚔️Swipe Left⚔️</button>
   

 </ul>
  </div>
      
    );
}

export default Character;