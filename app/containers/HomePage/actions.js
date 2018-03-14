/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_COMICS,
  LOAD_COMICS_SUCCESS,
  LOAD_COMICS_FAIL,
} from '../App/constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadComics() {
  return {
    type: LOAD_COMICS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} comics The repository data
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function comicsLoaded(comics) {
  return {
    type: LOAD_COMICS_SUCCESS,
    comics,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function comicsLoadingError(error) {
  return {
    type: LOAD_COMICS_FAIL,
    error,
  };
}
