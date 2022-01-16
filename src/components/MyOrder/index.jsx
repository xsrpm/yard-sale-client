import { useFetch } from '../../App/useFetch'
import { Header } from '../Header'
import './style.css'

export function MyOrder() {
  const categories = useFetch({
    url: 'https://api.escuelajs.co/api/v1/categories'
  })
  return (
    <>
      <Header categories={categories} />
      <article className='MyOrder'>
        <h3>My order</h3>
        <div>
          <div>
            <div>
              <p className='date'>04.25.2021</p>
              <p className='n-articles'>6 articles</p>
            </div>
            <p className='price'>
              <span>$ </span>
              <span>560,00</span>
            </p>
          </div>
          <ul>
            <li>
              <img
                src='https://github.com/xsrpm/standard-web-projects/raw/master/css/yard-sale/images/products/round_shelf.jpg'
                alt=''
              />
              <div>
                <p className='product-name'>Round Shelf</p>
                <p className='price'>
                  <span>$</span>
                  <span>120,00</span>
                </p>
              </div>
            </li>
            <li>
              <img
                src='https://github.com/xsrpm/standard-web-projects/raw/master/css/yard-sale/images/products/round_shelf.jpg'
                alt=''
              />

              <div>
                <p className='product-name'>Round Shelf</p>
                <p className='price'>
                  <span>$</span>
                  <span>120,00</span>
                </p>
              </div>
            </li>
            <li>
              <img
                src='https://github.com/xsrpm/standard-web-projects/raw/master/css/yard-sale/images/products/round_shelf.jpg'
                alt=''
              />

              <div>
                <p className='product-name'>Round Shelf</p>
                <p className='price'>
                  <span>$</span>
                  <span>120,00</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}
