import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class MainPage extends Component {
  state = {
    show: false,
  }

  componentDidMount() {
    this.setState({
      show: true,
    })
  }

  goToRoute(route) {
    this.setState(
      {
        show: false,
      },
      () => {
        setTimeout(() => {
          this.props.history.push(`/${route}`)
        }, 400)
      }
    )
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.show && (
            <CSSTransition classNames="menu-fade" timeout={{ enter: 350, exit: 400 }}>
              <div className="menu-wrapper menu-fade">
                <h1 className="app-title">Welcome to STAR WARS Wiki</h1>

                <div className="circle">
                  <div className="circle-center" />
                  <div className="circle-tl" onClick={() => this.goToRoute('planets')}>
                    <p className="planets">Planets</p>
                  </div>
                  <div className="circle-tr" onClick={() => this.goToRoute('peoples')}>
                    <p className="peoples">Peoples</p>
                  </div>
                  <div className="circle-br" onClick={() => this.goToRoute('species')}>
                    <p className="species">Species</p>
                  </div>
                  <div className="circle-bl" onClick={() => this.goToRoute('ships')}>
                    <p className="ships">Ships</p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(MainPage)
