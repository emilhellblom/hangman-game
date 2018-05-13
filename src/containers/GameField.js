import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewGameButton } from '../components/NewGameButton'
import { SubmitGuess } from '../components/SubmitGuess'
import { showGuess, wrongGuessCount, isWinner, wrongGuessLimit, gameFinished } from '../lib/game'
import {images} from '../data/images'
import './gamefield.css'


export class GameField extends Component {
  render() {
    const { word, guess } = this.props
    if (gameFinished(word, guess) && guess.length) {
      return (
        <div className='gamefield'>
          {isWinner(word, guess) &&
            <h1>
              WINNER
            </h1>
          }
          {wrongGuessLimit(word, guess) &&
            <div>
              <img src={images[5]} alt='hangman'/>
              <h1>
                LOSER
              </h1>
            </div>
          }
          <NewGameButton />
        </div>
      )
    } else {
      return (
        <div className='gamefield'>
          {word &&
            <div>
              {wrongGuessCount(word, guess) > 0 && <img src={images[wrongGuessCount(word, guess) - 1]} alt='hangman'/>}
              <h1>
                {showGuess(word, guess)}
              </h1>
              <SubmitGuess />
              <h2>
                {wrongGuessCount(word, guess)}
              </h2>
              <h3>Enter the letter you want to guess, you can only enter letters.</h3>
              <h3>If you guess incorrectly 6 times, you hang.</h3>
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
