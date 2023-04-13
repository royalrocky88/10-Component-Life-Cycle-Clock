import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  // Adding Clock Display Logic [Display or Hide]
  // 1. create state
  state = {showClock: false}
  //

  // 4. create [event listener ]
  onToggleClock = () => {
    this.setState(oldValue => {
      const {showClock} = oldValue
      return {
        showClock: !showClock,
      }
    })
  }
  //

  render() {
    // 2. rendering the state value
    const {showClock} = this.state
    //
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          // 5. onclick value change
          onClick={this.onToggleClock}
          //
        >
          {/* 3. if [showClock true=Hide, false=Show] */}
          {showClock ? 'Hide Clock' : 'Show Clock'}
          {/*  */}
        </button>
        {/* 6. if [showClock is true then Clock show] */}
        {showClock && <Clock />}
        {/*  */}
      </div>
    )
  }
}

export default App
