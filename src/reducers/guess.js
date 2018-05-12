export const guess = (state = [], action) => {
  switch (action.type){
    case 'MAKE_GUESS':
      return [...state, action.guess]
    case 'NEW_GAME':
      return state = []
    default:
      return state
  }
}
