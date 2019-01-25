import React, {Component} from 'react'
import axios from 'axios'
import {DEFAULT_ENCODING} from 'crypto'
import {makeCampus} from '../../reducers/campus-sub-reducer'
import CampusForm from './campus-form'
import {connect} from 'react-redux'

class AddCampusComp extends Component {
  constructor() {
    super()
    this.state = {
      imageUrl: '',
      name: '',
      address: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()

    const campus = this.state
    if (this.state.imageUrl.length === 0) campus.imageUrl = DEFAULT_ENCODING
    const {data: newCampus} = await axios.post(
      `/api/campuses/${this.props.userId}/campus`,
      campus
    )
    makeCampus(newCampus, this.props.userId)
    this.setState({imageUrl: '', name: '', address: '', description: ''})
    this.props.history.push('/campuses')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <CampusForm
        campus={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const AddCampus = connect(mapStateToProps)(AddCampusComp)
export default AddCampus
