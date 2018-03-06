/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_FAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    characters: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'characters'], false);
    case LOAD_CHARACTERS_SUCCESS:
      return state
        .setIn(['userData', 'characters'], action.characters.data.results)
        .set('loading', false);        
    case LOAD_CHARACTERS_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
