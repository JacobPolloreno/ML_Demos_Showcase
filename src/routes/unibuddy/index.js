import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Icon from 'preact-material-components/Icon';
import TextField from 'preact-material-components/TextField';

import 'preact-material-components/TextField/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import 'preact-material-components/Fab/style.css';
import style from './style';

export default class UniBuddy extends Component {
	state = { query: '', results: [] };

	handleSubmit = (event) => {
		let data = new FormData();
		const URL = 'http://localhost:8000/unibuddy';

		data.append('text', this.state.query);
		this.setState({query : ' '});

		fetch(URL, {
			method: 'POST',
			body: data
		}).then(
			response => response.json()
		).then(success => {
			let result = success[0];
			this.setState({
				results: Object.values(result.results)
			});
		}).catch(
			error => console.log(error)
		);

		event.target.value = '';
	};

	render({ }, { results }) {
		return (
			<div>
				<LayoutGrid>
					<LayoutGrid.Inner>
						<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />
						<LayoutGrid.Cell desktopCols="8" phoneCols="12" tabletCols="12">
							<Card>
								<Card.Primary>
									<Card.Title className={style.cardTitle}>WorkBuddy - Universal Encoder</Card.Title>

									<TextField fullwidth label="Enter your question here..." helperText="WorkBuddy can help you answer questions about HR and IT." helperTextPersistent value={this.state.query} onInput={e =>this.setState({query : e.target.value})} />
								</Card.Primary>
								<Card.Actions>
									<Card.Action onClick={this.handleSubmit}>SEARCH</Card.Action>
								</Card.Actions>
							</Card>
						</LayoutGrid.Cell>
						<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />

						{ results.map( result => (
							<div style="display:contents">
								<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />
								<LayoutGrid.Cell desktopCols="8" phoneCols="12" tabletCols="12">
									<Card>
										<Card.Primary>
											cosine distance: {result.dist}
										</Card.Primary>
										<Card.SupportingText>
											{result.doc}
										</Card.SupportingText>
									</Card>
								</LayoutGrid.Cell>
								<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />
							</div>
						)) }

					</LayoutGrid.Inner>
				</LayoutGrid>
			</div>
		);
	}

}
