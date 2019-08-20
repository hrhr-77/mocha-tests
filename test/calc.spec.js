const { Calculator } = require('../src/calc');
const assert = require('assert');



describe('Calculator', () => {
  it('should add numbers', () => {
    //assert.expectation(3); //sprawdza ile testow sie wykonalo

    assert.equal(Calculator.add(2,2), 4);
    //assert.equal(Calculator.add(2,2), 5, "Błędny wynik dodawania");
  })
})
