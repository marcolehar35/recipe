// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SET_USER = 'SET_USER';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});

export const setUser = (logged, user) => ({
  type: SET_USER,
  logged,
  user,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
