import React, { Component } from 'react';
import { connect } from 'react-redux';
import { keyAction } from '../actions/keyAction';
import Keys from './Keys';
import '../styles/App.scss';

class App extends Component {
  keyAction = (event) => {
    this.props.keyAction();
  }

  render() {
    return (
      <div className="App">
        <Keys />
        <button onClick={this.keyAction}>Test Redux Action</button>
        <pre>
          {
            JSON.stringify(this.props.keyReducer.keys)
          }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  keyAction: () => dispatch(keyAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
