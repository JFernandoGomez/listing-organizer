import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss';

export default function Header() {

  return (
      <AppBar className="header" position="fixed">
        <Toolbar>
          <IconButton edge="start" className="header__menu button" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="header__title" >
            List Organizer
          </Typography>
          <Button color="inherit" className="header__about">About</Button>
        </Toolbar>
      </AppBar>
  );
}

