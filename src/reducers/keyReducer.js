export default (state = {keys: [], play: false, status: ''}, action) => {
  switch (action.type) {
    case 'KEY_ACTION':
      return {
        keys: action.payload,
      }

    case 'ADD_KEY':
      return {
        ...state,
        keys: [...state.keys, action.payload]
      }

    case 'HANDLE_PLAY':
      return {
        ...state,
        play: !state.play
      }

    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload
      }

    case 'CLEAR_ARRAY':
      return {
        ...state,
        keys: []
      }

    default:
      return state
  }
}