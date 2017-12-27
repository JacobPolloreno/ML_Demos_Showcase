import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Button/style.css';

export default class Sidebar extends Component {
	handleClick = e => {
		this.setState({
			drawerOpened: !this.state.drawerOpened
		});
	}

	onClose = e => {
		this.setState({
			drawerOpened: false
		});
	}

	constructor() {
		super();
		this.state = {
			drawerOpened: false
		};
	}

	render() {
		return (
			<div>
				<Button onClick={this.handleClick}>Open Drawer</Button>
				<Drawer.TemporaryDrawer open={this.state.drawerOpened} onClose={this.onClose}>
					<Drawer.TemporaryDrawerHeader>Demos</Drawer.TemporaryDrawerHeader>
					<Drawer.TemporaryDrawerContent>
						<List>
							<List.LinkItem>
								<Link activeClassName="is-active" href="/">Home</Link>
							</List.LinkItem>
							<List.LinkItem>
								<Link activeClassName="is-active" href="/cifar">Cifar</Link>
							</List.LinkItem>
							<List.LinkItem>
								<Link activeClassName="is-active" href="/tvscript">TV Script</Link>
							</List.LinkItem>
						</List>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
			</div>
		);
	}
}
