const list = require('./utils/list.js')

class Filter {
    constructor() {
        this.list = list
    }
    /**
     * This method checks if the text contains bad words
     * @param {string} text
     * @returns {boolean}
     */
    hasBadWords(text) {
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
    countBadWords(text) {
        const words = text.split(' ')
        const badWords = words.filter(word => this.list.includes(word))
        return badWords.length
    }
}

module.exports = Filter