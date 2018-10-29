import { Action } from 'redux';

function initialState() {
  return {};
}
export default function reducer(state = initialState(), action: Action) {
  switch (action) {
    default:
      return state;
  }
}
