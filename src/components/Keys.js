import React, { Component } from 'react';
import { clearArray, setStatus, togglePlay, addKey } from '../actions/keyAction';
import '../styles/Keys.scss'
import { connect } from 'react-redux';

class Keys extends Component {
  constructor(props) {
    super(props);

    this.addKey = this.addKey.bind(this);
  }

  addKey(e) {
    let targetEl = e.target.querySelector('span').innerHTML;
    this.props.addKey(targetEl);
    if (this.props.keyReducer.status) {
      this.props.setStatus('');
    }
  }

  playNotes() {
    let itemsProcess = 0;
    let allKeys = document.querySelectorAll('.key-name')

    allKeys.forEach((item) => {
      this.props.keyReducer.keys.forEach((store, index, array) => {
        if (store === item.innerHTML) {
          setTimeout(() => {
            item.parentElement.classList.add('pressed');
            setTimeout(() => {
              item.parentElement.classList.remove('pressed');
            }, 900)
            itemsProcess++;
            if (itemsProcess === array.length) {
              this.props.togglePlay()
              this.props.clearArray()
            }
          }, 1000 * index)
        }
      })
    });
  }

  render() {
    if (this.props.keyReducer.play) {
      this.playNotes();
    }

    return (
      <div className="keys-container">
        <div className="white-key flat" onClick={this.addKey}>
          <span className="key-name">C</span>
        </div>
        <div className="white-key flat" onClick={this.addKey}>
          <span className="key-name">D</span>
        </div>
        <div className="white-key" onClick={this.addKey}>
          <span className="key-name">E</span>
        </div>
        <div className="white-key flat" onClick={this.addKey}>
          <span className="key-name">F</span>
        </div>
        <div className="white-key flat" onClick={this.addKey}>
          <span className="key-name">G</span>
        </div>
        <div className="white-key flat" onClick={this.addKey}>
          <span className="key-name">A</span>
        </div>
        <div className="white-key" onClick={this.addKey}>
          <span className="key-name">B</span>
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
  setStatus: (status) => dispatch(setStatus(status)),
  clearArray: () => dispatch(clearArray()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Keys);