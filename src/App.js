import React, { Component } from 'react';
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import './App.css';
import logo from "./sp_logo.png";


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
        <main>
          <Grid container spacing={16}>
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      Lizard
                    </Typography>
                    <Typography component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
