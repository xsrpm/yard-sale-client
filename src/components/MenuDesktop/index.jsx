import { useNavigate } from 'react-router-dom'

import './style.css'

export function MenuDesktop({ isOpen, handleClickClose }) {
  const navigate = useNavigate()
  const handleRedirect = (to) => {
    handleClickClose()
    navigate(to)
  }
  return (
    <nav className={'MenuDesktop' + (isOpen ? '' : ' hide')}>
      <ul>
        <li onClick={() => handleRedirect('/orders')}>My orders</li>
        <li onClick={() => handleRedirect('/account')}>My account</li>
      </ul>
      <div>
        <svg
          width='117'
          height='1'
          viewBox='0 0 117 1'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.2'
            d='M0.5 0.5H116'
            stroke='#979797'
            strokeLinecap='square'
          />
        </svg>
      </div>

      <p>
        <a href='#'>Sign out</a>
      </p>
    </nav>
  )
}
