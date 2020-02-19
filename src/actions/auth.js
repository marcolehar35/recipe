// Types
export const CHANGE_FIELD = 'CHANGE_FIELD';


// Creators
export const changeField = (value, name) => ({
  type: CHANGE_FIELD,
  value,
  name,
});
