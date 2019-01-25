import React from 'react'
import {Link} from 'react-router-dom'

const LoginHome = props => {
  return (
    <div className="login-home-div">
      <Link to="/login" className="nav">
        Login
      </Link>
      <Link to="/signup" className="nav">
        Sign Up
      </Link>
      <main>
        <h1 className="main-header">School Manager</h1>
        <h3>
          Keep track of your school's campuses and students with School Manager
        </h3>
        <div className="frontpage-text-container">
          <p>
            To use School Manager, please sign up or login. Once logged in, you
            will be given a list of campuses and students to start with. You
            will be able to add, delete, and update students and campuses, as
            well as restart back to the initial data.
          </p>
        </div>
        {/* <div className="login-signup-div">
        <button type="button" className="log-sign-button" onClick={() => props.history.push('/login')}>Login</button>
        <p> or </p>
        <button type="button" className="log-sign-button" onClick={() => props.history.push('/signup')}>Sign Up</button>
      </div> */}
      </main>
    </div>
  )
}

export default LoginHome
