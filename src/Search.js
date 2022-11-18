import React from 'react';

function Search({search, handleSearch}) {

    console.log("search")

  
    

   
    return (
        <form className="search" >
            <input type="text" 
            id="search" 
            className="searchTerm" 
            placeholder='Lord, Lady, Non-Binary...'
            value={search} 
            onChange={handleSearch}/>
            <button className="searchButton" type="submit">🗡RESET🗡</button>
        </form>
    );

}

export default Search;


 
