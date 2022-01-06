import './style.css'
import logo from '@/assets/icons/logo.svg'

export function NewPassword() {
  return (
    <article className='NewPassword thin-width'>
      <h1 className='brand brand-medium'>
        <img src={logo} alt='logo' />
        <span>yard</span>
        <span>Sale</span>
      </h1>
      <div>
        <h2 className='title text-center'>Create a new password</h2>
        <p className='text-center'>Enter a new password for your account</p>
      </div>
      <form method='post'>
        <div className='form-items'>
          <div className='form-item'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='**********'
            />
          </div>
          <div className='form-item'>
            <label htmlFor='re-password'>Re-enter password</label>
            <input
              type='password'
              name='re-password'
              id='re-password'
              placeholder='**********'
            />
          </div>
        </div>
        <div className='form-buttons'>
          <button className='primary-button' type='submit'>
            Confirm
          </button>
        </div>
      </form>
    </article>
  )
}
