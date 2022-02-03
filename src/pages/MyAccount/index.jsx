import { useNavigate } from 'react-router-dom'
import './style.css'

export function MyAccount() {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('edit')
    navigate('/account/edit')
  }
  return (
    <article className='my-account thin-width'>
      <form method='post' onSubmit={handleSubmit}>
        <div>
          <h2>My account</h2>
          <div className='form-items'>
            <div className='form-item'>
              <label htmlFor='email'>Name</label>
              <p>César Palma</p>
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Email address</label>
              <p>anonimous@example.com</p>
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Password</label>
              <p>****************</p>
            </div>
          </div>
        </div>

        <div className='form-buttons'>
          <button className='secondary-button' type='submit'>
            Edit
          </button>
        </div>
      </form>
    </article>
  )
}
