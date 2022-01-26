import { useContext } from 'react'
import { AppContext } from '../../routes/AppContext'
import './style.css'

export function MyOrder() {
  const {
    state: {
      cart: { items }
    },
    totalCartPrice
  } = useContext(AppContext)
  console.log(items.length)
  return (
    <article className='MyOrder'>
      <h3>My order</h3>
      <div>
        <div>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>{items.length} articles</p>
          </div>
          <p className='price'>
            <span>$ </span>
            <span>{totalCartPrice()}</span>
          </p>
        </div>
        <ul>
          {items.map(({ id, title, price, quantity, images }) => (
            <li>
              <img src={images[0]} alt='' />
              <div>
                <p className='product-name'>{title}</p>
                <p className='quantity'>{quantity}</p>
                <p className='price'>
                  <span>$</span>
                  <span>{price}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
