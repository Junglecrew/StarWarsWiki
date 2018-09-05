import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import MainPage from 'components/MainPage/index.js'
import Planets from './components/Planets/index.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/planets' component={Planets} />
        </Switch>
      </div>
    )
  }
}

export default App
