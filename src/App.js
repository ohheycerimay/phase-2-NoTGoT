import React, {useState, useEffect} from 'react';
import { Route, Routes, Link } from "react-router-dom";
import './App.css';
import './index.css'
import './Form.css'
import Singles from './Singles';
import Welcome from "./Welcome";
import Form from "./Form";



const API = "http://localhost:3000/singles/"

function App() {

  const [allCharacters, setAllCharacters] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setAllCharacters(data))
  }, [])

  function postedCharacters(addedCharacters) {
    setAllCharacters([...allCharacters, addedCharacters])
  }

  function removeCharacter(id) {
    const newCharacter = allCharacters.filter(character => (character.id !== id))
    setAllCharacters(newCharacter)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchSingle = allCharacters.filter((character) => character.gender.toLowerCase().includes(search.toLowerCase()))

  return (
   <>
        <nav className="nav">
        <div class="container">
          </div>
          <h1>❤️‍🔥 GoT or NoT? ❤️‍🔥</h1>
          <div className="links">
          <div>
          <Link to= "/Welcome">Home</Link>
          </div>
          <div>
          <Link to= "/Singles">Singles</Link>
          </div>
          <div>
          <Link to= "/Form">Sign Up</Link>
          </div>
          
          
      
      
       
        </div>
        </nav>
        <Routes>
          <Route 
            path="/Singles" 
            element={
              <Singles 
                allCharacters={searchSingle} 
                removeCharacter={removeCharacter}
                 handleSearch={handleSearch}       
              />
              }
          />
          <Route 
            path="/Form" 
            element={
              <Form
                postedCharacters={postedCharacters}
            />
            }
            /> 
          <Route path="/Welcome" element={<Welcome/>}/>                
        </Routes>
     </> 
  );
}

export default App;
