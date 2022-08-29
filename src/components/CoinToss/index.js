// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    tossCoinResult: 0,
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  onClickChangeCoinSide = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState({tossCoinResult: tossResult})
    this.setState(prevState => ({totalCount: prevState.totalCount + 1}))

    if (tossResult === 0) {
      this.setState(prevState => ({headCount: prevState.headCount + 1}))
    } else {
      this.setState(prevState => ({tailCount: prevState.tailCount + 1}))
    }
  }

  render() {
    const {tossCoinResult, totalCount, headCount, tailCount} = this.state
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {tossCoinResult === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="toss-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="toss-image"
            />
          )}
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickChangeCoinSide}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss