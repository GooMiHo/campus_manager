import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import LoginHome from '../components/login-home'

const LoginBar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <div id="nav-container">
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <div id="nav-container">
              <div>
                <Link to="/home">Home</Link>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </div>

              <div id="campuses-students-nav">
                <Link className="nav" to="/campuses">
                  campuses |
                </Link>
                <h1 />
                <Link className="nav" to="/students">
                  students
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(LoginBar)

/**
 * PROP TYPES
 */
LoginBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
