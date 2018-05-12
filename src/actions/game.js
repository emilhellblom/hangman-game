import { NEW_GAME, MAKE_GUESS } from './types'
import { randomWord } from '../lib/game'

export const newGame = () => {
  const word = randomWord()
  return {
    type: NEW_GAME,
    word,
  }
}

export const makeGuess = guess => {
  return {
    type: MAKE_GUESS,
    guess,
  }
}
