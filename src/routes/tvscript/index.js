import { h, Component } from 'preact';
import { Button, Grid, TextField } from 'preact-mdl';
import style from './style';


export default class TVscript extends Component {
	state = { primer: 'homer_simpson', text: '' };

	setText = e => {
		this.setState({ text: e.target.value });
	};

	setSelect = e => {
		this.setState({ primer: e.target.value });
	};

	handleSubmit = e => {
		e.preventdefault();
	};

	render({ }, { text, primer }) {
		return (
			<Grid class={style.demoContainer}>
				<Grid.Cell class="mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
				<Grid.Cell class={'mdl-cell--8-col ' + style.demoContent} shadow="2">
					<h3>Generate TV Script</h3>
					<TextField
						placeholder="Input some starter dialogue..."
						value={text}
						onInput={this.setText}
						class={style.demoText}
					/>
					<select value={primer} onChange={this.setSelect}>
						<option value="homer_simpson">Homer Simpson</option>
						<option value="moe_szyslak">Moe Szyslak</option>
						<option value="barney_gumble">Barney Gumble</option>
					</select>
					<Button type="submit">Generate</Button>
					<p>{ primer } : { text }</p>
				</Grid.Cell>
			</Grid>
		);
	}
}
