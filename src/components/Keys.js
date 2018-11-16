import React, { Component } from 'react';
import '../styles/Keys.scss'

class Keys extends Component {
  constructor(props) {
    super(props);

    this.addClass = this.addClass.bind(this);
  }

  addClass(event) {
    // event.preventDefault();
    let e = event.target;

    if (!e.classList.contains('pressed')) {
      // console.log('added class')
      e.classList.add('pressed')
      setTimeout(() => {
        e.classList.remove('pressed')
      }, 1000)
    }


    // console.log(e.querySelector('span').innerHTML);
  }

  render() {
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

export default Keys;