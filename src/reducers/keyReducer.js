export default (state = {}, action) => {
  switch (action.type) {
    case 'KEY_ACTION':
    return {
      keys: action.payload // ...state.keys - to fill in afterplaceholder
    }
    default:
      return state
  }
}