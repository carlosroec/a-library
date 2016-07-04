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

		it('should return an array of random items if passed a number', function() {
			var randomItems = jsBooks.random(3);
			expect(randomItems).to.have.length(3);
			randomItems.forEach(function(item) {
				expect(jsBooks.all).to.include(item);
			});
		})
	});
});