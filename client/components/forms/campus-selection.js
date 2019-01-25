import axios from 'axios'
import React, {Component} from 'react'
import {connect} from 'react-redux'

class CampusSelectionComp extends Component {
  constructor() {
    super()
    this.state = {
      campuses: []
    }
  }

  async componentDidMount() {
    try {
      const {data: campuses} = await axios.get(
        `/api/campuses/${this.props.userId}`
      )
      this.setState({campuses: campuses})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <select name="campusId" onChange={this.props.handleChange}>
        <option type="text" value={null}>
          none
        </option>
        {this.state.campuses.map(campus => {
          return (
            <option
              type="number"
              label={campus.name}
              key={campus.id}
              value={campus.id}
            />
          )
        })}
      </select>
    )
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.id
  }
}

const CampusSelection = connect(mapStateToProps)(CampusSelectionComp)
export default CampusSelection
