import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../App/AppContext'

import iconMenu from '@/assets/icons/icon_menu.svg'
import iconCart from '@/assets/icons/icon_shopping-cart.svg'
import logo from '@/assets/icons/logo.svg'
import arrowDown from '@/assets/icons/arrow-down.svg'
import iconCartNotification from '@/assets/icons/icon_shopping-cart-notification.svg'
import './style.css'

export function Header({ categories }) {
  const {
    state: {
      cart: { items }
    },
    toggleCart
  } = useContext(AppContext)
  return (
    <header className='header show-section'>
      <div className='header__menu'>
        <picture>
          <img src={iconMenu} alt='menu logo' />
        </picture>
        <nav className='header__filter-nav'>
          <ul>
            <li className='selected'>
              <Link to='/'>All</Link>
            </li>
            {categories &&
              categories.map(({ id, name }) => (
                <li key={id}>
                  <Link to={'/category/' + name}>{name}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className='header__section'>
        <h1 className='brand brand-medium'>
          <img src={logo} alt='logo' />
          <span>yard</span>
          <span>Sale</span>
        </h1>
        <p>Shopping cart</p>
      </div>

      <div className='header__user-menu'>
        <ul>
          <li className='sign-in hide'>
            <a href='#'> Sign in </a>
          </li>
          <li className='email-user'>
            <a href='#'>
              <span>cemp2703@gmail.com</span>
              <img src={arrowDown} alt='arrow down' />
            </a>
          </li>
        </ul>
        <picture className='' onClick={toggleCart}>
          <img
            src={items.length > 0 ? iconCartNotification : iconCart}
            alt='shoping cart icon'
          />
        </picture>
      </div>
    </header>
  )
}
