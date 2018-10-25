import * as React from 'react';
import './App.css';

interface IState {
	currentTask: string,
	tasks: Array<string>
}

class App extends React.Component {
	constructor(props: {}) {
		super(props);

		this.state = {
			currentTask: "",
			tasks: []
		}
	}


	public handleSubmit(event:any) {
		event.preventDefault();
		this.setState({
			currentTask: "",
			task:[
				...this.state.tasks,
				this.state.currentTask
			]
		})
	}

	public render() {
		return (
			<div className="App">
				<h1>React</h1>
				<form onSubmit={e => this.handleSubmit(event)}>
					<input
						type="text"
						placeholder="Add a Task"
					/>
					<button type="submit">Add Task</button>
				</form>
			</div>
		);
	}


}

export default App;
