import React, { Component } from 'react';
export default class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.url} alt="" />
        </div>
      </div>
    );
  }
}
