let visible = false;
const toggleVisiblity = () => {
	visible = !visible;
	render();
};
const render = () => {
	const jsx = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisiblity}>{visible ? 'Hide Content' : 'Show Content'}</button>
			{ visible && 
				(
				<div>
					<p>Hi! This is a content.</p>
				</div>
				)
			}
		</div>
	);
	ReactDOM.render(jsx, document.getElementById('app'));
};

render();