import './style.css'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import { AppContext } from '../../routes/AppContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export function ShoppingCart() {
  let navigate = useNavigate()
  const {
    state: {
      cart: { items, open }
    },
    removeFromCart,
    toggleCart,
    totalPrice,
    newOrder
  } = useContext(AppContext)
  const handleCheckout = () => {
    if (items.length > 0) {
      toggleCart()
      newOrder(items)
      navigate('/order')
    }
  }
  return (
    <div className={'ShoppingCart ' + (open ? '' : 'hide')}>
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
      <div>
        <div className='total'>
          <p>Total</p>
          <p>
            <span>$</span> <span>{totalPrice(items)}</span>
          </p>
        </div>
        <button
          className={'primary-button' + (items.length > 0 ? '' : ' disabled')}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
