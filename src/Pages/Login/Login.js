import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type='email' placeholder='Email ID'/>
        <input type='password' placeholder='Password'/>
        <div><h6>New member? <Link to="/SignUp">Sign Up</Link></h6></div>
        <Button className='login-btn'>Login</Button>
    </div>
  )
}

export default Login