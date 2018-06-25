const square =  function(x){
	return x * x;
};

const squareArrow = (x) => {
	return x * x;
};

// Short hand
const squareArrow2 = (x) => x * x;

console.log(square(10));	
console.log(squareArrow(10));
console.log(squareArrow2(10));


const getFirstName = (fullName) => {
	return fullName.split(' ')[0];
};

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Prakhar Agrawal'));
console.log(getFirstName2('Prakhar Agrawal'));