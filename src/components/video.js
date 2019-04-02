import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
                <div className="offset-1"></div>
                <div className="col-10 my-3">
                    <iframe title="video" width="100%" height="345" src="https://www.youtube.com/embed/0THq-fyMois"></iframe>
                    <p>App for Svg and Js</p>
                </div>
                <div className="offset-1"></div>
            </div>
          </div>
      </div>
    );
  }
}

export default Video;