import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
import 'preact-material-components/Theme/style.css';


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
			<Toolbar className="toolbar mdc--primary-override">
				<Toolbar.Row>
					<Toolbar.Section align-start>
						<Toolbar.Icon onClick={this.handleClick} menu>menu</Toolbar.Icon>
						<Toolbar.Title>Machine Learning Demos by Jacob Polloreno</Toolbar.Title>
					</Toolbar.Section>
					<Toolbar.Section align-end>
						<Toolbar.Icon rel="noopener noreferrer" target="_blank" href="https://github.com/JacobPolloreno/ML_Demos_Showcase">code</Toolbar.Icon>
					</Toolbar.Section>
				</Toolbar.Row>
				<Drawer.TemporaryDrawer open={this.state.drawerOpened} onClose={this.onClose}>
					<Drawer.DrawerContent>
						<List>
							<List.LinkItem href="/">
								<List.ItemIcon>home</List.ItemIcon>
								Home
							</List.LinkItem>
							<List.LinkItem href="/cifar">
								<List.ItemIcon>photo</List.ItemIcon>
								<List.TextContainer>
									<List.PrimaryText>
										Image Classification
									</List.PrimaryText>
									<List.SecondaryText>
										with Cifar10
									</List.SecondaryText>
								</List.TextContainer>
							</List.LinkItem>
							<List.LinkItem href="/workbuddy">
								<List.ItemIcon>question_answer</List.ItemIcon>
								WorkBuddy
							</List.LinkItem>
						</List>
					</Drawer.DrawerContent>
				</Drawer.TemporaryDrawer>
			</Toolbar>
		);
	}
}
