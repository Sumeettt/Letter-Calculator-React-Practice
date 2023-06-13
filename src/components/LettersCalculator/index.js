// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onWritingLetters = event => {
    console.log(event.target.value)
    const letterCount = event.target.value.length

    console.log(letterCount)
    this.setState({
      count: letterCount,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="calculate-heading">Calculate the letters you enter</h1>
          <div className="input-container">
            <label htmlFor="temp-id" className="calculate-phrase">
              Enter the phrase
            </label>
            <input
              id="temp-id"
              onChange={this.onWritingLetters}
              className="input"
              placeholder="Enter the phrase"
            />
          </div>
          <p className="count-indicator">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
