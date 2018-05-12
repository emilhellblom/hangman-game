import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewGameButton } from '../components/NewGameButton'
import { SubmitGuess } from '../components/SubmitGuess'
import { showGuess, wrongGuessCount, isWinner, wrongGuessLimit, gameFinished } from '../lib/game'


export class GameField extends Component {
  render() {
    const { word, guess } = this.props
    if (gameFinished(word, guess) && guess.length) {
      return (
        <div>
          {isWinner(word, guess) &&
            <h1>
              WINNER
            </h1>
          }
          {wrongGuessLimit(word, guess) &&
            <h1>
              LOSER
            </h1>
          }
          <NewGameButton />
        </div>
      )
    } else {
      return (
        <div>
          {word &&
            <div>
              <h1>
                {showGuess(word, guess)}
              </h1>
              <SubmitGuess />
              <h2>
                {wrongGuessCount(word, guess)}
              </h2>
            </div>
          }
          <NewGameButton />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    word: state.word.word,
    guess: state.guess
  }
}

export default connect(mapStateToProps)(GameField)
