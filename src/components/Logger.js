import React, { Component } from 'react';
import { keyAction, addKey, togglePlay, setStatus } from '../actions/keyAction';
import '../styles/Logger.scss';
import { connect } from 'react-redux';

class Logger extends Component {
  constructor(props) {
    super(props);

    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.setStatus = this.setStatus.bind(this);
    this.logKeys = this.logKeys.bind(this);
  }

  setStatus(currentStatus) {
    this.props.setStatus(currentStatus)
  }

  onKeyPressed(e) {
    let typedKey = e.key.toUpperCase();
    if (typedKey !== 'C' && 
        typedKey !== 'D' &&
        typedKey !== 'E' &&
        typedKey !== 'E' &&
        typedKey !== 'F' &&
        typedKey !== 'G' &&
        typedKey !== 'A' && 
        typedKey !== 'B') {
      this.setStatus('SELECT or TYPE a valid note!')
    } else {
      if (this.props.keyReducer.status !== '') {
        this.setStatus('');
      }
      this.props.addKey(typedKey);
    }
  }

  logKeys(e) {
    e.preventDefault();
    // let arrayOfKeys = this.props.keyReducer.keys.map(item => item.trim())
    // console.log(this.props.keyReducer.keys)
    this.props.togglePlay();
  }

  render() {
    return (
      <div className="logger-container">
          <div className="play-button" onClick={this.logKeys}></div>
          <input type="text" value={this.props.keyReducer.keys} onKeyDown={this.onKeyPressed} />
          <span className="motivation-text">{this.props.keyReducer.status}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  keyAction: (key) => dispatch(keyAction(key)),
  addKey: (key) => dispatch(addKey(key)),
  togglePlay: () => dispatch(togglePlay()),
  setStatus: (status) => dispatch(setStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logger);