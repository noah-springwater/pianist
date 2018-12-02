export const addKey = (individualKey) => dispatch => {
  dispatch({
    type: 'ADD_KEY',
    payload: individualKey
  })
};

export const togglePlay = () => dispatch => {
  dispatch({
    type: 'HANDLE_PLAY'
  })
}

export const setStatus = (status) => dispatch => {
  dispatch({
    type: 'SET_STATUS',
    payload: status
  })
}

export const clearArray = () => dispatch => {
  dispatch({
    type: 'CLEAR_ARRAY',
  })
}