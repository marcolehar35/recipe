// Types
export const LOAD_RECIPES = 'LOAD_RECIPES';
export const SAVE_RECIPES = 'SAVE_RECIPES';

// Creators
export const loadRecipes = () => ({
  type: LOAD_RECIPES,
});

export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  recipes,
});
