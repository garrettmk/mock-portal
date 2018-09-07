import React, { Component } from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

import './App.css';
import logo from "./sp_logo.png";
import DentistProduction from "./DentistProduction";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = {
    root: {},
    toolbar: {
        backgroundColor: '#30415A'
    },
    title: {
        flexGrow: 1
    },
    subtitle: {
        flexGrow: 1
    },
    card: {
        maxWidth: 345
    },
    cardMedia: {
        height: 140
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position={'fixed'}>
          <Toolbar className={classes.toolbar}>

            <img src={logo} height={'32px'} alt={'Square Practice'}/>

            <Typography variant={'title'} color={'inherit'} className={classes.title}>
            </Typography>

            <IconButton color={'inherit'}>
                <AccountCircle/>
            </IconButton>

            <Typography variant={'body1'} color={'inherit'}>
                Dr. Betterface
            </Typography>

          </Toolbar>
        </AppBar>
        <main style={{ paddingTop: '5rem' }}>
          <Grid container spacing={16} direction={'column'} align={'center'}>
            <Grid item>
              <DentistProduction/>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
