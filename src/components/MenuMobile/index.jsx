import './style.css'
import logoX from '@/assets/icons/x.svg'
import { useNavigate } from 'react-router-dom'
export function MenuMobile({
  isLoggedIn,
  isOpen,
  categories,
  handleClickClose
}) {
  const navigate = useNavigate()
  const handleRedirect = (to) => {
    handleClickClose()
    navigate(to)
  }
  return (
    <nav
      className={
        'MenuMobile' +
        (isLoggedIn ? ' logged-in' : '') +
        (isOpen ? '' : ' hide')
      }
    >
      <div>
        <img src={logoX} alt='close menu' onClick={handleClickClose} />
      </div>
      <div>
        <p>CATEGORIES</p>
        <ul>
          <li onClick={() => handleRedirect('/')}>All</li>
          {categories &&
            categories.map(({ id, name }) => (
              <li key={id} onClick={() => handleRedirect(`/category/${name}`)}>
                {name}
              </li>
            ))}
        </ul>
        <div className='line'>
          <svg
            width='297'
            height='1'
            viewBox='0 0 297 1'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.2'
              d='M0.5 0.5H296.5'
              stroke='#979797'
              strokeLinecap='square'
            />
          </svg>
        </div>
        <ul className='account'>
          <li>My orders</li>
          <li>My account</li>
        </ul>
      </div>
      <div>
        <p className='email'>cemp2703@gmail.com</p>
        <p className='sign-out'>
          <a href='#' alt='sign out'>
            Sign out
          </a>
        </p>
        <p className='log-in'>
          <a href='#' alt='log in'>
            Log in
          </a>
        </p>
      </div>
    </nav>
  )
}
