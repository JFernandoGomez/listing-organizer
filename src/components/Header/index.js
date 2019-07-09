import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import './Header.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

export function Header() {

	return (
		<AppBar className="header" position="fixed">
			<Toolbar>
				<HeaderMenu />
				<Typography variant="h6" className="header__title" >
					List Organizer
          </Typography>
			</Toolbar>
		</AppBar>
	);
}


export function HeaderMenu() {

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	}

	const handleClose = () => {
		setAnchorEl(null);
	}

	return (
		<React.Fragment>
			<IconButton
				edge="start"
				className="header__menu button"
				color="inherit"
				aria-label="Menu"
				onClick={handleOpen}
			>
				<MenuIcon />
			</IconButton>

			<Drawer anchor="left" open={Boolean(anchorEl)} onClose={handleClose}>
				<List
					className="header__sidemenu"
					subheader={
						<ListSubheader component="div" className="title" id="nested-list-subheader">
							A simple List organizer
						</ListSubheader>
					}
				>
					<Divider />
					<ListItem button key={'Refresh'} onClick={_ => window.location.reload()}>
						<ListItemText primary={'Refresh'} />
					</ListItem>
					<Divider />
					<ListItem button key={'Github'} onClick={_ => window.open('https://github.com/JFernandoGomez', '_blank')}>
						<ListItemText primary={'Go to Github JFernandoGomez'} />
					</ListItem>
					<Divider />
					<ListItem key={'thanks'} className='thanks'>
						<ListItemText primary={'Thanks for reviewing'} />
					</ListItem>
				</List>
			</Drawer>
		</React.Fragment>
	)
}
