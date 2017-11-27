import { h, Component } from 'preact';
import { Grid, Card, Dialog, Button } from 'preact-mdl';
import style from './style';

export default class Cifar extends Component {
	state = { pictures: [] };

	showDialog = () => {
		this.dialog.show();
	};

	closeDialog = () => {
		this.dialog.close();
	};

	// handleSubmits = (event) => {
	// 	const files = event.target.files;

	// 	const readFiles = (file) => {
	// 		if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
	// 			const reader = new FileReader();
	// 			reader.onload = (upload) => {
	// 				this.setState({
	// 					pictures: this.state.pictures.concat({ src: upload.target.result, prediction: 'Test' })
	// 				});
	// 			};
	// 			reader.readAsDataURL(file);
	// 		}
	// 	};

	// 	if (files) {
	// 		[].forEach.call(files, readFiles);
	// 	}

	// };

	handleSubmit = (event) => {
		let data = new FormData();

		Array.from(event.target.files).forEach((file) => {
			data.append(file.name, file);
		});

		fetch('http://localhost:5000/cifar/predict', {
			method: 'POST',
			body: data
		}).then(
			response => response.json()
		).then(success => {
			this.setState({
				pictures: this.state.pictures.concat(success)
			});
		}).catch(
			error => console.log(error)
		);

		event.target.value = '';
	};

	render({ }, { pictures }) {
		return (
			<Grid>
				<Grid.Cell>
					<Card>
						<Card.Title>
							<h2>Cifar</h2>
						</Card.Title>
						<Card.Text>
							<p>Try to classify some images from the following lables:<br />
							airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck.</p>
						</Card.Text>
						<Card.Actions>
							<input type="file" onChange={this.handleSubmit} multiple enctype="multipart/form-data"  />
						</Card.Actions>
					</Card>
				</Grid.Cell>
					
				{ pictures.map( picture => (
					<Grid.Cell>
						<Card class="wide">
							<Card.Title>
								<h4 class={style.cardPred}>{picture.prediction}</h4>
							</Card.Title>
							<Card.Text>
								<img src={'data:image/png;base64, ' + picture.src} class={style.cardImage} />
							</Card.Text>
						</Card>
					</Grid.Cell>
				)) }

				<Dialog ref={(dialog) => {this.dialog = dialog;}}>
					<Dialog.Content>
						<p>What image would you like to classify?</p>
					</Dialog.Content>
					<Dialog.Actions>
						<Button onClick={this.closeDialog}>Close</Button>
					</Dialog.Actions>
				</Dialog>
			</Grid>
		);
	}
}
