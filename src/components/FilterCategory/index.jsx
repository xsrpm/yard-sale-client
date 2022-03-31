import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import arrowDown from '@/assets/icons/arrow_down_black.svg'
import './style.css'

export default function FilterCategory() {
    const categories = useFetch({
        url: 'https://api.escuelajs.co/api/v1/categories'
      })
      let location = useLocation()
  return (
    <>
    <ul className='FilterCategory'>
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
    </>
  )
}
