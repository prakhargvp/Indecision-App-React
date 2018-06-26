class Header extends React.Component{
	render(){
		return <p>This is from Header</p>;
	}
}

class Action extends React.Component{
	render(){
		return (
			<div>
				<button>What should I do ?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render(){
		return (
			<div>
				Options component here
			</div>
		);
	}
}

class AddOption extends React.Component {
	render(){
		return (
			<div>
				AddOption component here
			</div>
		);
	}
}

const jsx = (
	<div>
	<h1> Title </h1>
	<Header />
	<Action />
	<Options />
	<AddOption />
	</div>
);

ReactDOM.render(jsx, document.getElementById('app'));