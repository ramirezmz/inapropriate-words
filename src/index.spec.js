const assert = require('assert');
const InappropriateWordsFilter = require('../index.js')

const inappropriateWords = new InappropriateWordsFilter()

const INAPROPRIATE_PHRASE = 'Neste texto temos algumas palavras que serão filtradas, merda é uma palavra inapropriada, neste caso, o filtro deve retornar true'
describe('Filter()', () => {
    describe('check method', () => { 
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
     describe('count method', () => { 
        it('should return 1 when match a inappropriate word', () => {
            const result = inappropriateWords.count(INAPROPRIATE_PHRASE)
            assert.strictEqual(result, 1)
        })
        it('should return 3 when match 3 inappropriate words', () => {
            const word = 'olá, merda, tudo bem?, merda, bosta, testando'
            const result = inappropriateWords.count(word)
            assert.strictEqual(result, 3)
        })
    })
    describe('replace method', () => {
        it('should return a text with asterisks when match a inappropriate word', () => {
            const result = inappropriateWords.replace(INAPROPRIATE_PHRASE)
            assert.strictEqual(result, 'Neste texto temos algumas palavras que serão filtradas, ***** é uma palavra inapropriada, neste caso, o filtro deve retornar true')
        })
        it('should return a text with 0 symbols when match a inappropriate word', () => {
            const result = inappropriateWords.replace(INAPROPRIATE_PHRASE, '0')
            assert.strictEqual(result, 'Neste texto temos algumas palavras que serão filtradas, 00000 é uma palavra inapropriada, neste caso, o filtro deve retornar true')
        })
        it('should return a text with astericks and ... when match a inappropriate word', () => {
            const text = 'Testando, merda... bosta, testando'
            const result = inappropriateWords.replace(text)
            assert.strictEqual(result, 'Testando, *****... *****, testando')
        })
    })
    describe('add method', () => {

        it('should add a new word to the list', () => {
            const word = 'palavra'
            console.log(inappropriateWords.add(word))
            assert.strictEqual(inappropriateWords.list.includes(word), true)
        })
        it('should view a message when add a new word to the list', () => {
            const word = 'test'
            const result = inappropriateWords.add(word)
            assert.strictEqual(result, `The word ${word} was added to the list`)
        })
        it('should throw new Error when word is empty', () => {
            const word = ''
            assert.throws(() => inappropriateWords.add(word), Error('The argument must be a string'))
        })
        it('should throw new Error when word is not a string', () => {
            const word = 123
            assert.throws(() => inappropriateWords.add(word), Error('The argument must be a string'))
        })
        it('should throw new Error when word already exists', () => {
            const word = 'merda'
            assert.throws(() => inappropriateWords.add(word), Error('This word already exists'))
        })
    })
})