export const word = (state = { word: '', guess: [] }, action) => {
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
