var expect = require('chai').expect;
var jsBooks = require('./index');

describe('js-book-names', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(jsBooks.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain `Eloquent JavaScript`', function() {
			expect(jsBooks.all).to.include('Eloquent JavaScript');
		});
	});
	
	describe('random', function() {
		it('should return a random item from the jsBooks.all', function() {
			var randomItem = jsBooks.random();
			expect(jsBooks.all).to.include(randomItem);
		});
	});
});