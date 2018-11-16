import { dispatch } from "rxjs/internal/observable/range";

export const keyAction = () => dispatch => {
  dispatch({
    type: 'KEY_ACTION',
    payload: [2],
  })
}