import React, { Component } from 'react';
import { keyAction } from '../actions/keyAction';
import '../styles/Keys.scss'
import { connect } from 'react-redux';


class Keys extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    let allKeys = document.querySelectorAll('.key-name')
    allKeys.forEach((item) => {
      this.props.keyReducer.keys.forEach((store, index) => {
        if (store === item.innerHTML) {
          setTimeout(() => {
            item.parentElement.classList.add('pressed');
            setTimeout(() => {
              item.parentElement.classList.remove('pressed');
            }, 1000)
          }, 1000 * index)
        }
      })
    });

    return (
      <div className="keys-container">
        <div className="white-key flat" onClick={this.addClass}>
          <span className="key-name">C</span>
        </div>
        <div className="white-key flat" onClick={this.addClass}>
          <span className="key-name">D</span>
        </div>
        <div className="white-key" onClick={this.addClass}>
          <span className="key-name">E</span>
        </div>
        <div className="white-key flat" onClick={this.addClass}>
          <span className="key-name">F</span>
        </div>
        <div className="white-key flat" onClick={this.addClass}>
          <span className="key-name">G</span>
        </div>
        <div className="white-key flat" onClick={this.addClass}>
          <span className="key-name">A</span>
        </div>
        <div className="white-key" onClick={this.addClass}>
          <span className="key-name">B</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Keys);