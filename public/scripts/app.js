'use strict';

console.log("App.js is Running...");

var app = {
	title: 'Indecision App',
	subtitle: 'This is Subtitle'
};
// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);

var user = {
	name: 'Prakhar',
	age: 21,
	location: 'Dehradun'
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
