export const word = (state = { word: '' }, action) => {
  switch (action.type){
    case 'NEW_GAME':
      return {
        word: action.word,
        guess: []
      }
    default:
      return state
  }
}
