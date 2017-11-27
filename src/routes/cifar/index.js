import { h, Component } from 'preact';
import { Grid, Card } from 'preact-mdl';
import style from './style';

export default class Cifar extends Component {
	state = { pictures: [] };

	handleSubmit = (event) => {
		let data = new FormData();
		const URL = 'http://localhost:8000/predict_cifar';

		Array.from(event.target.files).forEach((file) => {
			data.append('image', file);
		});

		fetch(URL, {
			method: 'POST',
			body: data
		}).then(
			response => response.json()
		).then(success => {
			this.setState({
				pictures: this.state.pictures.concat(success[0])
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
					<Card shadow="3" class="wide">
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
						<Card shadow="3" class="wide">
							<Card.Text class={style.cardText}>
								<img src={'data:image/png;base64, ' + picture.src} class={style.cardImage} />
								<p>{picture.prediction}</p>
								<hr />
								<ul>{picture.prediction_result.map( res => ( <li>{res.label}   {res.prob}</li>))}
								</ul>
							</Card.Text>
						</Card>
					</Grid.Cell>
				)) }

			</Grid>
		);
	}
}
