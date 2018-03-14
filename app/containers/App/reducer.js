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

import {
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_FAIL,
  LOAD_COMICS,
  LOAD_COMICS_SUCCESS,
  LOAD_COMICS_FAIL
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  userData: {
    characters: false,
    comics: false,
  },
});

function characterData(state = {}, action) {
  switch (action.type) {
    case LOAD_CHARACTERS_SUCCESS:
      return state
        .setIn(['userData', 'characters'], action.characters.data.results)
        .set('loading', false);   
    default:
      return state;
  }
}

function comicData(state = {}, action) {
  switch (action.type) {
    case LOAD_COMICS_SUCCESS:
      return state
        .setIn(['userData', 'comics'], action.comics.data.results)
        .set('loading', false);        
    default:
      return state;
  }
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CHARACTERS:
    case LOAD_COMICS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'characters'], false)
        .setIn(['userData', 'comics'], false)
    case LOAD_CHARACTERS_SUCCESS:
      return characterData(state, action);
    case LOAD_COMICS_SUCCESS:
      return comicData(state, action);    
    case LOAD_COMICS_FAIL:
    case LOAD_CHARACTERS_FAIL:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
