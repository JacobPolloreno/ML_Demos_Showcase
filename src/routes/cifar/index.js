import { h, Component } from 'preact';
import { Grid, Card } from 'preact-mdl';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'precharts';
import style from './style';

export default class Cifar extends Component {
	state = { pictures: [] };

	handleSubmit = (event) => {
		let data = new FormData();
		let previewImg = new FileReader();
		const URL = 'http://localhost:8000/predict_cifar';

		Array.from(event.target.files).forEach((file) => {
			data.append('image', file);
			previewImg.readAsDataURL(file);
		});

		fetch(URL, {
			method: 'POST',
			body: data
		}).then(
			response => response.json()
		).then(success => {
			let result = success[0];
			result.src = previewImg.result;
			this.setState({
				pictures: this.state.pictures.concat(result)
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
							<input type="file" onChange={this.handleSubmit} enctype="multipart/form-data"  />
						</Card.Actions>
					</Card>
				</Grid.Cell>
					
				{ pictures.map( picture => (
					<Grid.Cell>
						<Card shadow="3" class="wide">
							<Card.Text class={style.cardText}>
								<img src={picture.src} class={style.cardImage} />
								<ResponsiveContainer minWidth={250} minHeight={300}>
									<BarChart layout="vertical" data={picture.prediction_result}>
										<XAxis dataKey="prob" type="number" tickLine={false} />
										<YAxis type="category" dataKey="label"
											axisLine={false} tickLine={false} interval={0}
										/>
										<Bar dataKey="prob" fill="#16ce97" />
										<Tooltip />
									</BarChart>
								</ResponsiveContainer>
							</Card.Text>
						</Card>
					</Grid.Cell>
				)) }

			</Grid>
		);
	}

}
