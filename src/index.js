const list = require('./utils/list.js')

class Filter {
    constructor() {
        this.list = list
    }

    hasBadWords(text) {
        return this.list.some(word => text.includes(word))
    }
    countBadWords(text) {
        const words = text.split(' ')
        const badWords = words.filter(word => this.list.includes(word))
        return badWords.length
    }
}

module.exports = Filter