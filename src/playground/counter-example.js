
var appRoot  = document.getElementById('app');


let count = 0;
const addOne = () => {
	count++;
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};




const renderCounterApp = () => {
	const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>-1</button>
		<button onClick={reset}>0</button>
	</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();