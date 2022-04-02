import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import FilterCategory from '../../components/FilterCategory'
import SearchInput from '../../components/SearchInput'
import ProductList from '../../components/ProductList'
import './style.css'
import { useHome } from './useHome'

export function Home() {
  let {category} = useParams()
  const  { incrementPage, handleTextSearchChange, searchedProducts, search} = useHome(category)

  return (
    <>
      <article className='Home'>
        <div className='home__header'>
         <SearchInput search={search} onTextSearchChange={handleTextSearchChange}/>
          <FilterCategory />
        </div>
        <ProductList searchedProducts={searchedProducts} />
        <div className='text-center'>
          <button onClick={()=>incrementPage()} className='primary-button thin-width'>Load more</button>
        </div>
      </article>
    </>
  )
}
