import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import React, { Component } from 'react';
export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        className="spinner"
      />
    );
  }
}
