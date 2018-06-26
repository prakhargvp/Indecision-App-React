'use strict';

console.log("App.js is Running...");

var app = {
	title: 'Indecision App',
	subtitle: 'This is Subtitle',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();
	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};
var onRemoveAll = function onRemoveAll() {
	app.options = [];
	render();
};
var onMakeDecision = function onMakeDecision() {
	var randomNumber = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNumber];
	alert(option);
};

var render = function render() {
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
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No Options'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What should I do ?'
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	var appRoot = document.getElementById('app');

	ReactDOM.render(template, appRoot);
};

render();
