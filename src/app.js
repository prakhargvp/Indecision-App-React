// install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';

class IndecisionApp extends React.Component{
	constructor(props){
		super(props);
		this.handleDeleteOption  = this.handleDeleteOption.bind(this);  
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options: ['a']
		};
	}
	handleDeleteOptions(){
		this.setState(() => ({
			options : []
		}));
	}
	handleDeleteOption(optionToRemove){
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return option !== optionToRemove
			})
		}));
	}
	handlePick(){
		const randomNumber = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNumber];
		alert(option);
	}
	handleAddOption(option){
		if (!option){
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1){
			return 'The Option already exists.';
		}

		this.setState((prevState) => ({
				options: prevState.options.concat(option)
		}));
	}
	componentWillMount(){
		// Fetching Data
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(() => ({ options }));
			}
		}catch(e){
			// Do nothing at all
		}
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount(){
		console.log("Component Will Unmount");
	}
	render() {
		const title    = 'Indecision App';
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action 
					hasOption={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options 
				handleDeleteOption={this.handleDeleteOption}
				options={this.state.options} 
				handleDeleteOptions={this.handleDeleteOptions}
				/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
		<h1>{props.title}</h1>
		<h2>{props.subtitle}</h2>
		</div>
	);
};

const Action = (props) => {
	return (
		<div>
			<button 
			onClick={props.handlePick}
			disabled={!props.hasOption}
			>
				What should I do ?
			</button>
		</div>
	);
};


const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{
				props.options.map((option) => (
					<Option 
						key={option} 
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
};



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));