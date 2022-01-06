import './style.css'
import logo from '@/assets/icons/logo.svg'

export function PasswordRecovery() {
  return (
    <article className='PasswordRecovery thin-width'>
      <h1 className='brand brand-medium'>
        <img src={logo} alt='logo' />
        <span>yard</span>
        <span>Sale</span>
      </h1>
      <div>
        <h2 className='title text-center'>Password recovery</h2>
        <p className='text-center'>
          Inform the email address used to create your account
        </p>
      </div>

      <form method='post'>
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
        </div>
        <div className='form-buttons'>
          <button className='primary-button' type='submit'>
            Submit
          </button>
          <a className='text-center' href='#'>
            Back to login
          </a>
        </div>
      </form>
    </article>
  )
}
