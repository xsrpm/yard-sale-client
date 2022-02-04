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
        <div>
          <p>CATEGORIES</p>
          <ul>
            <li onClick={() => handleRedirect('/')}>All</li>
            {categories &&
              categories.map(({ id, name }) => (
                <li
                  key={id}
                  onClick={() => handleRedirect(`/category/${name}`)}
                >
                  {name}
                </li>
              ))}
          </ul>
          <hr className='line' />
          {isLoggedIn && (
            <ul className='account'>
              <li onClick={() => handleRedirect('/orders')}>My orders</li>
              <li onClick={() => handleRedirect('/account')}>My account</li>
            </ul>
          )}
        </div>
        <div>
          {isLoggedIn && (
            <>
              <p className='email'>cemp2703@gmail.com</p>
              <p className='sign-out'>
                <a href='#' alt='sign out'>
                  Sign out
                </a>
              </p>
            </>
          )}
          {!isLoggedIn && (
            <p className='log-in'>
              <a href='#' alt='log in'>
                Log in
              </a>
            </p>
          )}
        </div>
      </div>
    </nav>
  )
}
