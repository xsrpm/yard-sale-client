import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import FilterCategory from '../../components/FilterCategory'
import SearchInput from '../../components/SearchInput'
import ProductList from '../../components/ProductList'
import './style.css'

export function Home() {
  let params = useParams()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [searchedProducts, setSearchedProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=0')
      .then((res) => res.json())
      .then((data) => {
        let newData = data
        if (params.category) {
          newData = newData.filter(
            (product) => product.category.name === params.category
          )
        }
        setSearch('')
        setProducts(newData)
        setSearchedProducts(newData)
      })
  }, [params.category])

  const handleTextSearchChange = (e) => {
    setSearch(e.target.value)
    setSearchedProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <>
      <article className='Home'>
        <div className='home__header'>
         <SearchInput search={search} onTextSearchChange={handleTextSearchChange}/>
          <FilterCategory />
        </div>
        <ProductList searchedProducts={searchedProducts} />
      </article>
    </>
  )
}
