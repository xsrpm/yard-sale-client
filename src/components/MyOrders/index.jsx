import './style.css'

import arrowRight from '@/assets/icons/arrow-right.svg'

export function MyOrders() {
  return (
    <article className='MyOrders'>
      <h3>My orders</h3>
      <ul>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
        <li>
          <div>
            <p className='date'>04.25.2021</p>
            <p className='n-articles'>6 articles</p>
          </div>
          <div>
            <p className='price'>
              <span>$ </span>
              <span>120,00</span>
            </p>
            <picture>
              <img src={arrowRight} alt='view more' />
            </picture>
          </div>
        </li>
      </ul>
    </article>
  )
}
