console.log("App.js is Running...");

// JSX - Javascript XML
var template = (
	<div>
		<h1> Indecision App </h1>
		<p> This is some info! </p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var userName = 'Prakhar';
var userAge  = 21;
var userLocation = 'Dehradun';

var templateTwo = (
	<div>
		<h1>{userName}</h1>
		<p>Age: {userAge}</p>
		<p>Location: {userLocation}</p>
	</div>
);
var appRoot  = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);