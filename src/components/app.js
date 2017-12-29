import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Cifar from '../routes/cifar';
// import TVscript from '../routes/tvscript';
import Sidebar from '../components/toolbar';

							// <TVscript path="/tvscript" />

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
				</Router>
			</div>
		);
	}
}
