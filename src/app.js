console.log("App.js is Running...");

var app = {
	title: 'Indecision App',
	subtitle: 'This is Subtitle'
};
// JSX - Javascript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var user = {
	name: 'Prakhar',
	age : 21,
	location: 'Dehradun'
};

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);
var appRoot  = document.getElementById('app');

ReactDOM.render(template, appRoot);