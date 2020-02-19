// Import npm
import { expect } from 'chai';

// Code
const value = 2;

function addition(a, b) {
  return a + b;
}

// Tests

// describe me permet de définir une série / un chapitre de tests
describe('Tests de démo', () => {
  describe('Série de tests : addition', () => {
    // 1er test
    it('expected to be a function', () => {
      // l'assertion à vérifier
      expect(addition).to.be.a('function');
    });

    // 2eme test (dans la meme série)
    it('expected to return sum of parameters', () => {
      expect(addition(1, 2)).to.be.equal(3);
    });

    // status pending. Pas d'assertion à tester
    it('should ... ');
  });
});
