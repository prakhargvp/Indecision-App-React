console.log("App.js is Running...");

const app = {
	title: 'Indecision App',
	subtitle: 'This is Subtitle',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};
const onRemoveAll = () => {
	app.options = [];
	render();
};
const onMakeDecision = () => {
	const randomNumber = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNumber];
	alert(option);
};

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<p>{app.subtitle}</p>
			<p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{
					app.options.map((option) => {
						return <li key={option}>{option}</li>
					})
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	const appRoot  = document.getElementById('app');

	ReactDOM.render(template, appRoot);	
}

render();