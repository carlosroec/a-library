var uniqueRandomArray = require('unique-random-array');
var jsBooks = require('./js-books.json');

module.exports = {
	all: jsBooks,
	random: uniqueRandomArray(jsBooks)
};