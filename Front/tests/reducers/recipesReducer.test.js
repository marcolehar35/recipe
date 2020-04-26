import { expect } from 'chai';

import recipesReducer from 'src/reducers/recipes';

import { saveRecipes } from 'src/actions/recipes';

describe('reducer for recipes', () => {
  describe('structure', () => {
    it('is a function', () => {
      // assertion pour vérifier si recipesReducer existe (détecter un problème d'import)
      expect(recipesReducer).to.exist;
      // assertion pour vérifier si recipesReducer est bien une fonction
      expect(recipesReducer).to.be.a('function');
    });

    it('check initial state', () => {
      // le reducer a des valeurs par défaut pour les paramètres, si je l'utilise
      // sans argument je récupère le state initial (c'est ce que le store utilise
      // au moment de sa création ;)
      // https://www.chaijs.com/api/bdd/#method_eql
      expect(recipesReducer()).to.be.eql({
        loading: true,
        list: [],
      });
      // si pour debugguer on met une autre valeur initiale (par exemple on met en dur
      // une recette avec un nom très long) => en lançant les tests on sera averti
      // qu'on a une régression
    });
  });

  describe('with actions', () => {
    it('check case of action SAVE_RECIPES', () => {
      const stateBefore = {
        loading: true,
        list: [],
      };
      const newRecipes = [{ a: 1 }, { b: 2 }];
      const action = saveRecipes(newRecipes);
      expect(recipesReducer(stateBefore, action)).to.eql({
        loading: false, // loading has been set to false
        list: newRecipes, // recipes have been added
      });
    });
  });
});
