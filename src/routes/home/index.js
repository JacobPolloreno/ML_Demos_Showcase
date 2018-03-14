import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import List from 'preact-material-components/List';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/List/style.css';

export default () => (
	<LayoutGrid>
		<LayoutGrid.Inner>
			<LayoutGrid.Cell desktopCols="2" phoneCols="0" tabletCols="0" />
			<LayoutGrid.Cell desktopCols="8" phoneCols="4" tabletCols="8">
				<div>
					<p>Welcome! This project was created to learn more about Tensorflow Serving and deploying deep learning models
					to the web. <br />Code is on my <a rel="noopener noreferrer" target="_blank" href="https://github.com/JacobPolloreno/ML_Demos_Showcase">Github page</a>, where you'll also find links to repos for the ML models and REST API that help facilitate the requests.
					</p>
					<p>
						Click a demo below to try:
						<List>
							<List.LinkItem href="/cifar">
								<List.ItemIcon>photo</List.ItemIcon>
								<List.PrimaryText>Image Classification on Cifar10</List.PrimaryText>
							</List.LinkItem>
						</List>
					</p>
				</div>
			</LayoutGrid.Cell>
		</LayoutGrid.Inner>
	</LayoutGrid>
);
