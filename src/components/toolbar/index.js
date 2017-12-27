import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';


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
			<Toolbar className="toolbar">
				<Toolbar.Row>
					<Toolbar.Section align-start>
						<Toolbar.Icon onClick={this.handleClick} menu>menu</Toolbar.Icon>
						<Toolbar.Title>Machine Learning Demos by Jacob Polloreno</Toolbar.Title>
					</Toolbar.Section>
				</Toolbar.Row>
				<Drawer.TemporaryDrawer open={this.state.drawerOpened} onClose={this.onClose}>
					<Drawer.TemporaryDrawerContent>
						<List>
							<List.LinkItem href="/">Home</List.LinkItem>
							<List.LinkItem href="/cifar">Cifar</List.LinkItem>
							<List.LinkItem href="/tvscript">TV Script</List.LinkItem>
						</List>
					</Drawer.TemporaryDrawerContent>
				</Drawer.TemporaryDrawer>
			</Toolbar>
		);
	}
}
