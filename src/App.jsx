import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [ searchTerm , setSearchTerm ] = useState('');

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <header>
{/*          <img src="..\public\background.jpg" alt="" />  */}
          <h1>
            Find <span className='text-gradient'>Movies</span> You'll enjoy wihtout the hustle
          </h1>
          <Search  searchTerm={ searchTerm } setSearchTerm={setSearchTerm} />
        </header>
      </div>
    </main>
  )
}

export default App