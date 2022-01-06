import './style.css'
import searchLogo from '@/assets/icons/search.svg'
import arrowDown from '@/assets/icons/arrow_down_black.svg'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Header'
import { useParams } from 'react-router-dom'
import { ShoppingCart } from '../ShopingCart'
import { AppContext } from '../../App/AppContext'

export function Home() {
  const [products, setProducts] = useState([])
  const [searchedProducts, setSearchedProducts] = useState([])
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  let params = useParams()
  const { addToCart, productInCart } = useContext(AppContext)
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=0')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let newData = data
        if (params.category) {
          newData = newData.filter(
            (product) => product.category.name === params.category
          )
        }
        setSearch('')
        setProducts(newData)
        setSearchedProducts(newData)
        console.log(newData)
      })
    return () => {}
  }, [params.category])
  const onTextSearchChange = (e) => {
    setSearch(e.target.value)
    setSearchedProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }
  return (
    <>
      <Header categories={categories} />
      <main>
        <article className='Home'>
          <div className='home__header'>
            <div className='search-input'>
              <img src={searchLogo} alt='logo' />
              <input
                type='text'
                placeholder='Search product'
                value={search}
                onChange={onTextSearchChange}
              />
            </div>
            <nav className='filter-nav'>
              <ul>
                <li className='selected'>
                  <Link to='/'>All</Link>
                </li>
                {categories.map(({ id, name }) => (
                  <li key={id}>
                    <Link to={'/category/' + name}>{name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className='text-center hide'>
              <span>Order: </span>
              <span id='order'>Most recent </span>
              <img src={arrowDown} alt='arrow down' />
            </p>
          </div>
          <div className='products'>
            {searchedProducts.map((product) => (
              <div key={product.id} className='product'>
                <div className='product-image'>
                  <img src={product.images[0]} alt='product' />
                  <div className='message'>Removed from cart</div>
                </div>
                <div className='product-info'>
                  <div>
                    <h3>
                      <span>$</span>
                      <span>{product.price}</span>
                    </h3>
                    <p>{product.title}</p>
                  </div>
                  <div
                    className={
                      productInCart(product.id)
                        ? 'added-to-cart'
                        : 'add-to-cart'
                    }
                    onClick={() => addToCart(product)}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </article>
        <ShoppingCart />
      </main>
    </>
  )
}
