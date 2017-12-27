import { h, Component } from 'preact';
import { Router } from 'preact-router';
// import mdl from 'material-design-lite/material';
// import { Layout, Grid } from 'preact-mdl';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import Home from '../routes/home';
// import Cifar from '../routes/cifar';
// import TVscript from '../routes/tvscript';
import Sidebar from '../components/sidebar';
// import Home from 'async!./home';

// const APIKEY = 'AIzaSyAzl7SK0y1eXZZz1ZC55qShHtWkP3oSfLA';
// const CLIENTID = '97118263867-2t4nvsrgf6s01qpha1vutjo6mnc7p29c.apps.googleusercontent.com';
// const SCOPE = 'https://www.googleapis.com/auth/cloud-platform';

							// <Cifar path="/cifar" />
							// <TVscript path="/tvscript" />

export default class App extends Component {
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	loadGoogleApi() {
		const script = document.createElement("script");
		script.src = 'https://apis.google.com/js/api.js';

		script.onload = () => {
			gapi.load('client:auth2', () => {
				gapi.client.init({
					apiKey: APIKEY,
					clientId: CLIENTID,
					scope: SCOPE
                }).then(() => {
                    console.log('GAPI loaded');
                }
                );
			});
		};
		
		document.body.appendChild(script);
	}

	// componentWillMount() {
	// 	this.loadGoogleApi();
	// }

	render() {
		return (
			<div id="app">
				<LayoutGrid>
					<Sidebar />
					<LayoutGrid.Inner>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
						</Router>
					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}
}
