const list = require('./src/utils/list.js')

class InappropriateWordsFilter {
    constructor() {
        this.list = list
    }
    /**
     * This method checks if the text contains bad words
     * @param {string} text
     * @returns {boolean}
     */
    check(text) {
        if(!text) return false
        if(typeof text !== 'string') throw new Error('The argument must be a string')
        text.toLocaleLowerCase()
        return this.list.some(word => text.includes(word))
    }
    /**
     *  This method counts how many bad words are in the text
     * @param {string} text
     * @returns {number} 
     */
    count(text) {
        const words = text.split(' ')
        const badWords = words.filter(word => this.list.includes(word))
        return badWords.length
    }

    /**
     * This method replaces bad words with asterisks, the default is '*'
     * @param {string} text
     * @param {string} replacement
     * @returns {string}
     */

    replace(text, replacement = '*') {
        const words = text.split(' ');
        const result = words.map(word => {
            if(!this.list.includes(word)) return word
            const asterisks = replacement.repeat(word.length);
            return asterisks;
        });
        return result.join(' ');
    }
}

module.exports = InappropriateWordsFilter