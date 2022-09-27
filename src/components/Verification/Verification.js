import React from 'react'
import { Link } from 'react-router-dom'
import './Verification.css'

const Verification = () => {
    return (
        <div className='verification'>
            <img src="https://img.icons8.com/color/100/000000/paper-plane.png" alt='plane' />
            <p className='first'>An email has been sent to you.</p>
            <p className='second'>Check the email that's associated with your account for the verification code.</p>
            <div className='verify'>
                <p className='verify-text'>Verification Code</p>
                <input type="text" name="Code" id="code" />
                <Link className='verify-btn' to="/" >Verify</Link>
            </div>
            <Link className='skip'>Send me another Code</Link>
            <Link className='skip'>Skip for now <img src="https://img.icons8.com/material-rounded/15/1b82d7/chevron-right.png" alt='skip' /></Link>

        </div>
    )
}

export default Verification
