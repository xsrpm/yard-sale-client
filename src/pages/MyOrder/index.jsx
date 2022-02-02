import { useContext } from 'react'
import { AppContext } from '../../routes/AppContext'
import './style.css'

export function MyOrder() {
  const { lastOrder, totalPrice } = useContext(AppContext)
  const { id, items } = lastOrder() ? lastOrder() : { id: null, items: [] }
  const dateId = new Date(id)

  function withOrders() {
    return (
      <div>
        <div>
          <div>
            <p className='date'>
              {dateId.getMonth().toString().padStart(2, '00') +
                '.' +
                dateId.getDay().toString().padStart(2, '00') +
                '.' +
                dateId.getFullYear()}
            </p>
            <p className='n-articles'>{items.length} articles</p>
          </div>
          <p className='price'>
            <span>$ </span>
            <span>{totalPrice(items)}</span>
          </p>
        </div>
        <ul>
          {items.map(({ id, title, price, quantity, images }) => (
            <li key={id}>
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
    )
  }

  function withoutOrders() {
    return <div>There is no order</div>
  }

  return (
    <article className='MyOrder'>
      <h3>My order</h3>
      {id ? withOrders() : withoutOrders()}
    </article>
  )
}
