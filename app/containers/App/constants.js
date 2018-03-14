/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const LOAD_CHARACTERS = 'marvel/App/LOAD_CHARACTERS';
export const LOAD_CHARACTERS_SUCCESS = 'marvel/App/LOAD_CHARACTERS_SUCCESS';
export const LOAD_CHARACTERS_FAIL = 'marvel/App/LOAD_CHARACTERS_FAIL';
export const LOAD_COMICS = 'marvel/App/LOAD_COMICS';
export const LOAD_COMICS_SUCCESS = 'marvel/App/LOAD_COMICS_SUCCESS';
export const LOAD_COMICS_FAIL = 'marvel/App/LOAD_COMICS_FAIL';

export const API_KEY = '0f686698f337fe4e6b54c4fa1f5b7430';
export const MARVEL_HOST = 'https://gateway.marvel.com:443';
