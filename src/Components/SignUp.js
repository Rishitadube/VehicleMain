import React from 'react'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className='cover-s'>
        <h1>Sign Up</h1>
        <input type='text' placeholder='Name'/>
        <input type='email' placeholder='Email ID'/>
        <input type='tel' placeholder='Phone No.'/>
        <div className='sign-btn'>Sign Up</div>
    </div>
  )
}

export default SignUp