import React, { Component } from "react";
import PropTypes from "prop-types";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const styles = {
  root: {
  },
  title: {
  },
  media: {
    height: 150
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
          title={'Production & Collection'}
          subheader={'by provider'}
          action={<IconButton><MoreVertIcon/></IconButton>}
        />

        <HighchartsReact
          highcharts={Highcharts}
          options={{
            title: 'Test Chart',
            chart: {
              height: '56%'
            },
            xAxis: {
              categories: ['One', 'Two', 'Three', 'Four'],
            },
            series: [
              { name: 'Production', type: 'column', data: [1, 2, 3, 4] },
              { name: 'Collection', type: 'column', data: [2, 3, 4, 5]}
            ]
          }}
        />

        <CardContent>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Provider</TableCell>
                <TableCell numeric>Production</TableCell>
                <TableCell numeric>Collection</TableCell>
                <TableCell numeric>Hours</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(DentistProduction);
