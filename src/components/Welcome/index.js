// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button
            className="subscribe-button"
            type="button"
            onClick={this.onSubscribe}
          >
            Subscribe
          </button>
        ) : (
          <button
            className="subscribe-button"
            type="button"
            onClick={this.onSubscribe}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
