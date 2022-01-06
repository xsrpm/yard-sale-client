import './style.css'

export function MyAccountEdit() {
  return (
    <article className='MyAccountEdit thin-width'>
      <form method='post'>
        <div>
          <h2>My account</h2>
          <div className='form-items'>
            <div className='form-item'>
              <label htmlFor='email'>Name</label>
              <input type='text' name='email' id='email' placeholder='name' />
            </div>
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
              <label htmlFor='email'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='****************'
              />
            </div>
          </div>
        </div>

        <div className='form-buttons'>
          <button className='primary-button' type='submit'>
            Save
          </button>
        </div>
      </form>
    </article>
  )
}
