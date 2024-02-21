import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type='email' placeholder='Email ID'/>
        <input type='password' placeholder='Password'/>
        <div className='login-btn'>Login</div>
    </div>
  )
}

export default Login