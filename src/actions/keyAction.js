import { dispatch } from "rxjs/internal/observable/range";

export const keyAction = (key) => {
  dispatch({
    type: 'KEY_ACTION',
    paylaod: key
  })
}

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