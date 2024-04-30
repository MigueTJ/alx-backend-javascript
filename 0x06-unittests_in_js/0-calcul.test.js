const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Tests for calculateNumber', function (){
	describe('Sums two Integers', function () {
		it('should return integer', function () {
			assert.strictEqual(calculateNumber(1, 3), 4);
		});
	});

	describe('Sums float and Integer', function () {
		it ('should return integer', function () {
			assert.strictEqual(calculateNumber(1, 3.7), 5);
		});
	});

	describe('Sums one float & one integer (round down:', function () {
		it('should return int', function () {
			assert.strictEqual(calculateNumber(1, 3.3), 4);
		});
	});

	describe('Sums one float & one int reveresed:', function() {
		it('should return int', function () {
			assert.strictEqual(calculateNumber(1,3.3), 4);
		});
	});

	describe('Sums two floating point numbers with borderline', function () {
		it('Should return integer', function () {
			assert.strictEqual(calculateNumber(1.5,3.7), 6);
		});
	});
});
