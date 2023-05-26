const assert = require('assert');
const InappropriateWordsFilter = require('../index.js')

const inappropriateWords = new InappropriateWordsFilter()

const INAPROPRIATE_PHRASE = 'Neste texto temos algumas palavras que serão filtradas, merda é uma palavra inapropriada, neste caso, o filtro deve retornar true'
describe('Filter()', () => {
    describe('hasBadWords method', () => { 
        it('should return true when match a inappropriate word', () => {
            const result = inappropriateWords.check(INAPROPRIATE_PHRASE)
            assert.strictEqual(result, true)
        });
        it('should return false when not match a inappropriate word', () => {
            const text = 'Neste texto não temos palavras inapropriadas, neste caso, o filtro deve retornar false'
            const result = inappropriateWords.check(text)
            assert.strictEqual(result, false)
        })
        it('should return false when text is empty', () => {
            const text = ''
            const result = inappropriateWords.check(text)
            assert.strictEqual(result, false)
        })
        it('should return throw new Error when text is not a string', () => {
            const text = 123
            assert.throws(() => inappropriateWords.check(text), Error('The argument must be a string'))
        })
        
    })
     describe('countBadWords', () => { 
        it('should return 1 when match a inappropriate word', () => {
            const result = inappropriateWords.count(INAPROPRIATE_PHRASE)
            assert.strictEqual(result, 1)
        })
    })
    describe('replace', () => {
        it('should return a text with asterisks when match a inappropriate word', () => {
            const result = inappropriateWords.replace(INAPROPRIATE_PHRASE)
            assert.strictEqual(result, 'Neste texto temos algumas palavras que serão filtradas, ***** é uma palavra inapropriada, neste caso, o filtro deve retornar true')
        })
        it('should return a text with 0 symbols when match a inappropriate word', () => {
            const result = inappropriateWords.replace(INAPROPRIATE_PHRASE, '0')
            assert.strictEqual(result, 'Neste texto temos algumas palavras que serão filtradas, 00000 é uma palavra inapropriada, neste caso, o filtro deve retornar true')
        })
    })
})