import React, { Component, PropTypes } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Paper from 'material-ui/Paper';
import ChartBar from 'material-ui/AppBar';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const data = [
      {name: 'Morning Shift', Servicing: 6000, ECM: 4000, LSAMS: 2400},
      {name: 'Noon Shift', Servicing: 4000, ECM: 2600, LSAMS: 1879},
      {name: 'Night Shift', Servicing: 2780, ECM: 1587, LSAMS: 269},
];

class ChartBarHeader extends Component {
  render() {
    return (
      <ChartBar
          title="Total Tickets Volume"
        />
    );
  }
}

const style = {
  height: 370,
  width: 600,
  margin: 60,
  textAlign: 'bottom',
  display: 'inline-block',
};



export default class totalShiftCharts extends Component {
  render() {
    return (
      <div className="totalShiftCharts">
        <Paper style={style} zDepth={4}>
          <ChartBarHeader />
          <BarChart width={600} height={300} data={data}
              margin={{top: 40, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
                <Bar dataKey="Servicing" minPointSize={5} fill="#8884d8" />
                <Bar dataKey="ECM" minPointSize={10} fill="#82ca9d" />
                <Bar dataKey="LSAMS" minPointSize={15} fill="#FFFF00" />
          </BarChart>
        </Paper>
			</div>
    );
  }
}