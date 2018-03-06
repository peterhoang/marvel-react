/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_CHARACTERS } from 'containers/App/constants';
import { charactersLoaded, charactersLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getCharacters() {
  const requestURL = `https://gateway.marvel.com:443/v1/public/characters?limit=1&apikey=0f686698f337fe4e6b54c4fa1f5b7430`;

  try {
    // Call our request helper (see 'utils/request')
    const characters = yield call(request, requestURL);
    yield put(charactersLoaded(characters));
  } catch (err) {
    yield put(charactersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getCharactersData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_CHARACTERS, getCharacters);
}