const list = require('./utils/list.js')

class Filter {
    constructor() {
        this.list = list
    }

    hasBadWords(text) {
        if(!text) return false
        if(typeof text !== 'string') throw new Error('The argument must be a string')
        text.toLocaleLowerCase()
        return this.list.some(word => text.includes(word))
    }
    countBadWords(text) {
        const words = text.split(' ')
        const badWords = words.filter(word => this.list.includes(word))
        return badWords.length
    }
}

module.exports = Filter