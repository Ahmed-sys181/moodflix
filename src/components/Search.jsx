import React from 'react'

const Search = ({ searchTerm , setSearchTerm }) => {
  return (
    <div className='search'>
        <div>
            <img src="../public/search-icon.svg" alt="Search Icon" />
            <input 
            type="text"
            placeholder='Search for your favoirite movie'
            value={ searchTerm }
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search