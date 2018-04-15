import React, { Component } from 'react';
import GModal from '../../src/index';
import './basic.scss';

export default class Basic extends Component {
  state = {
    show: false,
    time: new Date().toString()
  }
  switch = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toString(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <button className="cool-btn" onClick={this.switch}>show</button>
        <GModal
          show={this.state.show}
        >
          <div className="popup-layout">
            <div className="popup-window">
              {this.state.time} <br />
              <button className="cool-btn" onClick={this.switch}>switch</button>
           </div>
          </div>
        </GModal>
      </div>
    );
  }
}