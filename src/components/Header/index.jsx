import { Link, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { AppContext } from '../../routes/AppContext'
import iconMenu from '@/assets/icons/icon_menu.svg'
import iconCart from '@/assets/icons/icon_shopping-cart.svg'
import logo from '@/assets/icons/logo.svg'
import arrowDown from '@/assets/icons/arrow-down.svg'
import iconCartNotification from '@/assets/icons/icon_shopping-cart-notification.svg'
import './style.css'

import { MenuMobile } from '../MenuMobile'
import { MenuDesktop } from '../MenuDesktop'

export function Header() {
  const categories = useFetch({
    url: 'https://api.escuelajs.co/api/v1/categories'
  })
  let location = useLocation()
  const [menuMobileOpen, setMenuMobileOpen] = useState(false)
  const [menuDesktopOpen, setMenuDesktopOpen] = useState(false)
  const handleClickMenuMobile = () => {
    setMenuMobileOpen(!menuMobileOpen)
  }
  const handleClickMenuDesktop = () => {
    setMenuDesktopOpen(!menuDesktopOpen)
  }
  const {
    state: {
      cart: { items }
    },
    toggleCart
  } = useContext(AppContext)
  return (
    <header className={'header' + ' show-section'}>
      <MenuMobile
        isOpen={menuMobileOpen}
        categories={categories}
        handleClickClose={handleClickMenuMobile}
      />
      <MenuDesktop
        isOpen={menuDesktopOpen}
        handleClickClose={handleClickMenuDesktop}
      />
      <div className='header__menu'>
        <picture>
          <img src={iconMenu} alt='menu logo' onClick={handleClickMenuMobile} />
        </picture>
        <nav className='header__filter-nav'>
          <ul>
            <li className={location.pathname === '/' ? 'selected' : ''}>
              <Link to='/'>All</Link>
            </li>
            {categories &&
              categories.map(({ id, name }) => (
                <li
                  key={id}
                  className={
                    location.pathname === `/category/${name}` ? 'selected' : ''
                  }
                >
                  <Link to={`/category/${name}`}>{name}</Link>
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
          <li className='sign-in'>
            <a href='#'> Sign in </a>
          </li>
          <li className='email-user hide' onClick={handleClickMenuDesktop}>
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
