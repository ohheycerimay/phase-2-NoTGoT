import React from 'react';
import Character from './Character'
import Search from './Search'

function Singles({allCharacters, removeCharacter, search, handleSearch}) {

  


    return (
        <div>
             <Search
            search={search}
            handleSearch={handleSearch}/>
            <div className='wrapper'>
           {
            allCharacters.map(character => <Character key= {character.id} character= {character} removeCharacter={removeCharacter} search={search} handleSearch={handleSearch}/>)
          }  
          </div>
        </div>
    )
}

export default Singles;