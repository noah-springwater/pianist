import React, { Component } from 'react';
import { addKey, togglePlay, setStatus } from '../actions/keyAction';
import '../styles/Logger.scss';
import { connect } from 'react-redux';

class Logger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressedKey: null
    }

    this.setStatus = this.setStatus.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.logKeys = this.logKeys.bind(this);
    this.updateOnKeyPressed = this.updateOnKeyPressed.bind(this);
  }

  setStatus(currentStatus) {
    this.props.setStatus(currentStatus)
  }

  onKeyPressed(e) {
    let typedKey = this.state.pressedKey;
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
      this.setStatus('');
      this.props.addKey(typedKey);
    }
  }

  updateOnKeyPressed(e) {
    this.setState({
      pressedKey: e.key.toUpperCase(),
    })
  }

  logKeys() {
    this.props.keyReducer.keys.length ?
      this.props.togglePlay() :
      this.props.setStatus('Unless you\'re John Cage, please SELECT or TYPE a valid piano key!')
  }

  render() {
    return (
      <div className="logger-container">
          <div className="play-button" onClick={this.logKeys}></div>
          <div className="input-container">
            <input type="text" value={this.props.keyReducer.keys} onKeyDown={this.updateOnKeyPressed} onChange={this.onKeyPressed} />
            { this.props.keyReducer.status ? (
              <div className="error-container">
                <span className="error-message">{this.props.keyReducer.status}</span>
              </div>
              ) : (
                ''
              )}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  addKey: (key) => dispatch(addKey(key)),
  togglePlay: () => dispatch(togglePlay()),
  setStatus: (status) => dispatch(setStatus(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logger);