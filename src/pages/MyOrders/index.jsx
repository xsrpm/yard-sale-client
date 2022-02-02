import './style.css'

import arrowRight from '@/assets/icons/arrow-right.svg'
import { useContext } from 'react'
import { AppContext } from '../../routes/AppContext'
import { Link } from 'react-router-dom'

export function MyOrders() {
  const {
    state: { orders },
    totalPrice
  } = useContext(AppContext)
  return (
    <article className='MyOrders'>
      <h3>My orders</h3>
      <ul>
        {orders.map(({ id, items }) => (
          <li key={id}>
            <Link to={'/order/' + id}>
              <div>
                <p className='date'>
                  {new Date(id).getMonth().toString().padStart(2, '00') +
                    '.' +
                    new Date(id).getDay().toString().padStart(2, '00') +
                    '.' +
                    new Date(id).getFullYear()}
                </p>
                <p className='n-articles'>{items.length} articles</p>
              </div>
              <div>
                <p className='price'>
                  <span>$ </span>
                  <span>{totalPrice(items)}</span>
                </p>
                <picture>
                  <img src={arrowRight} alt='view more' />
                </picture>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
