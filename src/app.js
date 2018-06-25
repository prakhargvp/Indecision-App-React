console.log("App.js is Running...");

var app = {
	title: 'Indecision App',
	subtitle: 'This is Subtitle',
	options: ['One', 'Two']
};
// JSX - Javascript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

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



var appRoot  = document.getElementById('app');

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