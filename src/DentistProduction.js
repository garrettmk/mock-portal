import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = {
  root: {},
  title: {
    color: 'red'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class DentistProduction extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>

        <CardHeader
          className={classes.header}
          classes={{
            title: classes.title
          }}
          title={'Dentist Production'}
          subheader={'Production & collection amounts, by provider'}
        />

        <CardMedia
          className={classes.media}
          image={'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OC8zMjUvb3JpZ2luYWwvY2hhbWVsZW9uLmpwZw=='}
          title={'A Lizard'}
        />
        <CardContent>

        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(DentistProduction);
