import { useState } from 'react'
import validator from 'validator'
import Alert from './Alert'

import logo from './assets/images/logo.svg'
import illustration from './assets/images/illustration-dashboard.png'

const App = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validator.isEmail(email)) {
      setError(true)
    } else {
      setError(false)
    }
  }

  return (
    <main className='container mx-auto text-center'>
      <img className='mx-auto mt-20' src={logo} alt='Ping Company Logo' />

      <div className='mt-14'>
        <h1 className='text-5xl font-light text-zinc-400'>
          We are launching{' '}
          <span className='text-slate-900 font-bold'>soon!</span>
        </h1>
        <p className='mt-4 text-2xl text-slate-900'>
          Subscribe and get notified
        </p>
      </div>

      <form onSubmit={handleSubmit} className='mt-11 flex gap-3 justify-center'>
        <input
          className={`pl-6 pr-52 py-4 border rounded-full focus:outline-none ${
            error ? 'border-red-600' : 'border-zinc-300'
          }`}
          type='email'
          placeholder='Your email address...'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type='submit'
          className='bg-blue-700 text-white px-16 rounded-full font-semibold shadow-xl active:translate-y-px hover:bg-blue-500 transition-colors'
        >
          Notify Me
        </button>
      </form>

      {error && (
        <Alert>
          <p>Please privde a valid email address</p>
        </Alert>
      )}

      <img
        className='mx-auto w-2/5 mt-24'
        src={illustration}
        alt='Illustration Dashboard'
      />

      <div className='flex justify-center items-center gap-10 mt-20 text-blue-600'>
        <div className='border border-solid rounded-full border-zinc-300 w-7 h-7 flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all'>
          <i className='ri-facebook-fill'></i>
        </div>

        <div className='border border-solid rounded-full border-zinc-300 w-7 h-7 flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all'>
          <i className='ri-twitter-fill'></i>
        </div>

        <div className='border border-solid rounded-full border-zinc-300 w-7 h-7 flex justify-center items-center hover:bg-blue-600 hover:text-white transition-all'>
          <i className='ri-instagram-line'></i>
        </div>
      </div>

      <p className='text-zinc-400 mt-5'>
        &copy; Copyright Ping. All rights reserved
      </p>
    </main>
  )
}

export default App
