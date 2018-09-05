import { connect } from 'react-redux'
import { planetsGetSaga } from 'reducers/Planets/actions'
import Planets from './Planets.jsx'
import { getIsFetching, getPlanets } from 'reducers/Planets/selectors'

const mapStateToProps = state => ({
  isFetching: getIsFetching(state),
  planets: getPlanets(state),
})

export default connect(
  mapStateToProps,
  { planetsGetSaga }
)(Planets)
