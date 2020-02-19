import { expect } from 'chai';

import recipesReducer from 'src/reducers/recipes';

describe('tests sur le reducer de recettes', () => {
  describe('#structure', () => {
    it('expected to be a function', () => {
      expect(recipesReducer).to.be.a('function');
    });

    it('expected to return an object which has loading property', () => {
      expect(recipesReducer()).to.be.an('object')
        .which.has.a.property('loading', true);
    });
  });
});
