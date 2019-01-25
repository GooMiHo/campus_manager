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
      <h3>You are signed in as {email}</h3>
      <h1 className="main-header">Welcome to School Manager</h1>
      <h3>
        Keep track of your school's campuses and students with School Manager
      </h3>
      <div className="frontpage-text-container">
        <p>
          To make this application easier to demo, a set of campuses and
          students have been provided for you. Please feel free to remove, add,
          and update as many campuses and students as you like. You can easily
          revert back to the original data by clicking the reset button below.
        </p>
        <button type="button" onClick={() => refillDB(id)}>
          Reset
        </button>
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
