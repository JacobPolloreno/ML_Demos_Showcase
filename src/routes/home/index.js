import { h, Component } from 'preact';
import { Grid } from 'preact-mdl';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<Grid class={style.demoContainer}>
				<Grid.Cell class="mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
				<Grid.Cell class={'mdl-cell--8-col ' + style.demoContent} shadow="2">
					<h1>Home</h1>
					<p>This is the Home component.</p>
				</Grid.Cell>
			</Grid>
		);
	}
}
