import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Cifar from '../routes/cifar';
import WorkBuddy from '../routes/workbuddy';
import UniBuddy from '../routes/unibuddy';
import Sidebar from '../components/toolbar';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Sidebar />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Cifar path="/cifar" />
					<WorkBuddy path="/workbuddy" />
					<UniBuddy path="/unibuddy" />
				</Router>
			</div>
		);
	}
}
