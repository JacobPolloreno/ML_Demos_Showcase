import { h, Component } from 'preact';
import { Router } from 'preact-router';
import mdl from 'material-design-lite/material';
import { Layout, Grid } from 'preact-mdl';

import Home from '../routes/home';
import Cifar from '../routes/cifar';
import TVscript from '../routes/tvscript';
import Sidebar from '../components/sidebar';
// import Home from 'async!./home';

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Layout fixed-drawer>
					<Sidebar />
					<Layout.Content>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Cifar path="/cifar" />
							<TVscript path="/tvscript" />
						</Router>
					</Layout.Content>
				</Layout>
			</div>
		);
	}
}
