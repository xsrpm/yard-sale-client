import './style.css'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import { AppContext } from '../../App/AppContext'
import { useContext } from 'react'
export function ShoppingCart() {
  const {
    state: {
      cart: { items, open }
    },
    removeFromCart,
    toggleCart,
    totalCartPrice
  } = useContext(AppContext)
  return (
    <aside className={'ShoppingCart ' + (open ? '' : 'hide')}>
      <div>
        <div className='ShoppingCart_header'>
          <img src={arrowLeft} alt='back' onClick={toggleCart} />
          <span>Shopping cart</span>
        </div>
        <ul>
          {items.map(({ id, title, price, quantity, images }) => (
            <li key={'cart_' + id}>
              <img src={images[0]} alt='' />
              <div>
                <p className='product-name'>{title}</p>
                <p className='quantity'>{quantity}</p>
                <p className='price'>
                  <span>$</span>
                  <span>{price}</span>
                </p>
                <p className='message'>REMOVED FROM CART</p>
              </div>
              <div
                className='remove-product'
                onClick={() => removeFromCart(id)}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className='total'>
          <p>Total</p>
          <p>
            <span>$</span> <span>{totalCartPrice()}</span>
          </p>
        </div>
        <button className='primary-button'>Checkout</button>
      </div>
    </aside>
  )
}
