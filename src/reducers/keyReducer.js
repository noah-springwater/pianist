export default (state = {keys: []}, action) => {
  switch (action.type) {
    case 'KEY_ACTION':
      return {
        keys: action.payload,
        hasClass: true,
      }
    default:
      return state
  }
}