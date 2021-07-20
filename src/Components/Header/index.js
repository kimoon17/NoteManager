import './styles.css';

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from "react"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: '100%'
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Header">
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" variant="h6">
            Notes
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
