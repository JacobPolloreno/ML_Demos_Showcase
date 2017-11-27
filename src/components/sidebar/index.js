import { h } from 'preact';
import { Layout, Navigation } from 'preact-mdl';
import { Link } from 'preact-router/match';

export default () => (
	<Layout.Drawer>
		<Layout.Title>Demos</Layout.Title>
		<Navigation>
			<Link activeClassName="is-active" href="/">Home</Link>
			<Link activeClassName="is-active" href="/cifar">Cifar</Link>
			<Link activeClassName="is-active" href="/tvscript">TV Script</Link>
		</Navigation>
	</Layout.Drawer>
);
