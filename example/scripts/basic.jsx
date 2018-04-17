import React, { Component } from 'react';
import GModal from '../../src/index';
import './basic.scss';

export default class Basic extends Component {
  state = {
    show: false,
    time: new Date().getSeconds()
  }
  switch = () => {
    this.setState({
      show: !this.state.show
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().getSeconds(),
      });
    }, 1000);
  }
  render() {
    return (
      <div className="basic-example">
        <button className="cool-btn" onClick={this.switch}>show</button>
        <GModal
          show={this.state.show}
        >
          <div className="popup-layout">
            <div className="popup-window">
              <h1>{this.state.time}</h1> <br />
              <button className="cool-btn" onClick={this.switch}>hide</button>
           </div>
          </div>
        </GModal>
      </div>
    );
  }
}