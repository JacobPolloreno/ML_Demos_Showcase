import { h, Component } from 'preact';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'precharts';
import Card from 'preact-material-components/Card';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Fab from 'preact-material-components/Fab';
import Icon from 'preact-material-components/Icon';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Fab/style.css';
import style from './style';

export default class Cifar extends Component {
	state = { pictures: [] };

	handleSubmit = (event) => {
		let data = new FormData();
		let previewImg = new FileReader();
		const URL = 'https://api.jacobpolloreno.com/predict_cifar';

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
			<div>
				<LayoutGrid>
					<LayoutGrid.Inner>
						<LayoutGrid.Cell desktopCols="4" phoneCols="0" tabletCols="0" />
						<LayoutGrid.Cell desktopCols="4" phoneCols="4" tabletCols="8">
							<Card>
								<Card.Primary>
									<Card.Title className={style.cardTitle}>Cifar10</Card.Title>
								</Card.Primary>
								<Card.SupportingText>
									<p>
										NOTE: Initial request may take long!<br />

										This is a demonstration of basic image classification on the cifar10<br />
										dataset. This project was created to learn to serve Tensorflow models<br />
										on Tensorflow Serving.<br/ ><br />

										Try to classify some images from the following lables:<br />
										airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck.
									</p>
								</Card.SupportingText>
								<Card.Actions>
									<input type="file" onChange={this.handleSubmit} enctype="multipart/form-data" />
								</Card.Actions>
							</Card>
						</LayoutGrid.Cell>
						<LayoutGrid.Cell desktopCols="4" phoneCols="0" tabletCols="0" />

						{ pictures.map( picture => (
							<LayoutGrid.Cell desktopCols="3" phoneCols="4" tabletCols="8">
								<Card>
									<Card.Primary>
										<img src={picture.src} className={style.cardImage} />
									</Card.Primary>
									<Card.SupportingText>
										<ResponsiveContainer minWidth={180} minHeight={200}>
											<BarChart layout="vertical" data={picture.prediction_result}>
												<XAxis dataKey="prob" type="number" tickLine={false} />
												<YAxis type="category" dataKey="label"
													axisLine={false} tickLine={false} interval={0}
												/>
												<Bar dataKey="prob" fill="#23a07b" />
												<Tooltip />
											</BarChart>
										</ResponsiveContainer>
									</Card.SupportingText>
								</Card>
							</LayoutGrid.Cell>
						)) }

					</LayoutGrid.Inner>
				</LayoutGrid>
				<Fab ripple className="fab--absolute mdc--primary-override" onClick={() => {this.fileInput.click();}}>
					<Icon>file_upload</Icon>
					<input ref={fileInput => {this.fileInput=fileInput;}} className={style.fileInput} type="file" onChange={this.handleSubmit} />
				</Fab>
			</div>
		);
	}

}
