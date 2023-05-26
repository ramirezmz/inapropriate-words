# Inappropriate Words

A simple javascript library to detect inappropriate words in a string.
Til now I only have a list of following languages:

- [x] English
- [x] Portuguese
- [x] Spanish
- [x] French
- [x] German
- [x] Italian

## Usage

**Requirements**

- Node.js
- NPM

**Examples**

```javascript
const InappropriateWords = require('inappropriate-words');

const Filter = new InappropriateWords();

const text = 'Neste texto temos algumas palavras que serão filtradas, merda é uma palavra inapropriada.'

const filteredText = Filter.hasBadWords(text);

console.log(filteredText); // Needs to return true
```

## Contributing

Send a pull request with your changes and tests!