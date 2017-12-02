import { h, Component } from 'preact';
import { Button, Grid, TextField } from 'preact-mdl';
import style from './style';


export default class TVscript extends Component {
	state = { speaker: 'homer_simpson:', primer: '', text: '' };

	setPrimer = e => {
		this.setState({ primer: e.target.value,
			text: '' });
	};

	setSelect = e => {
		this.setState({ speaker: e.target.value });
	};

	handleSubmit = e => {
		let data = new FormData();
		const URL = 'http://localhost:8000/predict_tvscript';

		let text = this.state.speaker + ' ' + this.state.primer;
		data.append('text', text);

		fetch(URL, {
			method: 'POST',
			body: data
		}).then(
			response => response.json()
		).then(success => {
			this.setState({
				primer: '',
				text: success[0].prediction_result
			});
		}).catch(
			error => console.log(error)
		);

	};

	render({ }, { speaker, text, primer }) {
		return (
			<Grid class={style.demoContainer}>
				<Grid.Cell class="mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
				<Grid.Cell class={'mdl-cell--8-col ' + style.demoContent} shadow="2">
					<h3>Generate Short TV Script</h3>
					<TextField
						placeholder="Input some starter dialogue..."
						value={primer}
						onInput={this.setPrimer}
						class={style.demoText}
						maxlength={20}
					/>
					<select value={speaker} onChange={this.setSelect}>
						<option value="homer_simpson:">Homer Simpson</option>
						<option value="moe_szyslak:">Moe Szyslak</option>
						<option value="barney_gumble:">Barney Gumble</option>
					</select>
					<Button onClick={this.handleSubmit} type="submit">Generate</Button>
					<div>
						{ primer ? speaker : null} { primer }
					</div>
					<div>
						{ text.split('\n').map(line => (
							<p>{ line }</p>
						))}
					</div>
				</Grid.Cell>
			</Grid>
		);
	}
}
