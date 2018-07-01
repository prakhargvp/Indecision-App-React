import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{

	state = {
			options: [],
			selectedOption: undefined
	};

	handleDeleteOptions = () => {
		this.setState(() => ({
			options : []
		}));
	}
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return option !== optionToRemove
			})
		}));
	}
	handleClearSelectedOption = () => {
		this.setState(() => ({ 
			selectedOption: undefined 
		}));
	}
	handlePick = () => {
		const randomNumber = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNumber];
		this.setState(() => ({ 
			selectedOption: option 
		}));
	}
	handleAddOption = (option) => {
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
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action 
						hasOption={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<Options 
						handleDeleteOption={this.handleDeleteOption}
						options={this.state.options} 
						handleDeleteOptions={this.handleDeleteOptions}
					/>
					<AddOption 
						handleAddOption={this.handleAddOption} 
					/>

					<OptionModal 
					selectedOption={this.state.selectedOption} 
					handleClearSelectedOption={this.handleClearSelectedOption}
					/>
				</div>
			</div>
		);
	}
}
