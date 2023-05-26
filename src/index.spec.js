const assert = require('assert');
const Filter = require('./index.js')

const filter = new Filter()

describe('Filter()', () => {
    describe('hasBadWords method', () => { 
        it('should return true when match a inappropriate word', () => {
            const text = 'Neste texto temos algumas palavras que serão filtradas, merda é uma palavra inapropriada, neste caso, o filtro deve retornar true'
            const result = filter.hasBadWords(text)
            assert.strictEqual(result, true)
        });
        it('should return false when not match a inappropriate word', () => {
            const text = 'Neste texto não temos palavras inapropriadas, neste caso, o filtro deve retornar false'
            const result = filter.hasBadWords(text)
            assert.strictEqual(result, false)
        })
     })
     describe('countBadWords', () => { 
        it('should return 1 when match a inappropriate word', () => {
            const text = 'Neste texto temos algumas palavras que serão filtradas, merda é uma palavra inapropriada, neste caso, o filtro deve retornar true'
            const result = filter.countBadWords(text)
            assert.strictEqual(result, 1)
        })
      })
})