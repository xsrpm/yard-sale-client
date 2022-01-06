import 'style.css'

export function EmailSended() {
  return (
    <article className='EmailSended thin-width'>
      <h1 className='brand brand-medium'>
        <img src='./images/icons/logo.svg' alt='logo' />
        <span>yard</span>
        <span>Sale</span>
      </h1>
      <div>
        <h2 className='title text-center'>Email has been send!</h2>
        <p className='text-center'>
          Please check your inbox for instructions on how to reset the password.
        </p>
      </div>

      <form method='post'>
        <picture className='text-center'>
          <img src='./images/icons/message2.svg' alt='message icon' />
        </picture>

        <div className='form-buttons'>
          <button className='primary-button' type='submit'>
            Submit
          </button>
          <p className='text-center'>
            Didn't receive the email? <a href='#'>Resend</a>
          </p>
        </div>
      </form>
    </article>
  )
}
