'use strict';

console.log("App.js is Running...");

// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' Indecision App '
	),
	React.createElement(
		'p',
		null,
		' This is some info! '
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

var userName = 'Prakhar';
var userAge = 21;
var userLocation = 'Dehradun';

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		userName
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		userAge
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		userLocation
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
