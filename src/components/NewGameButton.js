import React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

const Button = ({newGame}) => (
  <div>
    <button onClick={() => newGame()}>
      New Game
    </button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    newGame: () => dispatch(newGame())
  }
}


export const NewGameButton = connect(null, mapDispatchToProps)(Button)
