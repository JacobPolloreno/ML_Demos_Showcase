import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Cifar from '../routes/cifar';
// import TVscript from '../routes/tvscript';
import Sidebar from '../components/toolbar';

// const APIKEY = 'AIzaSyAzl7SK0y1eXZZz1ZC55qShHtWkP3oSfLA';
// const CLIENTID = '97118263867-2t4nvsrgf6s01qpha1vutjo6mnc7p29c.apps.googleusercontent.com';
// const SCOPE = 'https://www.googleapis.com/auth/cloud-platform';

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
				<Sidebar />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Cifar path="/cifar" />
				</Router>
			</div>
		);
	}
}
