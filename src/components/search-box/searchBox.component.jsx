

import React from 'react';
import './search-box.styles.css'
export const SearchBox = ({placeholder,handleSearch}) => {
  return(<input className='search' type='search' onChange={handleSearch} placeholder={placeholder} />)
}