// argument object - no longer bound with arrow function

const add =  function(a, b){
	console.log(arguments);
	return a + b;
};

console.log(add(5, 10, 15));

const addArrow =  (a, b) => {
	// console.log(arguments);	// Not Allowed
	return a + b;
};

console.log(addArrow(5, 10, 15));


// this keyword - no longer bound

const user = {
	name: 'Prakhar',
	cities: ['Rewa', 'Jhansi', 'Moth', 'Shivpuri', 'Haridwar', 'Dehradun'],
	printPlacedLived: function () {
		const that = this;
		this.cities.forEach(function(city){
			console.log(that.name + " is lived in " + city);
		});
	}
};

user.printPlacedLived();


const userArrow = {
	name: 'Prakhar',
	cities: ['Rewa', 'Jhansi', 'Moth', 'Shivpuri', 'Haridwar', 'Dehradun'],
	printPlacedLived(){
		// Array.map is used to transform that elements
		// Array.forEach is used to access Array elements
		return this.cities.map((city) => this.name + " has lived in " + city);
	}
};

console.log(userArrow.printPlacedLived());


const multipier = {
	numbers: [1, 2, 3, 4, 5],
	multiplyBy: 2,
	multiply(){
		return this.numbers.map((n) => n * this.multiplyBy);
	}
};

console.log(multipier.multiply());