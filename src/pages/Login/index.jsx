import './style.css'
import logo from '../../assets/icons/logo.svg'
import logoX from '@/assets/icons/x.svg'
import { Link } from 'react-router-dom'
import useLogin from '@/hooks/useLogin'
export function Login() {
  const { login } = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    // event.target[0].value
    // event.target[1].value
    const respLogin = login({ username: event.target[0].value, password: event.target[1].value });
    if (respLogin?.error) {
      console.log(respLogin.error);
    }
  }
  return (
    <article className='Login thin-width'>
      <div className='login__header'>
        <picture>
          <img src={logoX} alt='close' />
        </picture>
      </div>
      <div className='body'>
        <h1 className='brand brand-big'>
          <img src={logo} alt='logo' />
          <span>yard</span>
          <span>Sale</span>
        </h1>
        <form onSubmit={handleSubmit} method='post' className='email-invalid'>
          <div className='form-items'>
            <div className='form-item'>
              <label htmlFor='email'>Email address</label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='anonimous@example.com'
              />
            </div>

            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='**********'
              />
            </div>
          </div>
          <p className='message'>Invalid user ID and password combination</p>
          <div className='form-buttons'>
            <button className='primary-button' type='submit'>
              Log in
            </button>
            <p className='text-center'>
              <a href='#' className='text-center'>
                Forgot my password
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className='footer'>
        <Link to='new-account'>
          <button className='secondary-button'>Sign up</button>
        </Link>
      </div>
    </article>
  )
}
