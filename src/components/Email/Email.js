import React from 'react'
import { Link } from 'react-router-dom'
import './Email.css'

const Email = () => {
    return (
        <div className='email'>
            <div>
                <img src="https://img.icons8.com/fluency/100/000000/urgent-message.png" alt='email' />
            </div>
            <p className='first'>Your email has not been verified.</p>
            <p className='second'>Send a verification email to a***@gmail.com</p>
            <Link className='send' to='/verification'>Send Verification Email</Link>
            <Link className='skip'>Skip for now <img src="https://img.icons8.com/material-rounded/15/1b82d7/chevron-right.png" alt='skip' /></Link>
        </div>
    )
}

export default Email
