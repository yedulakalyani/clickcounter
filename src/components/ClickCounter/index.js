import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">
          The Button has been clicked <span className="sub">{count}</span> times
        </h1>
        <p className="para">Click the button to Increase the count</p>

        <button
          className="btn-primary button"
          onClick={this.onIncrement}
          type="button"
        >
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
