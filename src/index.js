var uniqueRandomArray = require('unique-random-array');
var jsBooks = require('./js-books.json');
var getRandomItem = uniqueRandomArray(jsBooks);

module.exports = {
	all: jsBooks,
	random: random
};

function random(number) {
	if (number === undefined) {
		return getRandomItem();
	} else {
		var randomItems = [];
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		return randomItems;
	}
}