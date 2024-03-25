import React from 'react';
import '../Styles/LoginForm.css';
import Navbar from './Navbar';


const Register = () => {
  return (
    <div>
        <Navbar/>
        <div className='wrapper'>
        <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
                <input 
                    type='text'
                    placeholder='Full Name'
                    required
                />
            </div>
            <div className='input-box'>
                <input 
                    type='text'
                    placeholder='Phone Number'
                    required
                />
            </div>
            <div className='input-box'>
                <input 
                    type='email'
                    placeholder='Email'
                    required
                />
            </div>
            <div className='input-box'>
                <input
                    type='password'
                    placeholder='Password'
                    required
                />
            </div>
            <div className='input-box'>
                <input 
                    type='password'
                    placeholder='Confirm Password'
                    required
                />
            </div>

            
            <button type='submit'>Register</button>

            <div className='register-link'>
                <p>Already have an account?<a href='login'>Login</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Register