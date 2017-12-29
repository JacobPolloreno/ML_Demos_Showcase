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
					<p>Below are a few demos that demonstrate basic machine learning algorithms, use of common datasets, and experiments.<br />Code is on my <a rel="noopener noreferrer" target="_blank" href="https://github.com/JacobPolloreno/ML_Demos_Showcase">Github page.</a>
					</p>
				</div>
			</LayoutGrid.Cell>
		</LayoutGrid.Inner>
	</LayoutGrid>
);
