const soma = require('./soma')

describe('Soma', () => {
  it('Deverá somar dois números inteiros', () => {
    expect(soma(7, 3)).toBe(10)
  })
})