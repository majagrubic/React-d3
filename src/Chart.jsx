import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import chart from './chart';
import * as _ from 'lodash';

class Chart extends Component {

  componentDidMount() {
    var el = ReactDOM.findDOMNode(this);

    chart.create(el, {
      width: '960',
      height: '500'
    }, this.getChartState());
  }

  componentDidUpdate() {
    chart.update(this.getChartState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps.data, this.props.data);
  }

  getChartState() {
    return {
      data: this.props.data,
      title: this.props.title
    };
  }

  componentWillUnmount() {
    var el = this.getDOMNode();

    chart.destroy(el);
  }

  render() {
    return (
      <div className='chart-div'></div>
    );
  }
}

Chart.propTypes = {
    data: React.PropTypes.array,
    title: React.PropTypes.string
};

export default Chart;
