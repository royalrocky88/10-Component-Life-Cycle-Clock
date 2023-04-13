import {Component} from 'react'
import './index.css'

class Clock extends Component {
  // [Old Time Method use this Constructor Statement]
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor called')
  }

  //   [Modern Method]
  //   state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerId = setInterval(this.tick, 1000)
  }

  //   clear interval is Necessary Other wise [Memory full or leak]
  componentWillUnmount() {
    console.log('component will Unmount stop timer')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    console.log(date)
    console.log('render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
