import React, { Component } from 'react';
import { togglePlay, addKey } from '../actions/keyAction';
import '../styles/Keys.scss'
import { connect } from 'react-redux';


class Keys extends Component {
  constructor(props) {
    super(props);

    this.addKey = this.addKey.bind(this);
  }

  addKey(e) {
    let targetEl = e.target.querySelector('span').innerHTML;
    console.log(targetEl, 'tapping keys');
    this.props.addKey(targetEl);
  }

  playNotes() {
    if (this.props.keyReducer.play) {
      let itemsProcess = 0;
      let allKeys = document.querySelectorAll('.key-name')
      allKeys.forEach((item) => {
        this.props.keyReducer.keys.forEach((store, index, array) => {
          if (store === item.innerHTML) {
            setTimeout(() => {
              item.parentElement.classList.add('pressed');
              setTimeout(() => {
                item.parentElement.classList.remove('pressed');
              }, 1000)
              itemsProcess++;
              if (itemsProcess === array.length) {
                this.props.togglePlay()
              }
            }, 1000 * index)
          }
        })
      });
    }
  }

  render() {
    this.playNotes();
    
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
  togglePlay: () => dispatch(togglePlay())
})

export default connect(mapStateToProps, mapDispatchToProps)(Keys);