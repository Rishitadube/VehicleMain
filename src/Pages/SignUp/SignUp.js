import React from 'react'
import "./SignUp.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className='cover-s'>
        <h1>Sign Up</h1>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email ID'/>
        <input type='tel' placeholder='Phone No.'/>
        <Link to="/mycars"><Button className='sign-btn'>Sign Up</Button></Link>
    </div>
  )
}

export default SignUp