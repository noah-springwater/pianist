import { dispatch } from "rxjs/internal/observable/range";

export const keyAction = (pianoKey) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'KEY_ACTION',
      payload: pianoKey,
    })
  }, 1000)
  
}