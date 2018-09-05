import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class PlanetCard extends Component {
  static propTypes = {
    planet: propTypes.object.isRequired,
  }

  render() {
    return <div>{this.props.planet.name}</div>
  }
}
