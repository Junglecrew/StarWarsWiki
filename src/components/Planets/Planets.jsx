import React, { Component } from 'react'
import propTypes from 'prop-types'
import './planets.scss'

export default class Planets extends Component {
  static propTypes = {
    isFetching: propTypes.bool.isRequired,
    planetsGetSaga: propTypes.func.isRequired,
    planets: propTypes.array.isRequired,
  }

  componentDidMount() {
    const { planetsGetSaga } = this.props
    planetsGetSaga()
  }

  render() {
    const { isFetching, planets } = this.props
    return (
      <div className='planets-page-wrapper'>
        <h1 className='planets-page-title'>Planets</h1>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          <div className='planets-container'>
            <div className='planets-list'>
              {planets.map(planet => {
                return (
                  <div key={planet.name} className='planets-list_item'>
                    {planet.name}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
}
