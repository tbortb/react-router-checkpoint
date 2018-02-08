import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from './components/Login'
import TopNav from './components/TopNav'

export class App extends Component {

  mySubmit = (values) => {
    console.log('the vals', values);
    console.log('the props', this);
  }

  render() {
    return (
      <div>
        <TopNav />
        <Login/>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//     return {
//       actions: bindActionCreators(todoActions, dispatch)
//     }
// }
export default connect(null, null)(App);
