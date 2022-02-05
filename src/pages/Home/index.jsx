import './style.css'
import searchLogo from '@/assets/icons/search.svg'
import arrowDown from '@/assets/icons/arrow_down_black.svg'
import { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { AppContext } from '../../routes/AppContext'
import { ProductDetails } from '../../components/ProductDetails'
import { useFetch } from '../../hooks/useFetch'

export function Home() {
  let location = useLocation()
  let params = useParams()
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const categories = useFetch({
    url: 'https://api.escuelajs.co/api/v1/categories'
  })
  const { addToCart, productInCart, showInProductDetail } =
    useContext(AppContext)
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
          <ul className='filter-nav'>
            <li className={location.pathname === '/' ? 'selected' : ''}>
              <Link to='/'>All</Link>
            </li>
            {categories.map(({ id, name }) => (
              <li
                key={id}
                className={
                  location.pathname === `/category/${name}` ? 'selected' : ''
                }
              >
                <Link to={'/category/' + name}>{name}</Link>
              </li>
            ))}
          </ul>
          <p className='text-center hide'>
            <span>Order: </span>
            <span id='order'>Most recent </span>
            <img src={arrowDown} alt='arrow down' />
          </p>
        </div>
        <div className='products'>
          {searchedProducts.map((product) => (
            <div key={product.id} className='product'>
              <div
                className='product-image'
                onClick={() => showInProductDetail(product)}
              >
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
                    productInCart(product.id) ? 'added-to-cart' : 'add-to-cart'
                  }
                  onClick={() => addToCart(product)}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </article>
      <ProductDetails />
    </>
  )
}
