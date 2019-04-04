import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import {
  getAllStatus,
  getAllStatusSuccess,
  getAllStatusFail,
  getStatusByDate,
  getStatusByDateSuccess,
  getStatusByDateFail
} from './actions';
import logo from '../../logo.svg';


class MainPage extends Component {

  componentDidMount() {
    const { getAllStatus, getAllStatusSuccess, getAllStatusFail } = this.props.actions;
    getAllStatus({
      successAction: getAllStatusSuccess,
      failAction: getAllStatusFail,
    });
  }

  handleDayChange = (day) => {
    const { getStatusByDate, getStatusByDateSuccess, getStatusByDateFail } = this.props.actions;
    getStatusByDate({
      successAction: getStatusByDateSuccess,
      failAction: getStatusByDateFail,
      date: day
    });
  };

  render() {
    const { statuses } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <DayPickerInput onDayChange={this.handleDayChange} />
          <div className="block"/>
        </header>
        <div className="App-content">
          <Table responsive>
            <thead>
            <tr>
              <th>Timestamp</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {
              statuses.map((status, index) => (
                <tr key={index}>
                  <td>{status.ts}</td>
                  <td>{status.task}</td>
                  <td>{status.status}</td>
                </tr>
              ))
            }
            </tbody>
          </Table>
        </div>
        <footer className="App-footer">
          <div>copyright</div>
          <div>contact</div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    statuses: state.mainPageReducer.statuses,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getAllStatus,
        getAllStatusSuccess,
        getAllStatusFail,
        getStatusByDate,
        getStatusByDateSuccess,
        getStatusByDateFail
      },
      dispatch
    )
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);