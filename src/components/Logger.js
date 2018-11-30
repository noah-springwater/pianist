import React, { Component } from 'react';
import { keyAction } from '../actions/keyAction';
import '../styles/Logger.scss';
import { connect } from 'react-redux';

class Logger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.logKeys = this.logKeys.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    })
  }

  logKeys(e) {
    e.preventDefault();
    let arrayOfKeys = this.state.value.split(',').map(item => item.trim().toUpperCase())

    this.keyAction(arrayOfKeys)
  }

  keyAction = (pianoKey) => {
    this.props.keyAction(pianoKey);
  }

  render() {
    return (
      <div className="logger-container">
        <form onSubmit={this.logKeys}>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  keyAction: (pianoKey) => dispatch(keyAction(pianoKey))
})


export default connect(mapStateToProps, mapDispatchToProps)(Logger);
