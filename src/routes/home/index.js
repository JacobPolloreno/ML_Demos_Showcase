import { h, Component } from 'preact';
import GridList from 'preact-material-components/GridList';
import 'preact-material-components/GridList/style.css';


export default class Home extends Component {
	render() {
		return (
			<GridList>
				<GridList.Tiles>
					<GridList.Tile>
						<h1>Home</h1>
						<p>This is the Home component.</p>
					</GridList.Tile>
				</GridList.Tiles>
			</GridList>
		);
	}
}
