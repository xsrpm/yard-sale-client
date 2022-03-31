import React from 'react'
import searchLogo from '@/assets/icons/search.svg'
import "./style.css"

export default function SearchInput({search, onTextSearchChange}) {

  return (
    <div className='SearchInput'>
      <img src={searchLogo} alt='logo' />
      <input
        type='text'
        placeholder='Search product'
        value={search}
        onChange={onTextSearchChange}
      />
    </div>
  )
}
