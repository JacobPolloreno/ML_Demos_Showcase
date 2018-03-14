import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style';

export default () => (
	<LayoutGrid>
		<LayoutGrid.Inner>
			<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />
			<LayoutGrid.Cell desktopCols="8" phoneCols="4" tabletCols="8">
				<div>
					<p>Welcome! This project was created to learn more about Tensorflow Serving and deploying deep learning models
					to the web. Code for this site is on my<br />Code is on my <a rel="noopener noreferrer" target="_blank" href="https://github.com/JacobPolloreno/ML_Demos_Showcase">Github page</a>, where you'll also find links to repos for the ML models and REST API that help facilitate the requests.
					</p>
					<p>
					Open the sidebar on the left to access demos or click a link below:
					</p>
				</div>
			</LayoutGrid.Cell>
		</LayoutGrid.Inner>
	</LayoutGrid>
);
