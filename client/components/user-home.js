import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import refillDB from '../backUpData'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const {id} = props

  return (
    <main>
      <div className="transparent-box" />
      <h3>Welcome, {email}</h3>
      <h1 className="main-header">
        Welcome to the Margaret Hamilton<br />Academy of JavaScript
      </h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et lorem
        at quam convallis volutpat{' '}
      </h3>
      <div className="frontpage-text-container">
        <button type="button" onClick={() => refillDB(id)}>
          click
        </button>
        <p>
          Curabitur quam justo, scelerisque vitae libero in, consequat porta
          urna. Nulla condimentum iaculis fringilla. Praesent maximus, arcu nec
          malesuada semper, metus urna aliquet est, eu consequat metus quam vel
          massa. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Suspendisse nec magna in tellus
          lacinia ultricies nec non ante. Maecenas at lorem vitae justo
          ullamcorper vehicula. Phasellus pulvinar, nunc ac rhoncus feugiat,
          nunc augue condimentum ex, a interdum orci nisl tristique est. Etiam
          dapibus tincidunt sapien in laoreet. Duis at dictum mauris, non
          euismod nisi. Integer non sagittis lorem. Sed congue sed neque sed
          euismod. Pellentesque pharetra non erat sed pulvinar.
        </p>
      </div>
    </main>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
