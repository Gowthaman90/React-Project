import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import TotalShiftCharts from '../components/totalShiftCharts';

export default class totalShiftCharts extends Component {
  render() {
    return (
      <div className="totalShiftCharts">
        <Header />
        <TotalShiftCharts />
	  </div>
    );
  }
}